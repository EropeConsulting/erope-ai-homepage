import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Erope.AI | AI 기반 자동컨설팅 플랫폼",
  description: "Erope.AI는 AI 기반 자동컨설팅 플랫폼 및 정보화전략컨설팅 전문기업입니다. ACE, ISP/ISMP, R&D 과제 컨설팅 등을 제공합니다.",
  keywords: ["AI 컨설팅", "자동컨설팅", "ISP", "ISMP", "경영진단", "Erope.AI", "B2B 컨설팅"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
