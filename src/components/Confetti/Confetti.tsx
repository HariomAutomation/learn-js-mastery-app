import { useMemo } from "react"

interface ConfettiProps {
  count?: number
  active: boolean
}

const COLORS = ["#cba6f7", "#b4befe", "#a6e3a1", "#f9e2af", "#f38ba8", "#89b4fa", "#f5c2e7"]

export function Confetti({ count = 80, active }: ConfettiProps) {
  const pieces = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.6,
        duration: 2.4 + Math.random() * 2,
        color: COLORS[i % COLORS.length],
        size: 6 + Math.random() * 8,
        rotate: Math.random() * 360,
        shape: i % 3 === 0 ? "circle" : "rect",
      })),
    [count]
  )

  if (!active) return null

  return (
    <div className="confetti-container" aria-hidden>
      {pieces.map((p) => (
        <span
          key={p.id}
          className={`confetti-piece confetti-${p.shape}`}
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            background: p.color,
            width: p.size,
            height: p.shape === "circle" ? p.size : p.size * 0.4,
            borderRadius: p.shape === "circle" ? "50%" : "2px",
            transform: `rotate(${p.rotate}deg)`,
          }}
        />
      ))}
    </div>
  )
}
