"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Users, Star, Award, TrendingUp } from "lucide-react"

interface StatItem {
  icon: React.ReactNode
  value: number
  suffix: string
  label: string
  color: string
}

export function AnimatedStats() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0, 0])

  const stats: StatItem[] = [
    {
      icon: <Users className="h-5 w-5" />,
      value: 50000,
      suffix: "+",
      label: "Students",
      color: "text-blue-400",
    },
    {
      icon: <Star className="h-5 w-5" />,
      value: 4.9,
      suffix: "/5",
      label: "Rating",
      color: "text-orange-400",
    },
    {
      icon: <Award className="h-5 w-5" />,
      value: 95,
      suffix: "%",
      label: "Success Rate",
      color: "text-green-400",
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      value: 1000,
      suffix: "+",
      label: "Problems",
      color: "text-purple-400",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("animated-stats")
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        let start = 0
        const end = stat.value
        const duration = 2000
        const increment = end / (duration / 16)

        const timer = setInterval(() => {
          start += increment
          if (start >= end) {
            start = end
            clearInterval(timer)
          }
          setAnimatedValues((prev) => {
            const newValues = [...prev]
            newValues[index] = start
            return newValues
          })
        }, 16)
      })
    }
  }, [isVisible])

  return (
    <div id="animated-stats" className="flex items-center gap-8 pt-4">
      {stats.map((stat, index) => (
        <div key={index} className="flex items-center gap-2 group">
          <div className={`${stat.color} group-hover:scale-110 transition-transform duration-300`}>{stat.icon}</div>
          <div>
            <div className="text-white font-semibold">
              {index < 2 ? animatedValues[index].toFixed(index === 1 ? 1 : 0) : Math.floor(animatedValues[index])}
              {stat.suffix}
            </div>
            <div className="text-slate-300 text-sm">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
