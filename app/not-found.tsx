export default function NotFound() {
  return (
    <main style={{ minHeight: "100svh", background: "#111210", color: "#f2f0e8", display: "grid", placeItems: "center", padding: 24, fontFamily: "Arial, sans-serif" }}>
      <div style={{ maxWidth: 600, width: "100%" }}>
        <a href="/" style={{ color: "#d8f06a", fontFamily: "monospace", fontSize: 12, letterSpacing: ".12em", textDecoration: "none" }}>JESSEMAN DEVAMIRTHAM</a>
        <p style={{ color: "#d8f06a", fontFamily: "monospace", fontSize: 11, marginTop: 90 }}>404 / PAGE NOT FOUND</p>
        <h1 style={{ fontSize: "clamp(52px, 10vw, 100px)", letterSpacing: "-.08em", lineHeight: ".9", fontWeight: 500 }}>Looks like<br />a dead end<span style={{ color: "#d8f06a" }}>.</span></h1>
        <p style={{ color: "#aaa99f", lineHeight: 1.7, maxWidth: 400 }}>That page isn’t here. Head back to the portfolio and keep exploring.</p>
        <a href="/" style={{ display: "inline-block", background: "#d8f06a", color: "#171811", padding: "14px 18px", marginTop: 18, fontSize: 12, fontWeight: 700, textDecoration: "none" }}>Back to the portfolio ↗</a>
      </div>
    </main>
  );
}
