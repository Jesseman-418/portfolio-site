"use client";

import { useEffect, useRef } from "react";

type Point = {
  x: number;
  y: number;
  phase: number;
  radius: number;
};

export default function Constellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointerQuery = window.matchMedia("(pointer: fine)");
    const points: Point[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;
    let pointerX = -1000;
    let pointerY = -1000;

    for (let row = 0; row < 8; row += 1) {
      for (let column = 0; column < 9; column += 1) {
        const noise = Math.sin(row * 17.7 + column * 9.3) * 0.5 + 0.5;
        points.push({
          x: (column + 0.2 + noise * 0.55) / 9,
          y: (row + 0.15 + noise * 0.6) / 8,
          phase: row * 0.8 + column * 1.35,
          radius: 1.1 + noise * 1.4,
        });
      }
    }

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      draw(performance.now());
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointerX = event.clientX - rect.left;
      pointerY = event.clientY - rect.top;
    };

    const onPointerLeave = () => {
      pointerX = -1000;
      pointerY = -1000;
    };

    const draw = (time: number) => {
      if (!width || !height) return;
      context.clearRect(0, 0, width, height);
      const positions = points.map((point) => {
        const drift = motionQuery.matches ? 0 : Math.sin(time * 0.00045 + point.phase) * 9;
        let x = point.x * width + drift;
        let y = point.y * height + Math.cos(time * 0.00035 + point.phase) * 8;

        const dx = x - pointerX;
        const dy = y - pointerY;
        const distance = Math.hypot(dx, dy);
        if (distance < 150 && distance > 0) {
          const force = (1 - distance / 150) * 18;
          x += (dx / distance) * force;
          y += (dy / distance) * force;
        }
        return { x, y, radius: point.radius };
      });

      positions.forEach((point, index) => {
        positions.slice(index + 1).forEach((other) => {
          const distance = Math.hypot(point.x - other.x, point.y - other.y);
          if (distance < 112) {
            const glow = Math.max(0, 1 - distance / 112);
            context.beginPath();
            context.moveTo(point.x, point.y);
            context.lineTo(other.x, other.y);
            context.strokeStyle = `rgba(200, 255, 77, ${glow * 0.24})`;
            context.lineWidth = 0.7;
            context.stroke();
          }
        });
      });

      positions.forEach((point) => {
        const distance = Math.hypot(point.x - pointerX, point.y - pointerY);
        const active = distance < 150;
        context.beginPath();
        context.arc(point.x, point.y, active ? point.radius + 1.5 : point.radius, 0, Math.PI * 2);
        context.fillStyle = active ? "rgba(221, 255, 151, 0.95)" : "rgba(200, 255, 77, 0.62)";
        context.fill();
      });

      if (!motionQuery.matches) frame = window.requestAnimationFrame(draw);
    };

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    if (pointerQuery.matches) {
      canvas.addEventListener("pointermove", onPointerMove, { passive: true });
      canvas.addEventListener("pointerleave", onPointerLeave);
    }
    resize();

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="h-full w-full" />;
}
