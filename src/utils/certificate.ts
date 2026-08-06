export function generateCertificate(studentName: string, score: number, date: string): void {
  const canvas = document.createElement("canvas")
  canvas.width = 1200
  canvas.height = 800
  const ctx = canvas.getContext("2d")
  if (!ctx) return

  const grad = ctx.createLinearGradient(0, 0, 1200, 800)
  grad.addColorStop(0, "#1e1e2e")
  grad.addColorStop(1, "#313244")
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, 1200, 800)

  ctx.strokeStyle = "#a6e3a1"
  ctx.lineWidth = 4
  ctx.strokeRect(30, 30, 1140, 740)
  ctx.strokeRect(40, 40, 1120, 720)

  ctx.fillStyle = "#a6e3a1"
  ctx.font = "bold 24px monospace"
  ctx.textAlign = "center"
  ctx.fillText("🎓 JS MASTERY CERTIFICATION", 600, 120)

  ctx.fillStyle = "#cdd6f4"
  ctx.font = "bold 18px monospace"
  ctx.fillText("This certifies that", 600, 220)

  ctx.fillStyle = "#f9e2af"
  ctx.font = "bold 48px monospace"
  ctx.fillText(studentName || "JavaScript Learner", 600, 300)

  ctx.fillStyle = "#cdd6f4"
  ctx.font = "18px monospace"
  ctx.fillText("has successfully completed the JavaScript Mastery Course", 600, 370)
  ctx.fillText(`and passed the Final Exam with a score of ${score}%`, 600, 410)

  ctx.fillStyle = "#a6e3a1"
  ctx.beginPath()
  ctx.arc(600, 520, 50, 0, Math.PI * 2)
  ctx.fill()
  ctx.fillStyle = "#1e1e2e"
  ctx.font = "bold 40px monospace"
  ctx.fillText("✓", 600, 535)

  ctx.fillStyle = "#bac2de"
  ctx.font = "16px monospace"
  ctx.fillText(`Date: ${date}`, 600, 630)
  ctx.fillText("JS Mastery — Sheryians Coding School", 600, 670)

  const link = document.createElement("a")
  link.download = `js-mastery-certificate-${Date.now()}.png`
  link.href = canvas.toDataURL("image/png")
  link.click()
}
