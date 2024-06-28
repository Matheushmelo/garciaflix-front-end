import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Garciaflix",
  description: "Tenha acesso aos melhores cursos de programação com a melhor metodologia do mercado!",
  icons: {
    icon: '/favicon.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
    
  );
}
