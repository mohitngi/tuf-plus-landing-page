"use client"

import { useState, useEffect } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Code,
  Database,
  Brain,
  Lightbulb,
  CheckCircle,
  Star,
  Users,
  Activity,
  BarChart3,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function InteractiveFeatureShowcase() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(false)

  const features = [
    {
      id: "dsa",
      title: "Data Structures & Algorithms",
      icon: <Code className="h-6 w-6" />,
      description: "Master 500+ carefully curated problems with detailed explanations and optimal solutions.",
      stats: { problems: "500+", difficulty: "Easy to Hard", topics: "15+" },
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "system-design",
      title: "System Design Mastery",
      icon: <Database className="h-6 w-6" />,
      description: "Learn to design scalable systems with real-world case studies from top tech companies.",
      stats: { cases: "25+", companies: "FAANG", level: "Advanced" },
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "aptitude",
      title: "Aptitude & Reasoning",
      icon: <Brain className="h-6 w-6" />,
      description: "Sharpen your quantitative and logical reasoning skills for competitive exams.",
      stats: { questions: "300+", topics: "10+", tests: "50+" },
      color: "from-purple-500 to-violet-500",
    },
    {
      id: "premium",
      title: "Premium Interview Prep",
      icon: <Lightbulb className="h-6 w-6" />,
      description: "Exclusive content with company-specific questions and mock interview sessions.",
      stats: { companies: "20+", mocks: "Unlimited", success: "95%" },
      color: "from-orange-500 to-red-500",
    },
  ]

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveFeature((prev) => (prev + 1) % features.length)
      }, 4000)
    }
    return () => clearInterval(interval)
  }, [isAutoPlaying, features.length])

  const nextFeature = () => {
    setActiveFeature((prev) => (prev + 1) % features.length)
  }

  const prevFeature = () => {
    setActiveFeature((prev) => (prev - 1 + features.length) % features.length)
  }

  // Generate professional mockup for each feature
  const generateFeatureMockup = (feature: (typeof features)[0]) => {
    return (
      <div className="w-full h-96 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-2xl border border-slate-600 p-6 relative overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg bg-gradient-to-br ${feature.color} text-white`}>{feature.icon}</div>
            <div>
              <h4 className="text-white font-semibold">{feature.title}</h4>
              <p className="text-slate-400 text-sm">Interactive Learning Platform</p>
            </div>
          </div>
          <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Live</Badge>
        </div>

        {/* Content based on feature type */}
        <div className="space-y-4 h-64 overflow-hidden">
          {feature.id === "dsa" && (
            <>
              <div className="bg-slate-700/50 rounded-lg p-4">
                <div className="text-white font-medium mb-2">Current Problem: Two Sum</div>
                <div className="bg-slate-800 rounded p-3 text-sm font-mono text-green-400 overflow-hidden">
                  <div>def twoSum(nums, target):</div>
                  <div>&nbsp;&nbsp;seen = {"{}"}</div>
                  <div>&nbsp;&nbsp;for i, num in enumerate(nums):</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;complement = target - num</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;if complement in seen:</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return [seen[complement], i]</div>
                </div>
              </div>
              <div className="flex gap-2">
                <Badge className="bg-green-500/20 text-green-400">✓ Optimal Solution</Badge>
                <Badge className="bg-blue-500/20 text-blue-400">O(n) Time</Badge>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <Activity className="h-4 w-4" />
                <span>127 problems solved this week</span>
              </div>
            </>
          )}

          {feature.id === "system-design" && (
            <>
              <div className="bg-slate-700/50 rounded-lg p-4">
                <div className="text-white font-medium mb-3">Design: URL Shortener</div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-blue-500/20 p-3 rounded text-center text-blue-400 text-sm">Load Balancer</div>
                  <div className="bg-green-500/20 p-3 rounded text-center text-green-400 text-sm">App Servers</div>
                  <div className="bg-purple-500/20 p-3 rounded text-center text-purple-400 text-sm">Database</div>
                </div>
              </div>
              <div className="flex gap-2">
                <Badge className="bg-orange-500/20 text-orange-400">Scalable</Badge>
                <Badge className="bg-red-500/20 text-red-400">High Availability</Badge>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <BarChart3 className="h-4 w-4" />
                <span>15 system designs completed</span>
              </div>
            </>
          )}

          {feature.id === "aptitude" && (
            <>
              <div className="bg-slate-700/50 rounded-lg p-4">
                <div className="text-white font-medium mb-3">Question: Probability</div>
                <div className="text-slate-300 text-sm mb-3">
                  What is the probability of getting two heads when flipping a coin twice?
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-600 p-3 rounded text-center text-slate-300 text-sm">A) 1/2</div>
                  <div className="bg-green-500/20 p-3 rounded text-center text-green-400 text-sm">B) 1/4 ✓</div>
                </div>
              </div>
              <div className="flex gap-2">
                <Badge className="bg-green-500/20 text-green-400">Correct!</Badge>
                <Badge className="bg-blue-500/20 text-blue-400">+10 Points</Badge>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <Brain className="h-4 w-4" />
                <span>85% accuracy rate</span>
              </div>
            </>
          )}

          {feature.id === "premium" && (
            <>
              <div className="bg-slate-700/50 rounded-lg p-4">
                <div className="text-white font-medium mb-3">Google Interview Prep</div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-slate-300">Behavioral Questions</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-slate-300">Technical Deep Dive</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span className="text-slate-300">Mock Interview Scheduled</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Badge className="bg-orange-500/20 text-orange-400">Premium</Badge>
                <Badge className="bg-purple-500/20 text-purple-400">1-on-1</Badge>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <Users className="h-4 w-4" />
                <span>12 companies targeted</span>
              </div>
            </>
          )}
        </div>

        {/* Bottom stats bar */}
        <div className="absolute bottom-4 left-6 right-6 pt-4 border-t border-slate-700">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-1 text-slate-400">
              <Users className="h-3 w-3" />
              <span>1.2k active learners</span>
            </div>
            <div className="text-green-400">98% completion rate</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full space-y-8">
      {/* Main Feature Display */}
      <div className="bg-slate-800/30 rounded-2xl border border-slate-700 p-8">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Content Side */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-lg bg-gradient-to-br ${features[activeFeature].color} text-white`}>
                {features[activeFeature].icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{features[activeFeature].title}</h3>
                <Badge className="mt-1 bg-slate-700 text-slate-300">
                  Feature {activeFeature + 1} of {features.length}
                </Badge>
              </div>
            </div>

            <p className="text-lg text-slate-300 leading-relaxed">{features[activeFeature].description}</p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {Object.entries(features[activeFeature].stats).map(([key, value]) => (
                <Card key={key} className="bg-slate-700/50 border-slate-600">
                  <CardContent className="p-3 text-center">
                    <div className="text-lg font-bold text-white">{value}</div>
                    <div className="text-xs text-slate-400 capitalize">{key}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center gap-4 pt-4">
              <Button
                onClick={prevFeature}
                size="sm"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="flex gap-2">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveFeature(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeFeature ? "bg-orange-500 w-6" : "bg-slate-600 hover:bg-slate-500"
                    }`}
                  />
                ))}
              </div>

              <Button
                onClick={nextFeature}
                size="sm"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>

              <Button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                size="sm"
                className={`ml-4 ${
                  isAutoPlaying ? "bg-orange-600 hover:bg-orange-700" : "bg-slate-600 hover:bg-slate-700"
                }`}
              >
                <Play className="h-4 w-4" />
                {isAutoPlaying ? "Auto" : "Manual"}
              </Button>
            </div>
          </div>

          {/* Interactive Mockup Side */}
          <div className="w-full">{generateFeatureMockup(features[activeFeature])}</div>
        </div>
      </div>

      {/* Feature Tabs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature, index) => (
          <Card
            key={feature.id}
            className={`cursor-pointer transition-all duration-300 ${
              index === activeFeature
                ? "bg-slate-700/70 border-orange-500/50 scale-105"
                : "bg-slate-800/50 border-slate-700 hover:bg-slate-700/50"
            }`}
            onClick={() => setActiveFeature(index)}
          >
            <CardContent className="p-4 text-center">
              <div
                className={`inline-flex p-2 rounded-lg mb-2 ${
                  index === activeFeature
                    ? `bg-gradient-to-br ${feature.color} text-white`
                    : "bg-slate-700 text-slate-400"
                }`}
              >
                {feature.icon}
              </div>
              <div className={`text-sm font-medium ${index === activeFeature ? "text-white" : "text-slate-300"}`}>
                {feature.title.split(" ")[0]}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
