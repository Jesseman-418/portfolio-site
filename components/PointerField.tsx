"use client";

import { useEffect, useRef } from "react";

export default function PointerField() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!cursor || !finePointer.matches || reducedMotion.matches) return;

    document.body.classList.add("has-live-cursor");

    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      cursor.style.setProperty("--cursor-x", `${event.clientX}px`);
      cursor.style.setProperty("--cursor-y", `${event.clientY}px`);
      document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
    };

    const onOver = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      cursor.classList.toggle("is-hot", Boolean((event.target as Element).closest("a, button, [role='tab'], [data-cursor='link']")));
    };

    const onOut = (event: PointerEvent) => {
      if (!(event.relatedTarget instanceof Element)) cursor.classList.remove("is-hot");
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    window.addEventListener("pointerout", onOut, { passive: true });

    return () => {
      document.body.classList.remove("has-live-cursor");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      window.removeEventListener("pointerout", onOut);
    };
  }, []);

  return <div ref={cursorRef} aria-hidden="true" className="cursor-orb" />;
}
