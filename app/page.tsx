import Link from 'next/link';

interface Instructor {
  id: number;
  subject: '국어' | '수학';
  name: string;
  description: string;
  tags: string[];
}

const mainKoreanTeacher: Instructor = {
  id: 1,
  subject: '국어',
  name: '김국어 선생님',
  description:
    '지문 구조 독해부터 내신 서술형, 수능 독서·문학까지 흔들리지 않는 국어 실력을 만드는 대표 강의',
  tags: ['중등국어', '고등국어', '수능독해', '내신서술형'],
};

const mathTeachers: Instructor[] = [
  {
    id: 2,
    subject: '수학',
    name: '이수학 선생님',
    description:
      '개념의 뼈대를 세우고 실전 문제 해결력까지 연결하는 탄탄한 수업',
    tags: ['중등수학', '고등수학', '미적분'],
  },
  {
    id: 3,
    subject: '수학',
    name: '박수학 선생님',
    description:
      '상위권 도약을 위한 심화 문제 풀이와 꼼꼼한 오답 관리 중심 수업',
    tags: ['내신집중', '심화반', '킬러문항'],
  },
];

const strengths = [
  {
    title: '중·고등 맞춤 커리큘럼',
    description:
      '학년과 수준에 맞게 내신 대비와 수능 준비를 체계적으로 연결합니다.',
  },
  {
    title: '정기 상담 및 학습관리',
    description:
      '학부모 상담, 학습 피드백, 오답 관리로 학생의 성장 과정을 꾸준히 점검합니다.',
  },
  {
    title: '과목별 전문 강사진',
    description:
      '국어·수학 전문 강사진이 개념부터 심화까지 빈틈없이 지도합니다.',
  },
];

const koreanFeatures = [
  {
    title: '지문 구조 독해',
    description:
      '긴 글도 핵심 구조를 파악하며 읽는 훈련으로 독해 속도와 정확도를 함께 높입니다.',
  },
  {
    title: '내신 서술형 대비',
    description:
      '학교별 시험 범위와 유형을 반영해 작품 정리, 서술형 답안 작성까지 꼼꼼히 대비합니다.',
  },
  {
    title: '오답·표현 교정',
    description:
      '틀린 문제를 다시 설명하고 사고 과정을 교정해 실전에서 흔들리지 않도록 돕습니다.',
  },
];

export default function Home() {
  return (
    <main className="bg-[#F8FAFC] text-slate-800">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-24 pt-20">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#EFF6FF_0%,#F8FAFC_60%,#FFFFFF_100%)]" />

        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700 ring-1 ring-blue-100">
              중·고등학생 전문 학원
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl">
              중·고등 국어의 기준을 세우는
              <br />
              <span className="text-blue-700">늘다올학원</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              독해력, 문학 해석, 서술형 작성, 수능형 사고력까지. 국어를 중심으로
              내신과 입시를 탄탄하게 준비하고, 수학까지 균형 있게 관리하는 학습
              시스템을 제공합니다.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-blue-700 px-8 py-4 font-bold text-white shadow-sm transition hover:bg-blue-800"
              >
                무료 상담 예약
              </Link>
              <Link
                href="/curriculum"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-8 py-4 font-bold text-slate-800 transition hover:bg-slate-50"
              >
                커리큘럼 보기
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-2xl font-extrabold text-slate-900">
                  국어 특화
                </p>
                <p className="mt-1 text-sm text-slate-500">독해·서술형 집중</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-2xl font-extrabold text-slate-900">
                  중·고등
                </p>
                <p className="mt-1 text-sm text-slate-500">학년별 맞춤 수업</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-2xl font-extrabold text-slate-900">
                  정기 상담
                </p>
                <p className="mt-1 text-sm text-slate-500">학습 관리 시스템</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60">
              <div className="rounded-2xl bg-slate-50 p-6">
                <p className="text-sm font-semibold text-blue-700">
                  늘다올학원의 핵심 강점
                </p>
                <h2 className="mt-3 text-2xl font-bold text-slate-900">
                  국어가 흔들리는 학생에게
                  <br />
                  가장 먼저 필요한 수업
                </h2>

                <ul className="mt-6 space-y-4 text-sm text-slate-600">
                  <li className="rounded-xl bg-white p-4 shadow-sm">
                    ✓ 지문 구조를 읽는 방법부터 문제 풀이 기준까지 정리
                  </li>
                  <li className="rounded-xl bg-white p-4 shadow-sm">
                    ✓ 학교별 내신 서술형과 작품 정리까지 연결되는 수업
                  </li>
                  <li className="rounded-xl bg-white p-4 shadow-sm">
                    ✓ 학부모 상담과 학습 피드백으로 꾸준한 성장 관리
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRENGTHS */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900">
              왜 늘다올학원이어야 할까요?
            </h2>
            <p className="mt-3 text-slate-600">
              학부모가 신뢰하고 학생이 꾸준히 성장할 수 있도록 기본을 탄탄하게
              갖췄습니다.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {strengths.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 대표 국어 강사 */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900">대표 강사진</h2>
            <p className="mt-2 text-slate-600">
              과목별 전문 강사진이 학생의 현재 수준과 목표에 맞춰 지도합니다.
            </p>
          </div>

          <div className="mb-10 overflow-hidden rounded-3xl border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-white shadow-sm">
            <div className="grid md:grid-cols-2">
              <div className="flex aspect-[4/3] items-center justify-center bg-slate-100">
                <span className="text-sm font-semibold text-slate-400">
                  {mainKoreanTeacher.name} 프로필 이미지
                </span>
              </div>

              <div className="p-8 md:p-10">
                <span className="inline-flex rounded-full bg-blue-700 px-3 py-1 text-xs font-bold text-white">
                  대표 국어 강사
                </span>

                <h3 className="mt-4 text-3xl font-extrabold text-slate-900">
                  {mainKoreanTeacher.name}
                </h3>

                <p className="mt-4 text-lg leading-relaxed text-slate-600">
                  {mainKoreanTeacher.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {mainKoreanTeacher.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <ul className="mt-8 space-y-3 text-sm text-slate-700">
                  <li className="rounded-xl border border-slate-200 bg-white px-4 py-3">
                    중등 내신부터 고등 수능까지 연결되는 국어 커리큘럼
                  </li>
                  <li className="rounded-xl border border-slate-200 bg-white px-4 py-3">
                    지문 구조 분석 중심의 독해 훈련
                  </li>
                  <li className="rounded-xl border border-slate-200 bg-white px-4 py-3">
                    학교별 내신 서술형 및 작품 정리 집중 대비
                  </li>
                  <li className="rounded-xl border border-slate-200 bg-white px-4 py-3">
                    오답 분석과 개별 피드백을 통한 실력 교정
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 수학 강사진 */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {mathTeachers.map((teacher) => (
              <div
                key={teacher.id}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative flex aspect-[4/4.5] items-center justify-center bg-slate-100">
                  <span className="text-sm font-semibold text-slate-400">
                    {teacher.name} 프로필 이미지
                  </span>

                  <div className="absolute left-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white">
                    {teacher.subject}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900">
                    {teacher.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {teacher.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {teacher.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 국어 특화 섹션 */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900">
              늘다올 국어 수업의 차이
            </h2>
            <p className="mt-3 text-slate-600">
              감으로 푸는 국어가 아니라, 읽는 방법과 푸는 기준을 가르칩니다.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {koreanFeatures.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-blue-700 px-8 py-14 text-center text-white shadow-lg">
          <h2 className="text-3xl font-bold">
            우리 아이에게 맞는 학습 방향이 궁금하신가요?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            학년, 현재 성적, 목표에 맞춰 상담해드립니다. 중학생 내신 관리부터
            고등학생 입시 전략까지 함께 설계해보세요.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex rounded-xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-slate-100"
            >
              상담 문의하기
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
