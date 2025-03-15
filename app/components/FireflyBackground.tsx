"use client"

import { useEffect, useRef } from "react"

interface Firefly {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  brightness: number
  color: string
  flickerOffset: number
}

export function FireflyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const fireflies: Firefly[] = []
    const fireflyCount = 80

    for (let i = 0; i < fireflyCount; i++) {
      fireflies.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        brightness: 0,
        color: Math.random() > 0.5 ? "#4a9ff5" : "#f5dd4a",
        flickerOffset: Math.random() * 1.625, // Total cycle is 1.625 seconds
      })
    }

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      fireflies.forEach((firefly) => {
        // Update position
        firefly.x += firefly.speedX
        firefly.y += firefly.speedY

        // Wrap around edges
        firefly.x = (firefly.x + canvas.width) % canvas.width
        firefly.y = (firefly.y + canvas.height) % canvas.height

        // Calculate brightness based on time
        const cycleTime = (time / 1000 + firefly.flickerOffset) % 1.625
        if (cycleTime < 1) {
          firefly.brightness = 1 // Full brightness for 1 second
        } else if (cycleTime < 1.25) {
          firefly.brightness = 1 - (cycleTime - 1) * 4 // Dim down over 0.25 seconds
        } else if (cycleTime < 1.375) {
          firefly.brightness = 0 // Fully dark for 0.125 seconds
        } else {
          firefly.brightness = (cycleTime - 1.375) * 4 // Dim up over 0.25 seconds
        }

        // Draw firefly
        ctx.beginPath()
        ctx.arc(firefly.x, firefly.y, firefly.size, 0, Math.PI * 2)
        ctx.fillStyle = firefly.color
        ctx.globalAlpha = firefly.brightness
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ mixBlendMode: "screen" }} />
}

