import type { Metadata } from "next";
import "../styles/index.css";

export const metadata: Metadata = {
  title: "Pulse",
  description: "Pulse: artigos e notas sobre produto e engenharia.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

