"use client"

import Link from "next/link"
import { GraduationCap, ArrowLeft, Download, Compass } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { PageTransition, FadeIn, ScaleIn } from "@/components/animations"
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts"

const radarData = [
  { subject: "Analytical", score: 85 },
  { subject: "Creative", score: 72 },
  { subject: "Social", score: 68 },
  { subject: "Organized", score: 90 },
  { subject: "Leadership", score: 55 },
  { subject: "Technical", score: 82 },
]

const barData = [
  { skill: "Problem Solving", score: 90 },
  { skill: "Communication", score: 72 },
  { skill: "Critical Thinking", score: 85 },
  { skill: "Teamwork", score: 68 },
  { skill: "Creativity", score: 75 },
  { skill: "Time Mgmt", score: 80 },
]

const skillBreakdown = [
  { name: "Analytical Thinking", score: 85 },
  { name: "Problem Solving", score: 90 },
  { name: "Communication", score: 72 },
  { name: "Creativity", score: 75 },
  { name: "Technical Aptitude", score: 82 },
  { name: "Leadership", score: 55 },
  { name: "Teamwork", score: 68 },
  { name: "Organization", score: 90 },
]

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <GraduationCap className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">CareerPath</span>
          </Link>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/dashboard">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Dashboard
            </Link>
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">
        <PageTransition>
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Assessment Results</h1>
              <p className="mt-1 text-muted-foreground">
                Your comprehensive career assessment analysis
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Download Report
              </Button>
              <Button asChild>
                <Link href="/careers">
                  <Compass className="mr-2 h-4 w-4" />
                  View Career Suggestions
                </Link>
              </Button>
            </div>
          </div>

          {/* Score summary */}
          <div className="mb-8 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Overall Score", value: "82%", desc: "Above average" },
              { label: "Personality Type", value: "INTJ", desc: "The Architect" },
              { label: "Top Career Match", value: "94%", desc: "Data Scientist" },
            ].map((item, i) => (
              <ScaleIn key={item.label} delay={i * 0.1}>
                <Card>
                  <CardContent className="p-6 text-center">
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="mt-1 text-3xl font-bold text-primary">{item.value}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              </ScaleIn>
            ))}
          </div>

          {/* Charts */}
          <div className="mb-8 grid gap-6 lg:grid-cols-2">
            <FadeIn direction="left">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Personality Profile</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart data={radarData}>
                        <PolarGrid stroke="oklch(0.90 0.02 260)" />
                        <PolarAngleAxis
                          dataKey="subject"
                          tick={{ fill: "oklch(0.50 0.03 260)", fontSize: 12 }}
                        />
                        <PolarRadiusAxis
                          angle={90}
                          domain={[0, 100]}
                          tick={{ fill: "oklch(0.50 0.03 260)", fontSize: 10 }}
                        />
                        <Radar
                          name="Score"
                          dataKey="score"
                          stroke="oklch(0.50 0.20 260)"
                          fill="oklch(0.50 0.20 260)"
                          fillOpacity={0.2}
                        />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn direction="right">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Skills Scores</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={barData} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.90 0.02 260)" />
                        <XAxis type="number" domain={[0, 100]} tick={{ fill: "oklch(0.50 0.03 260)", fontSize: 12 }} />
                        <YAxis dataKey="skill" type="category" width={100} tick={{ fill: "oklch(0.50 0.03 260)", fontSize: 11 }} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "oklch(0.99 0.003 260)",
                            border: "1px solid oklch(0.90 0.02 260)",
                            borderRadius: "8px",
                          }}
                        />
                        <Bar dataKey="score" fill="oklch(0.50 0.20 260)" radius={[0, 4, 4, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>

          {/* Skill breakdown */}
          <FadeIn>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Detailed Skills Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2">
                  {skillBreakdown.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-1 flex items-center justify-between text-sm">
                        <span className="text-foreground">{skill.name}</span>
                        <span className="font-medium text-primary">{skill.score}%</span>
                      </div>
                      <Progress value={skill.score} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </PageTransition>
      </main>
    </div>
  )
}
