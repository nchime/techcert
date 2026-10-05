import type { CSSProperties } from "react";
import BrandIcon from "@/components/BrandIcon";
import ThemeToggle from "@/components/ThemeToggle";
import { courses, faqs, roadmap } from "@/data/courses";

const stats = [
  { value: "8", label: "무료 인증 과정" },
  { value: "₩0", label: "전 과정 수강 비용" },
  { value: "8", label: "배지 · 수료증" },
  { value: "∞", label: "유효기간 (무기한)" },
];

const byId = Object.fromEntries(courses.map((c) => [c.id, c]));

const comparison = [
  { id: "anthropic", course: "Anthropic AI Fluency", time: "3–4시간", lang: "영문", result: "수료증", cost: "무료" },
  { id: "databricks", course: "Databricks Gen AI Fundamentals", time: "약 1시간", lang: "영문 · 한국어", result: "공식 배지", cost: "무료" },
  { id: "huggingface", course: "Hugging Face AI Agents", time: "주말 1–2일", lang: "영문", result: "수료 기록", cost: "무료" },
  { id: "google", course: "Google Skills Skill Badge", time: "1–4시간", lang: "영문", result: "Skill Badge", cost: "무료" },
  { id: "microsoft", course: "Microsoft Applied Skills", time: "2–4시간", lang: "영문 (한국어 UI)", result: "Applied Skills", cost: "무료" },
  { id: "ibm", course: "IBM SkillsBuild AI Fundamentals", time: "약 10시간", lang: "영문", result: "IBM 디지털 크레덴셜", cost: "무료" },
  { id: "nvidia", course: "NVIDIA DLI 무료 과정", time: "1–4시간", lang: "영문", result: "DLI 수료증", cost: "무료" },
  { id: "openai", course: "OpenAI Academy 수료증 과정", time: "45분–3시간", lang: "영문", result: "수료증 · 배지", cost: "무료" },
];

const tips = [
  {
    title: "이름 · 소속 통일",
    body: "모든 플랫폼에서 동일한 이름과 이메일로 가입해야 LinkedIn · 이력서와 연결할 때 검증이 깔끔합니다.",
  },
  {
    title: "배지 링크는 프로필에",
    body: "Databricks · Google · IBM(Credly) 배지는 발급 즉시 공개 URL이 생성됩니다. Microsoft Applied Skills도 Learn 프로필의 공유 URL을 제공하니 LinkedIn 라이선스 섹션에 바로 붙여넣으세요.",
  },
  {
    title: "먼저 짧은 과정부터",
    body: "1시간짜리 Databricks 배지로 momentum을 만들고, 실습형 과정은 주말에 몰아서 진행하는 편이 완주율이 높습니다.",
  },
  {
    title: "스크린샷 보관",
    body: "수료증 PDF와 배지 이미지, 발급 날짜를 한 폴더에 모아두면 포트폴리오 · 면접 대비에 바로 활용됩니다.",
  },
];

export default function Home() {
  return (
    <div className="page-shell min-h-screen font-sans text-foreground">
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-header border-b border-line">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <a href="#top" className="flex items-center gap-2 text-sm font-bold tracking-tight">
            <span className="grid h-6 w-6 place-items-center rounded-md bg-accent text-[11px] text-black">
              AS
            </span>
            <span>AISkillPath</span>
            <span className="hidden text-faint sm:inline">/ 무료 AI 인증서 한장 가이드</span>
          </a>
          <nav className="flex items-center gap-1 text-xs text-muted sm:gap-2">
            <a className="hidden rounded-full px-2.5 py-1.5 transition hover:bg-surface-hover hover:text-foreground sm:inline-flex" href="#compare">
              비교표
            </a>
            <a className="hidden rounded-full px-2.5 py-1.5 transition hover:bg-surface-hover hover:text-foreground sm:inline-flex" href="#courses">
              과정별
            </a>
            <a className="hidden rounded-full px-2.5 py-1.5 transition hover:bg-surface-hover hover:text-foreground sm:inline-flex" href="#roadmap">
              로드맵
            </a>
            <ThemeToggle />
            <a
              className="rounded-full bg-foreground px-3 py-1.5 font-semibold text-background transition hover:bg-accent hover:text-black"
              href="#courses"
            >
              바로 시작하기
            </a>
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-5">
        <section className="relative pt-16 pb-14 sm:pt-24">
          <div className="grid-dots pointer-events-none absolute inset-x-0 top-0 h-72 opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-surface-3 px-3 py-1 text-xs font-medium text-muted hairline">
              <span className="h-1.5 w-1.5 rounded-full bg-positive" />
              전 과정 무료 · 등록 즉시 시작
            </span>

            <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-6xl">
              무료로 받는
              <br />
              <span className="bg-gradient-to-r from-[#D97757] via-[#ff8f6b] to-[#4285F4] bg-clip-text text-transparent">
                AI 인증서 · 배지
              </span>
              <br />
              한 장 정리
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              Anthropic · Databricks · Hugging Face · Google · Microsoft · IBM · NVIDIA · OpenAI Academy의
              공식 무료 과정을 모았습니다. 소요시간, 획득 자격, 이동 링크까지 한 번에 확인하고 바로 시작하세요.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#courses"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black transition hover:brightness-110"
              >
                과정별 바로가기
                <span aria-hidden>↓</span>
              </a>
              <a
                href="#compare"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-foreground hairline transition hover:bg-surface-hover"
              >
                8개 과정 한눈에 비교
              </a>
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl bg-surface-2 p-4 hairline sm:p-5">
                  <dt className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">{s.value}</dt>
                  <dd className="mt-1 text-xs text-dim">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="compare" className="scroll-mt-24 py-10">
          <SectionHeading
            index="01"
            title="한눈에 비교하기"
            description="소요시간 · 언어 · 결과물만 먼저 확인하세요."
          />

          <div className="mt-6 overflow-hidden rounded-3xl bg-surface hairline">
            <div className="hidden grid-cols-[1.6fr_0.9fr_1fr_1fr_0.7fr] gap-4 border-b border-line px-6 py-4 text-[11px] font-semibold uppercase tracking-wider text-faint md:grid">
              <span>과정</span>
              <span>소요시간</span>
              <span>언어</span>
              <span>결과물</span>
              <span className="text-right">비용</span>
            </div>
            <ul>
              {comparison.map((row, i) => (
                <li
                  key={row.course}
                  className={`grid gap-2 px-6 py-5 md:grid-cols-[1.6fr_0.9fr_1fr_1fr_0.7fr] md:items-center md:gap-4 ${
                    i !== comparison.length - 1 ? "border-b border-line-soft" : ""
                  }`}
                >
                  <span className="flex items-center gap-3 text-sm font-semibold text-foreground">
                    <BrandIcon
                      id={row.id}
                      className="h-4 w-4 shrink-0"
                      style={{ color: byId[row.id].accent }}
                    />
                    {row.course}
                  </span>
                  <span className="text-sm text-muted">
                    <span className="mr-2 text-xs text-faint md:hidden">소요시간</span>
                    {row.time}
                  </span>
                  <span className="text-sm text-muted">
                    <span className="mr-2 text-xs text-faint md:hidden">언어</span>
                    {row.lang}
                  </span>
                  <span className="text-sm text-muted">
                    <span className="mr-2 text-xs text-faint md:hidden">결과물</span>
                    {row.result}
                  </span>
                  <span className="text-sm font-semibold text-positive md:text-right">{row.cost}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="courses" className="scroll-mt-24 py-10">
          <SectionHeading
            index="02"
            title="과정별 획득 가이드"
            description="카드의 버튼을 누르면 각 과정 페이지로 바로 이동합니다."
          />

          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {courses.map((course) => (
              <article
                key={course.id}
                id={course.id}
                className="group relative flex flex-col overflow-hidden rounded-3xl bg-surface hairline transition hover:bg-surface-hover"
                style={
                  {
                    "--course-accent": course.accent,
                    "--course-accent-ink": course.accentInk,
                  } as CSSProperties
                }
              >
                <div
                  className="absolute inset-x-0 top-0 h-1"
                  style={{ background: `linear-gradient(90deg, ${course.accent}, transparent)` }}
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full blur-3xl"
                  style={{ background: course.accentSoft }}
                  aria-hidden
                />

                <div className="relative flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider">
                        <span className="course-accent-text inline-flex items-center gap-1.5">
                          <BrandIcon id={course.id} className="h-3.5 w-3.5" />
                          {course.provider}
                        </span>
                        <span className="text-faint">/</span>
                        <span className="text-faint">STEP {course.step}</span>
                      </div>
                      <h3 className="mt-2 text-xl font-bold leading-snug tracking-tight text-foreground">
                        {course.title}
                      </h3>
                      <p className="mt-1 text-sm text-dim">{course.tagline}</p>
                    </div>
                    <span
                      className="course-accent-text grid h-11 w-11 shrink-0 place-items-center rounded-full text-sm font-extrabold"
                      style={{ background: course.accentSoft, border: `1px solid ${course.accent}44` }}
                    >
                      {course.step}
                    </span>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
                    <Meta label="시간" value={course.duration} />
                    <Meta label="언어" value={course.language} />
                    <Meta label="난이도" value={course.level} />
                    <Meta label="비용" value="무료" accent />
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-muted">{course.description}</p>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {course.highlights.map((h) => (
                      <li
                        key={h}
                        className="rounded-full bg-surface-3 px-3 py-1.5 text-xs text-muted hairline"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 rounded-2xl bg-subtle p-4 hairline">
                    <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-faint">
                      <span>획득 절차</span>
                      <span className="course-accent-text">{course.durationNote}</span>
                    </div>
                    <ol className="mt-3 space-y-3">
                      {course.steps.map((s, i) => (
                        <li key={s.label} className="flex gap-3">
                          <span
                            className="course-accent-text mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-[10px] font-bold"
                            style={{ background: course.accentSoft }}
                          >
                            {i + 1}
                          </span>
                          <span className="text-sm leading-snug">
                            <span className="font-semibold text-foreground">{s.label}</span>
                            <span className="block text-xs text-dim">{s.detail}</span>
                          </span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="mt-6 flex flex-col gap-2 pt-1 sm:flex-row sm:flex-wrap">
                    {course.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={
                          link.primary
                            ? "inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-black transition hover:brightness-110 sm:min-w-[200px] sm:flex-1"
                            : "inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-muted hairline transition hover:bg-surface-hover hover:text-foreground sm:w-auto"
                        }
                      >
                        {link.label}
                        <span aria-hidden>↗</span>
                      </a>
                    ))}
                  </div>

                  <p className="mt-3 text-[11px] text-faint">
                    수료 · 배지 조건: {course.credential} — {course.credentialNote}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="roadmap" className="scroll-mt-24 py-10">
          <SectionHeading
            index="03"
            title="추천 수료 로드맵"
            description="짧은 과정부터 채워가며 총 8개 인증을 확보하는 일정입니다."
          />

          <div className="mt-6 grid gap-4">
            {roadmap.map((r) => (
              <div
                key={r.course}
                className="relative grid gap-4 rounded-2xl bg-surface p-5 hairline sm:grid-cols-[110px_1fr_auto] sm:items-center sm:p-6"
                style={
                  {
                    borderLeft: `3px solid ${byId[r.id].accent}`,
                    "--course-accent": byId[r.id].accent,
                    "--course-accent-ink": byId[r.id].accentInk,
                  } as CSSProperties
                }
              >
                <div>
                  <div className="course-accent-text text-xs font-extrabold tracking-widest">
                    {r.day}
                  </div>
                  <div className="mt-1 text-[11px] text-faint">{r.time}</div>
                </div>
                <div>
                  <div className="text-base font-bold text-foreground">{r.course}</div>
                  <div className="mt-0.5 text-sm text-dim">{r.note}</div>
                </div>
                <a
                  href={`#${r.id}`}
                  className="inline-flex items-center gap-1.5 justify-self-start rounded-full px-4 py-2 text-xs font-semibold text-muted hairline transition hover:bg-surface-hover sm:justify-self-end"
                >
                  상세 보기 <span aria-hidden>↑</span>
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="tips" className="scroll-mt-24 py-10">
          <SectionHeading index="04" title="배지를 더 활용하는 법" description="발급 이후가 더 중요합니다." />
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {tips.map((t) => (
              <div key={t.title} className="rounded-2xl bg-surface p-5 hairline">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                  <h3 className="text-sm font-bold text-foreground">{t.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-dim">{t.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="faq" className="scroll-mt-24 py-10">
          <SectionHeading index="05" title="자주 묻는 질문" description="시작 전에 확인해 두면 좋습니다." />
          <div className="mt-6 grid gap-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl bg-surface px-5 py-4 hairline open:bg-surface-hover"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-foreground marker:hidden">
                  {f.q}
                  <span className="text-faint transition group-open:rotate-45" aria-hidden>
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="py-14">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#D97757] to-[#b4502f] p-8 text-black sm:p-12">
            <div className="grid-dots pointer-events-none absolute inset-0 opacity-20" aria-hidden />
            <div className="relative max-w-xl">
              <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                오늘 1시간이면 첫 번째 배지가 손에 들어옵니다.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-black/70 sm:text-base">
                가장 짧은 과정부터 열어 두고 시작하세요. 8개 모두 무료입니다.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {courses.map((c) => (
                  <a
                    key={c.id}
                    href={c.links[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-black/80"
                  >
                    <BrandIcon id={c.id} className="h-4 w-4" />
                    {c.provider} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-subtle">
        <div className="mx-auto max-w-6xl px-5 py-10">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-sm font-bold">
                <span className="grid h-6 w-6 place-items-center rounded-md bg-accent text-[11px] text-black">
                  AS
                </span>
                AISkillPath
              </div>
              <p className="mt-3 max-w-md text-xs leading-relaxed text-faint">
                외부 교육 기관의 공식 페이지로 연결되는 링크 모음입니다. 과정 내용 · 배지 조건 · 언어 지원은
                해당 기관 공지에 따라 변경될 수 있습니다.
              </p>
            </div>
            <ul className="grid gap-2 text-sm">
              {courses.map((c) => (
                <li key={c.id}>
                  <a
                    href={c.links[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-muted transition hover:text-foreground"
                  >
                    <BrandIcon id={c.id} className="h-4 w-4 shrink-0" />
                    {c.provider} — {c.title} <span aria-hidden>↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6 text-[11px] text-faint">
            <span>© {new Date().getFullYear()} AISkillPath · 무료 AI 인증서 한장 가이드</span>
            <span>All links open in a new tab.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHeading({
  index,
  title,
  description,
}: {
  index: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-2 border-b border-line pb-5 sm:flex-row sm:items-end sm:justify-between">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-xs font-bold text-accent-ink">{index}</span>
        <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">{title}</h2>
      </div>
      <p className="text-sm text-dim sm:text-right">{description}</p>
    </div>
  );
}

function Meta({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="rounded-xl bg-surface-3 px-3 py-2 hairline">
      <div className="text-[10px] uppercase tracking-wider text-faint">{label}</div>
      <div className={`mt-0.5 text-xs font-semibold ${accent ? "text-positive" : "text-foreground"}`}>{value}</div>
    </div>
  );
}
