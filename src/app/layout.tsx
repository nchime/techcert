import type { Metadata } from "next";
import { Inter, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-kr",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "무료 AI 인증서 · 배지 한장 가이드 | techCert",
  description:
    "Anthropic AI Fluency, Databricks Generative AI Fundamentals, Hugging Face AI Agents Course, Google Skills, Microsoft Applied Skills, IBM SkillsBuild, NVIDIA DLI, OpenAI Academy까지 — 무료로 획득할 수 있는 AI 인증서와 배지를 한 페이지에 정리한 인포그래픽 가이드.",
  keywords: [
    "무료 인증서",
    "AI 배지",
    "Anthropic AI Fluency",
    "Databricks Generative AI Fundamentals",
    "Hugging Face AI Agents Course",
    "Google Skills",
    "Microsoft Applied Skills",
    "IBM SkillsBuild",
    "NVIDIA DLI",
    "OpenAI Academy 수료증",
  ],
  openGraph: {
    title: "무료 AI 인증서 · 배지 한장 가이드",
    description: "무료로 획득 가능한 8개 AI 인증 과정을 한 장에 정리했습니다.",
    type: "website",
    locale: "ko_KR",
  },
};

const themeScript = `(function(){try{var s=localStorage.getItem("techcert-theme");var t=(s==="light"||s==="dark")?s:(window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark");document.documentElement.setAttribute("data-theme",t);}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      data-theme="dark"
      suppressHydrationWarning
      className={`${inter.variable} ${notoSansKr.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  );
}
