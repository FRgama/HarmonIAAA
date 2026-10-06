import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HarmonIA — Vista-se de possibilidades",
  description:
    "Seu guarda-roupa, traduzido em possibilidades. Conheça a plataforma inteligente que conecta tecnologia, estilo e escolhas mais conscientes.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
