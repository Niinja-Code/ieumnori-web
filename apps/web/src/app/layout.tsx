import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";

const pretendard = localFont({
  src: [
    {
      path: "../fonts/Pretendard-Regular.woff2",
      weight: "400",
      style: "regular",
    },
    {
      path: "../fonts/Pretendard-Regular.woff",
      weight: "400",
      style: "regular",
    },
    {
      path: "../fonts/Pretendard-Medium.woff2",
      weight: "500",
      style: "medium",
    },
    { path: "../fonts/Pretendard-Medium.woff", weight: "500", style: "medium" },
    {
      path: "../fonts/Pretendard-SemiBold.woff2",
      weight: "600",
      style: "semi bold",
    },
    {
      path: "../fonts/Pretendard-SemiBold.woff",
      weight: "600",
      style: "semi bold",
    },
    { path: "../fonts/Pretendard-Bold.woff2", weight: "700", style: "bold" },
    { path: "../fonts/Pretendard-Bold.woff", weight: "700", style: "bold" },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "이음노리 | iemnori",
  description: "iemnori",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.className}`}>{children}</body>
    </html>
  );
}
