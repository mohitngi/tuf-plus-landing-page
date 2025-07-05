"use client"

import { useState, useEffect } from "react"
import { Play, Pause, RotateCcw, TrendingUp, CheckCircle, Code, Brain, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function InteractiveDashboard() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(0)

  const steps = [
    {
      title: "Problem Solving",
      description: "Practice DSA problems with real-time feedback",
      color: "bg-blue-500/20 border-blue-500",
      icon: <Code className="h-4 w-4" />,
    },
    {
      title: "Progress Tracking",
      description: "Monitor your improvement with detailed analytics",
      color: "bg-green-500/20 border-green-500",
      icon: <TrendingUp className="h-4 w-4" />,
    },
    {
      title: "Company Prep",
      description: "Target specific companies with curated content",
      color: "bg-orange-500/20 border-orange-500",
      icon: <Target className="h-4 w-4" />,
    },
    {
      title: "Mock Interviews",
      description: "Practice with AI-powered interview simulations",
      color: "bg-purple-500/20 border-purple-500",
      icon: <Brain className="h-4 w-4" />,
    },
  ]

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setCurrentStep((step) => (step + 1) % steps.length)
            return 0
          }
          return prev + 2
        })
      }, 100)
    }
    return () => clearInterval(interval)
  }, [isPlaying, steps.length])

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleReset = () => {
    setIsPlaying(false)
    setCurrentStep(0)
    setProgress(0)
  }

  return (
    <div className="w-full space-y-6">
      {/* Control Panel */}
      <div className="flex justify-end gap-2 mb-4">
        <Button
          size="sm"
          onClick={handlePlayPause}
          className="bg-slate-800/90 backdrop-blur-sm hover:bg-slate-700 text-white border border-slate-600"
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
        <Button
          size="sm"
          onClick={handleReset}
          className="bg-slate-800/90 backdrop-blur-sm hover:bg-slate-700 text-white border border-slate-600"
        >
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>

      {/* Main Dashboard */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-slate-700 p-6 w-full">
        {/* Dashboard Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
              <Code className="h-4 w-4 text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold">Interview Dashboard</h3>
              <p className="text-slate-400 text-sm">Your progress overview</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-slate-700/50 rounded-lg p-4">
            <div className="text-2xl font-bold text-white">127</div>
            <div className="text-slate-400 text-sm">Problems Solved</div>
            <div className="w-full bg-slate-600 rounded-full h-2 mt-2">
              <div className="bg-blue-500 h-2 rounded-full w-3/4 transition-all duration-300"></div>
            </div>
          </div>
          <div className="bg-slate-700/50 rounded-lg p-4">
            <div className="text-2xl font-bold text-white">85%</div>
            <div className="text-slate-400 text-sm">Success Rate</div>
            <div className="w-full bg-slate-600 rounded-full h-2 mt-2">
              <div className="bg-green-500 h-2 rounded-full w-4/5 transition-all duration-300"></div>
            </div>
          </div>
        </div>

        {/* Progress Chart Area */}
        <div className="bg-slate-700/30 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-white text-sm font-medium">Weekly Progress</span>
            <span className="text-slate-400 text-xs">Last 7 days</span>
          </div>
          <div className="flex items-end gap-2 h-16">
            {[40, 65, 45, 80, 60, 90, 75].map((height, index) => (
              <div
                key={index}
                className="bg-gradient-to-t from-orange-600 to-orange-400 rounded-sm flex-1 transition-all duration-300"
                style={{ height: `${height}%` }}
              ></div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-white text-sm">Completed: Two Sum Problem</span>
            <span className="text-slate-400 text-xs ml-auto">2 min ago</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-white text-sm">Started: System Design Course</span>
            <span className="text-slate-400 text-xs ml-auto">1 hour ago</span>
          </div>
        </div>

        {/* Feature Highlight */}
        <div className="bg-slate-700/20 rounded-lg p-4 border border-slate-600">
          <div className="flex items-center gap-3 mb-3">
            <div className={`p-2 rounded-lg ${steps[currentStep].color} transition-all duration-500`}>
              {steps[currentStep].icon}
            </div>
            <div>
              <h4 className="text-white font-medium">{steps[currentStep].title}</h4>
              <p className="text-slate-400 text-sm">{steps[currentStep].description}</p>
            </div>
          </div>
          <div className="w-full bg-slate-600 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <TrendingUp className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <div className="text-white font-medium text-sm">Live Analytics</div>
                <div className="text-slate-400 text-xs">Real-time progress</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-500/20 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-400" />
              </div>
              <div>
                <div className="text-white font-medium text-sm">Smart Tracking</div>
                <div className="text-slate-400 text-xs">AI-powered insights</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
