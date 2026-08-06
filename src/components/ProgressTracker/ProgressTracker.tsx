import { useAppStore } from "@/state/store"
import { allLessonIds } from "@/content/courseData"
import { ProgressRing } from "@/components/ProgressRing/ProgressRing"

export function ProgressTracker() {
  const xp = useAppStore((s) => s.xp)
  const streak = useAppStore((s) => s.streak)
  const completedLessons = useAppStore((s) => s.completedLessons)
  const quizScores = useAppStore((s) => s.quizScores)

  const level = Math.floor(xp / 100) + 1
  const xpInCurrentLevel = xp % 100
  const xpForNextLevel = 100
  const totalLessons = allLessonIds().length
  const lessonPercent = Math.round((completedLessons.length / totalLessons) * 100)

  const quizValues = Object.values(quizScores)
  const quizAverage = quizValues.length > 0
    ? Math.round(quizValues.reduce((a, b) => a + b, 0) / quizValues.length)
    : 0
  const masteredQuizzes = quizValues.filter((s) => s >= 70).length

  return (
    <div className="progress-tracker">
      <div className="progress-header">
        <h3 className="progress-title">Your Progress</h3>
      </div>

      <div className="progress-stats">
        <div className="stat-card">
          <span className="stat-icon">🔥</span>
          <div className="stat-info">
            <span className="stat-value">{streak} day{streak !== 1 ? "s" : ""}</span>
            <span className="stat-label">Streak</span>
          </div>
        </div>

        <div className="stat-card">
          <span className="stat-icon">⭐</span>
          <div className="stat-info">
            <span className="stat-value">{xp} XP</span>
            <span className="stat-label">Total XP</span>
          </div>
        </div>

        <div className="stat-card">
          <span className="stat-icon">📚</span>
          <div className="stat-info">
            <span className="stat-value">{completedLessons.length}/{totalLessons}</span>
            <span className="stat-label">Lessons Done</span>
          </div>
        </div>

        <div className="stat-card">
          <span className="stat-icon">🏆</span>
          <div className="stat-info">
            <span className="stat-value">{quizAverage}%</span>
            <span className="stat-label">Quiz Avg · {masteredQuizzes} mastered</span>
          </div>
        </div>
      </div>

      <div className="level-section">
        <div className="level-info">
          <span className="level-number">Level {level}</span>
          <span className="level-xp">{xpInCurrentLevel} / {xpForNextLevel} XP</span>
        </div>
        <div className="xp-bar">
          <div
            className="xp-fill animate-fill"
            style={{ width: (xpInCurrentLevel / xpForNextLevel * 100) + "%" }}
          />
        </div>
      </div>

      <div className="tracker-row">
        <div className="tracker-item">
          <ProgressRing
            percent={lessonPercent}
            size={64}
            stroke={6}
            color="#b4befe"
            label={`${lessonPercent}%`}
            sublabel="Lessons"
          />
        </div>
        <div className="tracker-item">
          <ProgressRing
            percent={quizAverage}
            size={64}
            stroke={6}
            color="#f9e2af"
            label={`${quizAverage}%`}
            sublabel="Quizzes"
          />
        </div>
      </div>
    </div>
  )
}
