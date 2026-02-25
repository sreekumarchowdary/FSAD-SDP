"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  ClipboardList,
  BarChart3,
  Compass,
  TrendingUp,
  Brain,
  Award,
  Clock,
  ArrowRight,
  LogOut,
  User,
  GraduationCap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { PageTransition, FadeIn, ScaleIn } from "@/components/animations"

const stats = [
  { title: "Assessments Taken", value: "3", icon: ClipboardList, color: "text-chart-1" },
  { title: "Skills Score", value: "82%", icon: TrendingUp, color: "text-chart-2" },
  { title: "Recommended Careers", value: "12", icon: Compass, color: "text-chart-3" },
]

const recentActivity = [
  { action: "Completed Personality Assessment", time: "2 hours ago", icon: Brain },
  { action: "Viewed Career: UX Designer", time: "1 day ago", icon: Compass },
  { action: "Achieved Skill Badge: Communication", time: "3 days ago", icon: Award },
  { action: "Started Technical Skills Test", time: "5 days ago", icon: ClipboardList },
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar */}
      <header className="border-b border-border bg-card px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <GraduationCap className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">CareerPath</span>
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/profile">
                <User className="mr-2 h-4 w-4" />
                Profile
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/login">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">
        <PageTransition>
          {/* Welcome */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">Welcome back, Alex!</h1>
            <p className="mt-1 text-muted-foreground">
              {"Here's an overview of your career journey so far."}
            </p>
          </div>

          {/* Stats */}
          <div className="mb-8 grid gap-4 sm:grid-cols-3">
            {stats.map((stat, i) => (
              <ScaleIn key={stat.title} delay={i * 0.1}>
                <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card>
                    <CardContent className="flex items-center gap-4 p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <stat.icon className={`h-6 w-6 ${stat.color}`} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{stat.title}</p>
                        <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScaleIn>
            ))}
          </div>

          {/* Actions */}
          <FadeIn>
            <div className="mb-8 grid gap-4 sm:grid-cols-3">
              <Button size="lg" className="h-auto py-6" asChild>
                <Link href="/assessment" className="flex flex-col items-center gap-2">
                  <ClipboardList className="h-6 w-6" />
                  <span>Start Assessment</span>
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-auto py-6" asChild>
                <Link href="/results" className="flex flex-col items-center gap-2">
                  <BarChart3 className="h-6 w-6" />
                  <span>View Results</span>
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-auto py-6" asChild>
                <Link href="/careers" className="flex flex-col items-center gap-2">
                  <Compass className="h-6 w-6" />
                  <span>Explore Careers</span>
                </Link>
              </Button>
            </div>
          </FadeIn>

          {/* Skills overview + recent activity */}
          <div className="grid gap-6 lg:grid-cols-2">
            <FadeIn direction="left">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Skills Overview</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  {[
                    { skill: "Analytical Thinking", value: 85 },
                    { skill: "Communication", value: 72 },
                    { skill: "Problem Solving", value: 90 },
                    { skill: "Creativity", value: 68 },
                    { skill: "Leadership", value: 55 },
                  ].map((s) => (
                    <div key={s.skill}>
                      <div className="mb-1 flex items-center justify-between text-sm">
                        <span className="text-foreground">{s.skill}</span>
                        <span className="text-muted-foreground">{s.value}%</span>
                      </div>
                      <Progress value={s.value} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn direction="right">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Recent Activity</CardTitle>
                    <Button variant="ghost" size="sm">
                      View all <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    {recentActivity.map((activity, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <activity.icon className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{activity.action}</p>
                          <p className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            {activity.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </PageTransition>
      </main>
    </div>
  )
}
