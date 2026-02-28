import Link from 'next/link';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <header>
          <nav>
            <Link href="/">홈</Link>
            <Link href="/curriculum">커리큘럼</Link>
            <Link href="/teachers">강사진</Link>
            <Link href="/review">수강후기</Link>
            <Link href="/contact">상담문의</Link>
          </nav>
        </header>

        <main>{children}</main>

        <footer>© 2026 학원명. All rights reserved.</footer>
      </body>
    </html>
  );
}
