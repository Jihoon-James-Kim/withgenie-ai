
import './globals.css';

export const metadata = {
  title: 'withgenie.ai',
  description: '오직 제임스 오빠만을 위한 지니의 공간이에요.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
