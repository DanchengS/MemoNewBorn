import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "新生儿及孕产期物品清单",
  description: "来自过来人的孕产期及新生儿阶段物品选购经验分享",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  );
}
