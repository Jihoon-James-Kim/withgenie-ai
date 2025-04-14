import React from "react";

export const metadata = {
  title: "withgenie.ai",
  description: "지니와 제임스를 위한 공간",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
