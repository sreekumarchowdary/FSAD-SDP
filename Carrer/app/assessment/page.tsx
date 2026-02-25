"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Clock, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { PageTransition } from "@/components/animations"

const questions = [
  {
    id: 1,
    question: "When working on a project, I prefer to...",
    options: [
      "Plan everything in detail before starting",
      "Jump right in and figure things out as I go",
      "Collaborate with others to brainstorm ideas",
      "Research extensively before making decisions",
    ],
  },
  {
    id: 2,
    question: "Which type of work environment appeals to you most?",
    options: [
      "A structured office with clear hierarchies",
      "A creative studio with flexible hours",
      "A remote setup with autonomy",
      "A fast-paced startup environment",
    ],
  },
  {
    id: 3,
    question: "When solving a difficult problem, you tend to...",
    options: [
      "Break it down into smaller, manageable parts",
      "Look for creative and unconventional solutions",
      "Seek advice from experienced people",
      "Use data and analysis to find the answer",
    ],
  },
  {
    id: 4,
    question: "Which activity do you find most energizing?",
    options: [
      "Designing and building something new",
      "Analyzing data and finding patterns",
      "Helping and mentoring others",
      "Leading a team towards a goal",
    ],
  },
  {
    id: 5,
    question: "What motivates you most in your career?",
    options: [
      "Financial success and stability",
      "Making a positive impact on society",
      "Continuous learning and growth",
      "Recognition and achievement",
    ],
  },
  {
    id: 6,
    question: "How do you handle tight deadlines?",
    options: [
      "I thrive under pressure and deliver my best work",
      "I plan ahead so tight deadlines rarely happen",
      "I delegate tasks to ensure everything gets done",
      "I focus on the most critical tasks first",
    ],
  },
  {
    id: 7,
    question: "Which skill would you most like to develop?",
    options: [
      "Technical expertise in a specific domain",
      "Public speaking and presentation skills",
      "Strategic thinking and business acumen",
      "Creative design and innovation abilities",
    ],
  },
  {
    id: 8,
    question: "When receiving feedback, you prefer...",
    options: [
      "Direct and specific constructive criticism",
      "Positive reinforcement with gentle suggestions",
      "Data-driven performance metrics",
      "Peer reviews and collaborative discussions",
    ],
  },
  {
    id: 9,
    question: "Which subject area interests you the most?",
    options: [
      "Technology and Computer Science",
      "Business and Economics",
      "Arts and Humanities",
      "Sciences and Healthcare",
    ],
  },
  {
    id: 10,
    question: "In five years, where do you see yourself?",
    options: [
      "Leading a team at a major company",
      "Running my own business or startup",
      "Being a recognized expert in my field",
      "Working on projects that change the world",
    ],
  },
]

export default function AssessmentPage() {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [timeLeft, setTimeLeft] = useState(600) // 10 min in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = useCallback((seconds: number) => {
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return `${m}:${s.toString().padStart(2, "0")}`
  }, [])

  const progress = ((Object.keys(answers).length) / questions.length) * 100
  const q = questions[current]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card px-6 py-4">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <GraduationCap className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">CareerPath</span>
          </Link>
          <div className="flex items-center gap-2 rounded-lg bg-muted px-3 py-1.5">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="font-mono text-sm font-medium text-foreground">
              {formatTime(timeLeft)}
            </span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-8">
        <PageTransition>
          {/* Progress */}
          <div className="mb-8">
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="text-muted-foreground">
                Question {current + 1} of {questions.length}
              </span>
              <span className="font-medium text-foreground">{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardContent className="p-8">
                  <h2 className="mb-6 text-xl font-semibold text-foreground">{q.question}</h2>

                  <RadioGroup
                    value={answers[q.id] || ""}
                    onValueChange={(val) => setAnswers({ ...answers, [q.id]: val })}
                    className="flex flex-col gap-3"
                  >
                    {q.options.map((option, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                      >
                        <Label
                          htmlFor={`q${q.id}-o${i}`}
                          className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 transition-colors ${
                            answers[q.id] === option
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <RadioGroupItem value={option} id={`q${q.id}-o${i}`} />
                          <span className="text-sm text-foreground">{option}</span>
                        </Label>
                      </motion.div>
                    ))}
                  </RadioGroup>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="mt-6 flex items-center justify-between">
            <Button
              variant="outline"
              onClick={() => setCurrent(Math.max(0, current - 1))}
              disabled={current === 0}
            >
              <ChevronLeft className="mr-1 h-4 w-4" />
              Previous
            </Button>

            {current === questions.length - 1 ? (
              <Button
                disabled={Object.keys(answers).length < questions.length}
                asChild
              >
                <Link href="/results">Submit Assessment</Link>
              </Button>
            ) : (
              <Button
                onClick={() => setCurrent(Math.min(questions.length - 1, current + 1))}
              >
                Next
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            )}
          </div>
        </PageTransition>
      </main>
    </div>
  )
}
