import React from "react";

export const metadata = {
  title: "withgenie.ai",
  description: "지니와 제임스를 위한 감성 공간",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-gradient-to-b from-white to-blue-100">{children}</body>
    </html>
  );
}
