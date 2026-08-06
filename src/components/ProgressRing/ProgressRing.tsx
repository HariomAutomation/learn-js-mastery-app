interface ProgressRingProps {
  percent: number
  size?: number
  stroke?: number
  color?: string
  label?: string
  sublabel?: string
}

export function ProgressRing({
  percent,
  size = 120,
  stroke = 10,
  color = "#cba6f7",
  label,
  sublabel,
}: ProgressRingProps) {
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const clamped = Math.max(0, Math.min(100, percent))
  const offset = circumference - (clamped / 100) * circumference

  return (
    <div className="progress-ring" style={{ width: size, height: size }}>
      <svg width={size} height={size}>
        <circle
          className="ring-track"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={stroke}
        />
        <circle
          className="ring-fill"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <div className="ring-content">
        {label ? <span className="ring-label">{label}</span> : null}
        {sublabel ? <span className="ring-sublabel">{sublabel}</span> : null}
      </div>
    </div>
  )
}