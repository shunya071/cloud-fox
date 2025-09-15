import type { Metadata } from "next";
import "./styles/globals.css";

export const metadata : Metadata = {
  title: "岐阜・愛知のWeb制作 | 森 隼也",
  description: "岐阜・愛知エリアの中小企業に特化したWeb制作サービス。集客・デザイン・SEOを重視したホームページ制作を提供。",
  openGraph: {
    title: "岐阜・愛知のWeb制作 | Cloud Fox",
    description: "岐阜・愛知エリアでの集客に強いWeb制作サービス。",
    url: "https://your-domain.com",
    siteName: "Web制作サービス",
    images: ["/ogp.png"],
    locale: "ja_JP",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" />
      </head>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
