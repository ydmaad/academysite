import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: '늘다올학원',
  description: '중·고등학생 맞춤 학습, 내신·수능 전문 늘다올학원',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-[#F8FAFC] text-slate-800 antialiased">
        <div className="flex min-h-screen flex-col">
          {/* HEADER */}
          <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
              <Link
                href="/"
                className="text-xl font-extrabold tracking-tight text-slate-900 transition hover:text-blue-700"
              >
                늘다올학원
              </Link>

              <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
                <Link href="/" className="transition hover:text-blue-700">
                  홈
                </Link>
                <Link
                  href="/curriculum"
                  className="transition hover:text-blue-700"
                >
                  커리큘럼
                </Link>
                <Link
                  href="/teachers"
                  className="transition hover:text-blue-700"
                >
                  강사진
                </Link>
                <Link href="/review" className="transition hover:text-blue-700">
                  수강후기
                </Link>
                <Link
                  href="/contact"
                  className="transition hover:text-blue-700"
                >
                  상담문의
                </Link>
              </nav>

              <Link
                href="/contact"
                className="hidden rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-800 md:inline-flex"
              >
                무료 상담
              </Link>
            </div>
          </header>

          {/* PAGE CONTENT */}
          <main className="flex-1">{children}</main>

          {/* FOOTER */}
          <footer className="border-t border-slate-200 bg-white">
            <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-600">
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="space-y-2">
                  <p className="text-base font-bold text-slate-900">
                    늘다올학원
                  </p>
                  <p>중·고등학생의 성장을 함께 만드는 맞춤형 학습 공간</p>
                  <p>주소: 제주 ○○시 ○○로 123</p>
                  <p>전화: 064-000-0000</p>
                  <p>운영시간: 월–토 10:00 - 22:00</p>
                </div>

                <div className="space-y-2 md:text-right">
                  <p>사업자명: 늘다올학원</p>
                  <p>대표자: ○○○</p>
                  <p>이메일: hello@neuldaall.com</p>
                  <p>
                    © {new Date().getFullYear()} 늘다올학원. All rights
                    reserved.
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
