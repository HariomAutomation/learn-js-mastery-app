import { memo, useMemo, useState } from "react"
import { useAppStore } from "@/state/store"
import modulesMeta from "@/content/modules"
import type { ModuleMeta } from "@/types/content"
import {
  moduleOrder,
  lessonSlugs,
  lessonTitle,
  lessonIdFor,
  moduleIcon,
  allLessonIds,
} from "@/content/courseData"
import { ProgressRing } from "@/components/ProgressRing/ProgressRing"
import { Confetti } from "@/components/Confetti/Confetti"
import { ExamHistory } from "@/components/ExamHistory/ExamHistory"

interface MasteryCardProps {
  code: string
  title: string
  percent: number
  completedLabel: string
  onClick: () => void
}

const MasteryCard = memo(function MasteryCard({ code, title, percent, completedLabel, onClick }: MasteryCardProps) {
  return (
    <button className="mastery-card" onClick={onClick}>
      <ProgressRing
        percent={percent}
        size={72}
        stroke={7}
        label={`${percent}%`}
      />
      <div className="mastery-card-info">
        <span className="mastery-card-code">{code}</span>
        <span className="mastery-card-title">{title}</span>
        <span className="mastery-card-sub">{completedLabel}</span>
      </div>
    </button>
  )
})

function levelForXP(xp: number): { level: number; title: string } {
  const level = Math.floor(xp / 100) + 1
  const titles: Record<number, string> = {
    1: "Junior Beginner",
    2: "Curious Learner",
    3: "Code Explorer",
    4: "Problem Solver",
    5: "Logic Builder",
    6: "Function Master",
    7: "Array Ninja",
    8: "Object Wizard",
    9: "JS Architect",
    10: "JavaScript Master",
  }
  return { level, title: titles[level] ?? `Level ${level} Hero` }
}

export function Dashboard() {
  const xp = useAppStore((s) => s.xp)
  const streak = useAppStore((s) => s.streak)
  const completedLessons = useAppStore((s) => s.completedLessons)
  const quizScores = useAppStore((s) => s.quizScores)
  const setCurrentModule = useAppStore((s) => s.setCurrentModule)
  const setCurrentLesson = useAppStore((s) => s.setCurrentLesson)
  const setView = useAppStore((s) => s.setView)
  const [onboardingDismissed, setOnboardingDismissed] = useState(false)

  const completedSet = useMemo(() => new Set(completedLessons), [completedLessons])

  const totalLessons = allLessonIds().length
  const { level, title } = levelForXP(xp)
  const xpInLevel = xp % 100
  const overallPercent = Math.round((completedLessons.length / totalLessons) * 100)
  const quizAverage = useMemo(() => {
    const scores = Object.values(quizScores)
    if (scores.length === 0) return 0
    return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
  }, [quizScores])

  const moduleStats = useMemo(
    () =>
      moduleOrder.map((modId) => {
        const meta = modulesMeta[modId] as ModuleMeta | undefined
        const slugs = lessonSlugs[modId] ?? []
        let completed = 0
        let totalScore = 0
        let scored = 0
        let totalQuiz = 0
        for (let i = 0; i < slugs.length; i++) {
          const id = lessonIdFor(modId, i, slugs[i])
          if (completedSet.has(id)) completed++
          const s = quizScores[id]
          if (s !== undefined) {
            totalScore += s
            scored++
          }
          totalQuiz++
        }
        const masterPercent = Math.round(
          (completed / totalQuiz) * 50 + (scored > 0 ? (totalScore / scored) * 0.5 : 0)
        )
        return {
          id: modId,
          meta,
          completed,
          total: totalQuiz,
          quizScore: scored > 0 ? Math.round(totalScore / scored) : null,
          masterPercent: Math.max(0, Math.min(100, masterPercent)),
        }
      }),
    [completedSet, quizScores]
  )

  const weakModules = useMemo(
    () =>
      moduleStats
        .filter((m) => m.completed > 0 && (m.masterPercent < 60 || (m.quizScore !== null && m.quizScore < 60)))
        .sort((a, b) => a.masterPercent - b.masterPercent)
        .slice(0, 3),
    [moduleStats]
  )

  const nextLesson = useMemo(() => {
    for (const mod of moduleOrder) {
      const slugs = lessonSlugs[mod] ?? []
      for (let i = 0; i < slugs.length; i++) {
        const id = lessonIdFor(mod, i, slugs[i])
        if (!completedSet.has(id)) return { id, modId: mod, slug: slugs[i], index: i }
      }
    }
    return null
  }, [completedSet])

  const allDone = completedLessons.length >= totalLessons
  const showConfetti = allDone || (quizAverage >= 85 && Object.keys(quizScores).length > 0)
  const isNewUser = completedLessons.length === 0

  function startNextLesson() {
    if (nextLesson) {
      setCurrentModule(nextLesson.modId)
      setCurrentLesson(nextLesson.id)
    }
  }

  return (
    <div className="dashboard">
      <Confetti active={showConfetti} count={40} />

      {isNewUser && !onboardingDismissed && (
        <section className="onboarding-card">
          <div className="onboarding-content">
            <span className="onboarding-emoji">🚀</span>
            <div>
              <h3 className="onboarding-title">Shuru karne ka plan!</h3>
              <p className="onboarding-text">
                38 lessons, har ek ke saath practice + quiz. Lesson padho → code run karo →
                quiz 80%+ lo → agla lesson. End mein Final Exam aur certificate!
              </p>
            </div>
          </div>
          <div className="onboarding-actions">
            {nextLesson && (
              <button className="btn btn-primary" onClick={startNextLesson}>
                ▶ Pehli Lesson: {lessonTitle(nextLesson.slug)}
              </button>
            )}
            <button className="btn btn-ghost" onClick={() => setOnboardingDismissed(true)}>
              Skip
            </button>
          </div>
        </section>
      )}

      <header className="dashboard-hero">
        <div className="hero-glow" />
        <div className="hero-content">
          <span className="hero-badge">JS Mastery Course</span>
          <h1 className="hero-title">
            Namaste, JavaScript
            <span className="hero-wala">Wala! 👋</span>
          </h1>
          <p className="hero-subtitle">
            Har concept ko padho, practice karo, quiz do aur Final Exam se prove karo ki
            tumhe JavaScript aa gayi! 🚀
          </p>
          <div className="hero-actions">
            {!allDone ? (
              <button
                className="btn btn-primary hero-cta"
                onClick={startNextLesson}
              >
                ▶ Continue Learning{nextLesson ? `: ${lessonTitle(nextLesson.slug)}` : ""}
              </button>
            ) : (
              <button className="btn btn-primary hero-cta" onClick={() => setView("exam")}>
                🎓 Take Final Exam
              </button>
            )}
            <button className="btn btn-secondary hero-cta" onClick={() => setView("exam")}>
              🎯 Test Yourself — Exam
            </button>
          </div>
        </div>
        <div className="hero-level-card">
          <div className="hero-level-top">
            <span className="hero-level-num">Lv {level}</span>
            <span className="hero-level-title">{title}</span>
          </div>
          <div className="xp-bar">
            <div
              className="xp-fill animate-fill"
              style={{ width: `${xpInLevel}%` }}
            />
          </div>
          <span className="hero-level-xp">
            {xpInLevel}/100 XP — Level {level + 1} tak {100 - xpInLevel} XP aur!
          </span>
        </div>
      </header>

      <section className="dashboard-stats">
        <div className="stat-tile">
          <span className="stat-tile-icon">⚡</span>
          <span className="stat-tile-value">{xp}</span>
          <span className="stat-tile-label">Total XP</span>
        </div>
        <div className="stat-tile">
          <span className="stat-tile-icon">🔥</span>
          <span className="stat-tile-value">{streak}</span>
          <span className="stat-tile-label">Day Streak</span>
        </div>
        <div className="stat-tile">
          <span className="stat-tile-icon">📚</span>
          <span className="stat-tile-value">
            {completedLessons.length}/{totalLessons}
          </span>
          <span className="stat-tile-label">Lessons Done</span>
        </div>
        <div className="stat-tile">
          <span className="stat-tile-icon">🎯</span>
          <span className="stat-tile-value">
            {Object.keys(quizScores).length > 0 ? `${quizAverage}%` : "—"}
          </span>
          <span className="stat-tile-label">Quiz Average</span>
        </div>
      </section>

      <section className="dashboard-grid">
        <div className="mastery-section">
          <div className="section-head">
            <h2 className="section-title">Mastery Map</h2>
            <span className="section-note">Sab concepts ki practice + quiz karo</span>
          </div>
          <div className="mastery-cards">
            {moduleStats.map((m) => (
              <MasteryCard
                key={m.id}
                code={moduleIcon(m.id)}
                title={m.meta?.title ?? m.id}
                percent={m.masterPercent}
                completedLabel={`${m.completed}/${m.total} lessons${m.quizScore !== null ? ` · Quiz ${m.quizScore}%` : " · Quiz not done"}`}
                onClick={() => setCurrentModule(m.id)}
              />
            ))}
          </div>
        </div>

        <aside className="side-column">
          <div className="smart-card">
            <h3 className="smart-card-title">🧠 Smart Recommendations</h3>
            {weakModules.length > 0 ? (
              <ul className="recommend-list">
                {weakModules.map((m) => (
                  <li key={m.id}>
                    <button onClick={() => setCurrentModule(m.id)}>
                      <span className="recommend-emoji">📖</span>
                      <span>
                        Revise <strong>{m.meta?.title}</strong> — mastery{" "}
                        {m.masterPercent}%, quiz {m.quizScore ?? "—"}%
                      </span>
                      <span className="recommend-arrow">→</span>
                    </button>
                  </li>
                ))}
                <li>
                  <button onClick={() => setView("exam")}>
                    <span className="recommend-emoji">🎓</span>
                    <span>
                      Ready? <strong>Final Exam</strong> lo aur apna level prove karo!
                    </span>
                    <span className="recommend-arrow">→</span>
                  </button>
                </li>
              </ul>
            ) : (
              <p className="smart-empty">
                Abhi koi weak area nahi — continue learning se aage badho! 🎉
              </p>
            )}
          </div>

          <div className="overall-card">
            <ProgressRing
              percent={overallPercent}
              size={110}
              stroke={10}
              label={`${overallPercent}%`}
              sublabel="Overall"
              color="#a6e3a1"
            />
            <div className="overall-info">
              <h3>Course Progress</h3>
              <p>
                {allDone
                  ? "🎉 Poora course complete! Final exam do aur certificate lo!"
                  : nextLesson
                    ? `Next: ${lessonTitle(nextLesson.slug)}`
                    : "Everything done!"}
              </p>
            </div>
          </div>
        </aside>
      </section>

      <ExamHistory />
    </div>
  )
}
