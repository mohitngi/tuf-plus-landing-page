"use client"

import { useState, useEffect } from "react"
import { ArrowRight, CheckCircle, Star, BookOpen, Target, Code, Database, Brain, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { InteractiveDashboard } from "@/components/interactive-dashboard"
import { AnimatedStats } from "@/components/animated-stats"
import { InteractiveFeatureShowcase } from "@/components/interactive-feature-showcase"

export default function TakeUForwardPlusLanding() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 9,
    minutes: 1,
    seconds: 0
  })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    // Set default target date (9 hours and 1 minute from now)
    let targetDate = new Date()
    targetDate.setHours(targetDate.getHours() + 9)
    targetDate.setMinutes(targetDate.getMinutes() + 1)
    targetDate.setSeconds(targetDate.getSeconds() + 0)
    
    // Only run localStorage logic on client side
    if (typeof window !== 'undefined') {
      // Get or set the target date from localStorage
      const storedTarget = localStorage.getItem('countdownTarget')
      
      if (storedTarget) {
        const storedDate = new Date(parseInt(storedTarget))
        // If the stored target has passed, reset it
        if (storedDate.getTime() <= Date.now()) {
          localStorage.setItem('countdownTarget', targetDate.getTime().toString())
        } else {
          targetDate = storedDate
        }
      } else {
        // First time: set the target date
        localStorage.setItem('countdownTarget', targetDate.getTime().toString())
      }
    }

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        // Reset timer when it reaches zero (9 hours and 1 minute)
        const newTargetDate = new Date()
        newTargetDate.setHours(newTargetDate.getHours() + 9)
        newTargetDate.setMinutes(newTargetDate.getMinutes() + 1)
        targetDate = newTargetDate
        if (typeof window !== 'undefined') {
          localStorage.setItem('countdownTarget', targetDate.getTime().toString())
        }
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Promo Banner */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-center py-3 px-4">
                  <div className="flex items-center justify-center gap-4 text-sm font-medium">
            <span>🔥 Use Code "PAYDAY" - Lifetime Access Won't Last Forever</span>
            <div className="flex items-center gap-2">
              <span className="bg-white/20 px-2 py-1 rounded font-mono">{isClient ? timeLeft.hours.toString().padStart(2, '0') : '09'} HOURS</span>
              <span className="bg-white/20 px-2 py-1 rounded font-mono">{isClient ? timeLeft.minutes.toString().padStart(2, '0') : '01'} MINUTES</span>
              <span className="bg-white/20 px-2 py-1 rounded font-mono">{isClient ? timeLeft.seconds.toString().padStart(2, '0') : '00'} SECONDS</span>
            </div>
          </div>
      </div>

      {/* Navigation */}
      <nav className="border-b border-slate-800 bg-slate-950/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="bg-orange-600 text-white px-3 py-1 rounded-lg font-bold text-lg">TUF+</div>
              <span className="text-slate-300">takeUforward</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#features"
                className="text-slate-300 hover:text-white transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Features
              </a>
              <a
                href="#syllabus"
                className="text-slate-300 hover:text-white transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("syllabus")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Syllabus
              </a>
              <a
                href="#pricing"
                className="text-slate-300 hover:text-white transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Pricing
              </a>
              <a
                href="#reviews"
                className="text-slate-300 hover:text-white transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("reviews")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Reviews
              </a>
              <Button
                variant="outline"
                className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white bg-transparent"
              >
                Login
              </Button>
            </div>
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                className="text-slate-300"
                onClick={() => {
                  const mobileMenu = document.getElementById("mobile-menu")
                  mobileMenu?.classList.toggle("hidden")
                }}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div id="mobile-menu" className="hidden md:hidden bg-slate-950 border-b border-slate-800">
        <div className="px-4 py-4 space-y-4">
          <a
            className="block text-slate-300 hover:text-white transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
              document.getElementById("mobile-menu")?.classList.add("hidden")
            }}
          >
            Features
          </a>
          <a
            className="block text-slate-300 hover:text-white transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("syllabus")?.scrollIntoView({ behavior: "smooth" })
              document.getElementById("mobile-menu")?.classList.add("hidden")
            }}
          >
            Syllabus
          </a>
          <a
            className="block text-slate-300 hover:text-white transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
              document.getElementById("mobile-menu")?.classList.add("hidden")
            }}
          >
            Pricing
          </a>
          <a
            className="block text-slate-300 hover:text-white transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("reviews")?.scrollIntoView({ behavior: "smooth" })
              document.getElementById("mobile-menu")?.classList.add("hidden")
            }}
          >
            Reviews
          </a>
          <Button
            variant="outline"
            className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white bg-transparent w-full"
          >
            Login
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="space-y-8">
              <Badge className="bg-orange-600/20 text-orange-400 border-orange-600/30">
                ⚡ Crafted by Top Engineers
              </Badge>

              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Your{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                    ONE STOP
                  </span>
                  <br />
                  Interview Prep Platform
                </h1>

                <p className="text-xl text-slate-300 leading-relaxed">
                  Built to save your time and effort. No context switching, everything you need, nothing you don't.
                  Master tech interviews with our curated syllabus and company-specific preparation.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg bg-transparent"
                  onClick={() => {
                    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Explore Features
                </Button>
              </div>

              {/* Animated Stats */}
              <AnimatedStats />
            </div>

            {/* Right Dashboard */}
            <div className="w-full">
              <InteractiveDashboard />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Everything You Need to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                Crack Interviews 💪
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Stop juggling multiple platforms. Get everything in one place with our comprehensive interview preparation
              suite.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <BookOpen className="h-8 w-8" />,
                title: "DSA",
                description: "Complete Data Structures & Algorithms curriculum with 500+ problems",
                badge: "Core",
                badgeColor: "bg-blue-600/20 text-blue-400 border-blue-600/30",
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Premium",
                description: "Exclusive FAANG interview questions and company-specific preparation",
                badge: "New",
                badgeColor: "bg-orange-600/20 text-orange-400 border-orange-600/30",
              },
              {
                icon: <Database className="h-8 w-8" />,
                title: "System Design",
                description: "Master scalable system architecture with real-world case studies",
                badge: "New",
                badgeColor: "bg-orange-600/20 text-orange-400 border-orange-600/30",
              },
              {
                icon: <Brain className="h-8 w-8" />,
                title: "Aptitude",
                description: "Quantitative aptitude, logical reasoning, and verbal ability prep",
                badge: "New",
                badgeColor: "bg-orange-600/20 text-orange-400 border-orange-600/30",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 group relative overflow-hidden hover:scale-105"
              >
                <div className="absolute top-4 right-4">
                  <Badge className={benefit.badgeColor}>{benefit.badge}</Badge>
                </div>
                <CardHeader className="pb-4">
                  <div className="text-orange-400 mb-4 p-3 bg-orange-600/10 rounded-lg w-fit group-hover:bg-orange-600/20 transition-colors">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-white text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-300 text-base leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Syllabus Section */}
      <section id="syllabus" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Complete Interview{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                Syllabus
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Master every aspect of technical interviews with our comprehensive curriculum
            </p>
          </div>

          <Tabs defaultValue="dsa" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 bg-slate-800 mb-8">
              <TabsTrigger value="dsa" className="data-[state=active]:bg-orange-600">
                <Code className="h-4 w-4 mr-2" />
                DSA
              </TabsTrigger>
              <TabsTrigger value="system-design" className="data-[state=active]:bg-orange-600">
                <Database className="h-4 w-4 mr-2" />
                System Design
              </TabsTrigger>
              <TabsTrigger value="core-subjects" className="data-[state=active]:bg-orange-600">
                <BookOpen className="h-4 w-4 mr-2" />
                Core CS
              </TabsTrigger>
              <TabsTrigger value="aptitude" className="data-[state=active]:bg-orange-600">
                <Brain className="h-4 w-4 mr-2" />
                Aptitude
              </TabsTrigger>
              <TabsTrigger value="premium" className="data-[state=active]:bg-orange-600">
                <Lightbulb className="h-4 w-4 mr-2" />
                Premium
              </TabsTrigger>
            </TabsList>

            <TabsContent value="dsa" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Arrays & Strings",
                  "Linked Lists",
                  "Trees & Graphs",
                  "Dynamic Programming",
                  "Greedy Algorithms",
                  "Backtracking",
                  "Binary Search",
                  "Two Pointers",
                  "Sliding Window",
                ].map((topic, index) => (
                  <Card
                    key={index}
                    className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-white">{topic}</span>
                        <Badge variant="secondary" className="bg-orange-600/20 text-orange-400">
                          {Math.floor(Math.random() * 50) + 20} Problems
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="system-design" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Scalability Fundamentals",
                  "Database Design",
                  "Caching Strategies",
                  "Load Balancing",
                  "Microservices",
                  "Message Queues",
                  "CDN & Storage",
                  "Security & Auth",
                  "Monitoring & Logging",
                ].map((topic, index) => (
                  <Card
                    key={index}
                    className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-white">{topic}</span>
                        <Badge variant="secondary" className="bg-orange-600/20 text-orange-400">
                          {Math.floor(Math.random() * 15) + 5} Cases
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="core-subjects" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Operating Systems",
                  "Computer Networks",
                  "Database Management",
                  "Object-Oriented Programming",
                  "Software Engineering",
                  "Compiler Design",
                  "Computer Architecture",
                  "Theory of Computation",
                  "Discrete Mathematics",
                ].map((topic, index) => (
                  <Card
                    key={index}
                    className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-white">{topic}</span>
                        <Badge variant="secondary" className="bg-orange-600/20 text-orange-400">
                          {Math.floor(Math.random() * 100) + 50} Questions
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="aptitude" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Quantitative Aptitude",
                  "Logical Reasoning",
                  "Verbal Ability",
                  "Data Interpretation",
                  "Puzzles & Brain Teasers",
                  "Pattern Recognition",
                  "Number Systems",
                  "Probability & Statistics",
                  "Time & Work",
                ].map((topic, index) => (
                  <Card
                    key={index}
                    className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-white">{topic}</span>
                        <Badge variant="secondary" className="bg-orange-600/20 text-orange-400">
                          {Math.floor(Math.random() * 80) + 30} Questions
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="premium" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "FAANG Interview Questions",
                  "Startup-Specific Prep",
                  "Mock Interview Sessions",
                  "Company-wise Analysis",
                  "Salary Negotiation",
                  "Resume Review",
                  "Behavioral Questions",
                  "Technical Leadership",
                  "Industry Insights",
                ].map((topic, index) => (
                  <Card
                    key={index}
                    className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-white">{topic}</span>
                        <Badge className="bg-gradient-to-r from-orange-600 to-red-600 text-white">Premium</Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                TakeUForward PLUS
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Experience our platform with interactive demos and see why thousands of students choose us
            </p>
          </div>

          <InteractiveFeatureShowcase />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Simple{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Pricing</span>
            </h2>
            <p className="text-xl text-slate-300">One subscription, unlimited access to everything</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <Card className="bg-slate-800/50 border-slate-700 hover:scale-105 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white">Free</CardTitle>
                <CardDescription className="text-slate-300">Get started with basics</CardDescription>
                <div className="text-3xl font-bold text-white">
                  $0<span className="text-lg font-normal">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {[
                    "Basic DSA problems",
                    "Limited system design content",
                    "Community support",
                    "Basic progress tracking",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-slate-300">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Plus Plan */}
            <Card className="bg-slate-800/80 border-orange-500/30 relative hover:scale-105 transition-all duration-300">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 font-medium">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-white font-bold">PLUS</CardTitle>
                <CardDescription className="text-slate-200">Everything you need to succeed</CardDescription>
                <div className="text-3xl font-bold text-white">
                  $99<span className="text-lg font-normal line-through text-slate-500">$299</span>
                  <span className="text-lg font-normal text-slate-200">/lifetime</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {[
                    "Complete DSA curriculum",
                    "System design masterclass",
                    "Company-specific prep",
                    "Premium question bank",
                    "Mock interviews",
                    "Priority support",
                    "Progress analytics",
                    "Lifetime updates",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-slate-200">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold">
                  Get PLUS Now
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="bg-slate-800/50 border-slate-700 hover:scale-105 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white">Enterprise</CardTitle>
                <CardDescription className="text-slate-300">For teams and organizations</CardDescription>
                <div className="text-3xl font-bold text-white">Custom</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {[
                    "Everything in PLUS",
                    "Team management",
                    "Custom content",
                    "Dedicated support",
                    "Analytics dashboard",
                    "API access",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-slate-300">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
                >
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              What Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                Students Say
              </span>
            </h2>
            <p className="text-xl text-slate-300">Join thousands who've landed their dream jobs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                role: "Software Engineer at Google",
                content:
                  "TakeUForward PLUS was a game-changer for my interview prep. The structured approach and company-specific questions helped me crack Google's interview in just 3 months!",
                rating: 5,
              },
              {
                name: "Rahul Kumar",
                role: "SDE-2 at Amazon",
                content:
                  "The system design content is exceptional. I went from zero knowledge to confidently designing scalable systems. Got my Amazon offer thanks to TUF+!",
                rating: 5,
              },
              {
                name: "Ananya Patel",
                role: "Frontend Developer at Microsoft",
                content:
                  "Love how everything is in one place. No more jumping between different platforms. The premium questions are exactly what I faced in my Microsoft interview.",
                rating: 5,
              },
              {
                name: "Vikash Singh",
                role: "Full Stack Developer at Flipkart",
                content:
                  "The mock interviews and behavioral prep sections are incredibly valuable. Helped me gain confidence and land my dream job at Flipkart.",
                rating: 5,
              },
              {
                name: "Sneha Reddy",
                role: "Data Scientist at Netflix",
                content:
                  "Comprehensive coverage of all topics with clear explanations. The time I saved by using TUF+ instead of multiple resources was incredible.",
                rating: 5,
              },
              {
                name: "Arjun Mehta",
                role: "DevOps Engineer at Uber",
                content:
                  "The company-specific prep feature is brilliant. Knew exactly what to expect in my Uber interview. Highly recommend TakeUForward PLUS!",
                rating: 5,
              },
            ].map((review, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:scale-105 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-orange-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-300 mb-4">"{review.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{review.name}</div>
                    <div className="text-sm text-slate-400">{review.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Transform</span>{" "}
            Your Career?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join 50,000+ students who've already started their journey to landing their dream tech job. Your success
            story starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-12 py-4 text-lg hover:scale-105 transition-all duration-300"
            >
              Get Lifetime Access - $99
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg bg-transparent hover:scale-105 transition-all duration-300"
            >
              Try Free Version
            </Button>
          </div>
          <p className="text-sm text-slate-400 mt-4">30-day money-back guarantee • No hidden fees • Cancel anytime</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-orange-600 text-white px-3 py-1 rounded-lg font-bold text-lg">TUF+</div>
                <span className="text-slate-300">takeUforward</span>
              </div>
              <p className="text-slate-400">
                Your one-stop platform for cracking tech interviews and landing your dream job.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Syllabus
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Reviews
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Support</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 TakeUForward. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
