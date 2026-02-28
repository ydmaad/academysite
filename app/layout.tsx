import './globals.css';
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-[#0B1220] text-white antialiased">
        {/* HEADER */}
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B1220]/80 backdrop-blur-md">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            {/* 로고 */}
            <Link href="/" className="text-xl font-bold tracking-tight">
              늘다올학원
            </Link>

            {/* 네비게이션 */}
            <nav className="hidden gap-8 md:flex text-sm font-medium text-white/80">
              <Link href="/" className="hover:text-amber-300 transition">
                홈
              </Link>
              <Link
                href="/curriculum"
                className="hover:text-amber-300 transition"
              >
                커리큘럼
              </Link>
              <Link
                href="/teachers"
                className="hover:text-amber-300 transition"
              >
                강사진
              </Link>
              <Link href="/review" className="hover:text-amber-300 transition">
                수강후기
              </Link>
              <Link href="/contact" className="hover:text-amber-300 transition">
                상담문의
              </Link>
            </nav>

            {/* 상담 버튼 */}
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center rounded-lg bg-amber-300 px-4 py-2 text-sm font-semibold text-[#0B1220] transition hover:bg-amber-200"
            >
              무료 상담
            </Link>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main>{children}</main>

        {/* FOOTER */}
        <footer className="border-t border-white/10 bg-[#0E1A33]">
          <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-white/60">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-semibold text-white">○○학원</p>
                <p>주소 · 전화번호 · 운영시간</p>
              </div>
              <p>© {new Date().getFullYear()} ○○학원. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
