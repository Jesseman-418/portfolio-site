import "./styles.css";

export const metadata = {
  title: "DocQA Workspace | Jesseman Devamirtham",
  description: "A private document workspace with semantic retrieval, source citations, and retrieval evaluation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
