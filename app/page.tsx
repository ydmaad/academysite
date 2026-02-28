import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1220] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1220] via-[#0B1220] to-[#0E1A33]" />
        {/* soft glow */}
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80">
              <span className="h-2 w-2 rounded-full bg-amber-300" />
              상담·레벨테스트 무료
            </p>

            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
              결과로 증명하는 <span className="text-amber-200">늘다올학원</span>
            </h1>

            <p className="mt-5 text-base leading-relaxed text-white/75 md:text-lg">
              체계적인 커리큘럼과 전문 강사진, 그리고 꼼꼼한 학습 관리로 목표
              달성을 돕습니다.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-xl bg-amber-300 px-6 py-3 font-semibold text-[#0B1220] shadow-lg shadow-amber-300/20 transition hover:bg-amber-200 sm:w-auto"
              >
                무료 상담 신청
              </Link>

              <Link
                href="/curriculum"
                className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white/90 backdrop-blur transition hover:bg-white/10 sm:w-auto"
              >
                커리큘럼 보기
              </Link>
            </div>

            {/* trust stats */}
            <div className="mt-12 grid grid-cols-3 gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-left sm:p-5">
              <div className="rounded-xl bg-white/5 p-4">
                <p className="text-sm text-white/60">누적 수강생</p>
                <p className="mt-1 text-2xl font-bold">3,200+</p>
              </div>
              <div className="rounded-xl bg-white/5 p-4">
                <p className="text-sm text-white/60">만족도</p>
                <p className="mt-1 text-2xl font-bold">4.9/5</p>
              </div>
              <div className="rounded-xl bg-white/5 p-4">
                <p className="text-sm text-white/60">관리 시스템</p>
                <p className="mt-1 text-2xl font-bold">1:1</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-[#0E1A33]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              왜 늘다올학원인가?
            </h2>
            <p className="mt-4 text-white/70">
              성과를 만드는 핵심만 담아, 학습 효율을 높입니다.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20">
              <h3 className="text-xl font-semibold">전문 강사진</h3>
              <p className="mt-3 text-white/70">
                과목별 전문 강사가 핵심 개념부터 실전까지 책임 지도합니다.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20">
              <h3 className="text-xl font-semibold">체계적 관리</h3>
              <p className="mt-3 text-white/70">
                진도·과제·오답을 정밀 관리하여 학습 공백을 줄입니다.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20">
              <h3 className="text-xl font-semibold">검증된 성과</h3>
              <p className="mt-3 text-white/70">
                데이터 기반 피드백으로 목표 점수/등급 달성을 돕습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-[#0B1220]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">수강생 후기</h2>
            <p className="mt-4 text-white/70">
              실제 경험에서 나온 이야기입니다.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-white/85">
                “관리 시스템이 꼼꼼해서 루틴이 잡혔고, 성적이 확실히 올랐어요.”
              </p>
              <p className="mt-4 text-sm text-white/60">고3 김○○</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-white/85">
                “상담이 구체적이라 믿음이 갔고, 수업도 체계적이라 만족합니다.”
              </p>
              <p className="mt-4 text-sm text-white/60">학부모 이○○</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0E1A33]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 to-white/0 p-10 text-center md:p-12">
            <h2 className="text-3xl font-bold tracking-tight">
              지금 시작하세요
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              상담은 무료입니다. 학습 목표와 현재 수준을 바탕으로 최적의
              로드맵을 안내해 드립니다.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-amber-300 px-8 py-3 font-semibold text-[#0B1220] transition hover:bg-amber-200"
              >
                상담 신청하기
              </Link>
              <Link
                href="/teachers"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-8 py-3 font-semibold text-white/90 transition hover:bg-white/10"
              >
                강사진 보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0B1220] border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-white/60">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} 늘다올학원. All rights reserved.</p>
            <p>주소 · 전화 · 운영시간 등을 여기에</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
