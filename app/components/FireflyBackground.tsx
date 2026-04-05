"use client"

import { useEffect, useRef } from "react"

interface Firefly {
  x: number
  y: number
  size: number
  vx: number
  vy: number
  brightness: number
  color: string
  flickerOffset: number
  phaseOffset: number
  isExtraBright: boolean
  glowDuration: number
  glowTimer: number
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
    const fireflyCount = 70 // Increased count for better sweeping effect

    for (let i = 0; i < fireflyCount; i++) {
      fireflies.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 1.1, // Slightly smaller, more delicate
        vx: (Math.random() - 0.5) * 0.2, // Base velocity
        vy: (Math.random() - 0.5) * 0.2,
        brightness: 1,
        color: Math.random() > 0.5 ? "#4a9ff5" : "#f5dd4a", // Colors without alpha (we'll use globalAlpha)
        flickerOffset: Math.random() * 2,
        phaseOffset: Math.random() * Math.PI * 2,
        isExtraBright: false,
        glowDuration: 0,
        glowTimer: 0,
      })
    }

    let windAngle = Math.random() * Math.PI * 2
    let targetWindAngle = windAngle
    let windStrength = 0.5
    let timeSinceLastWindChange = 0

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      const seconds = time / 1000

      // Update global wind direction very slowly
      if (time - timeSinceLastWindChange > 8000 + Math.random() * 4000) {
        targetWindAngle += (Math.random() - 0.5) * Math.PI * 0.5
        timeSinceLastWindChange = time
      }
      windAngle += (targetWindAngle - windAngle) * 0.005

      // Swirling force parameters
      const swirlFrequency = 0.0002
      const swirlScale = 0.005

      fireflies.forEach((firefly) => {
        // Individual "floating" motion (Perlin-like simplicity)
        const floatX = Math.sin(seconds * 0.5 + firefly.phaseOffset) * 0.1
        const floatY = Math.cos(seconds * 0.3 + firefly.phaseOffset) * 0.1

        // Global wind force
        const windX = Math.cos(windAngle) * windStrength
        const windY = Math.sin(windAngle) * windStrength

        // Swirling effect based on position (creates local currents)
        const swirl = Math.sin(firefly.x * swirlScale + seconds * swirlFrequency * 1000) * 0.2
        const swirlX = -Math.sin(swirl) * 0.3
        const swirlY = Math.cos(swirl) * 0.3

        // Apply forces to velocity (with damping for weightlessness)
        firefly.vx = (firefly.vx + windX * 0.01 + swirlX * 0.02 + floatX * 0.05) * 0.98
        firefly.vy = (firefly.vy + windY * 0.01 + swirlY * 0.02 + floatY * 0.05) * 0.98

        // Update position
        firefly.x += firefly.vx + windX * 0.2
        firefly.y += firefly.vy + windY * 0.2

        // Wrap around edges with a buffer for smoothness
        const margin = 50
        if (firefly.x < -margin) firefly.x = canvas.width + margin
        if (firefly.x > canvas.width + margin) firefly.x = -margin
        if (firefly.y < -margin) firefly.y = canvas.height + margin
        if (firefly.y > canvas.height + margin) firefly.y = -margin

        // Calculate a more graceful pulsing brightness
        const pulse = Math.sin(seconds * 0.8 + firefly.flickerOffset * 5) * 0.5 + 0.5
        firefly.brightness = pulse * 0.8

        // Draw particle with a soft glow
        ctx.save()
        ctx.beginPath()
        ctx.arc(firefly.x, firefly.y, firefly.size, 0, Math.PI * 2)
        
        // Soft outer glow
        const gradient = ctx.createRadialGradient(
          firefly.x, firefly.y, 0,
          firefly.x, firefly.y, firefly.size * 3
        )
        gradient.addColorStop(0, `${firefly.color}${Math.floor(firefly.brightness * 255).toString(16).padStart(2, '0')}`)
        gradient.addColorStop(1, `${firefly.color}00`)

        ctx.fillStyle = gradient
        ctx.globalAlpha = 1
        ctx.fill()

        // Inner core
        ctx.beginPath()
        ctx.arc(firefly.x, firefly.y, firefly.size * 0.6, 0, Math.PI * 2)
        ctx.fillStyle = "#FFFFFF"
        ctx.globalAlpha = firefly.brightness * 0.5
        ctx.fill()
        ctx.restore()
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

