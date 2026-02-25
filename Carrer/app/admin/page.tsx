"use client"

import { Users, ClipboardList, FileText, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageTransition, FadeIn, ScaleIn } from "@/components/animations"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts"

const overviewStats = [
  { title: "Total Students", value: "2,847", change: "+12%", icon: Users },
  { title: "Tests Created", value: "24", change: "+3", icon: ClipboardList },
  { title: "Reports Generated", value: "1,532", change: "+18%", icon: FileText },
  { title: "Avg. Completion Rate", value: "87%", change: "+5%", icon: TrendingUp },
]

const monthlyData = [
  { month: "Jan", students: 180, assessments: 120 },
  { month: "Feb", students: 220, assessments: 180 },
  { month: "Mar", students: 310, assessments: 250 },
  { month: "Apr", students: 380, assessments: 320 },
  { month: "May", students: 420, assessments: 380 },
  { month: "Jun", students: 510, assessments: 460 },
]

const categoryData = [
  { name: "Personality", count: 850 },
  { name: "Technical", count: 620 },
  { name: "Soft Skills", count: 540 },
  { name: "Aptitude", count: 430 },
  { name: "Interest", count: 380 },
]

export default function AdminDashboardPage() {
  return (
    <main className="p-8">
      <PageTransition>
        <h1 className="mb-2 text-3xl font-bold text-foreground">Admin Dashboard</h1>
        <p className="mb-8 text-muted-foreground">
          Overview of your career assessment platform
        </p>

        {/* Stats */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {overviewStats.map((stat, i) => (
            <ScaleIn key={stat.title} delay={i * 0.1}>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.title}</p>
                      <p className="mt-1 text-2xl font-bold text-foreground">{stat.value}</p>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <p className="mt-2 text-xs font-medium text-chart-2">{stat.change} this month</p>
                </CardContent>
              </Card>
            </ScaleIn>
          ))}
        </div>

        {/* Charts */}
        <div className="grid gap-6 lg:grid-cols-2">
          <FadeIn direction="left">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Monthly Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.90 0.02 260)" />
                      <XAxis dataKey="month" tick={{ fill: "oklch(0.50 0.03 260)", fontSize: 12 }} />
                      <YAxis tick={{ fill: "oklch(0.50 0.03 260)", fontSize: 12 }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "oklch(0.99 0.003 260)",
                          border: "1px solid oklch(0.90 0.02 260)",
                          borderRadius: "8px",
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="students"
                        stackId="1"
                        stroke="oklch(0.50 0.20 260)"
                        fill="oklch(0.50 0.20 260)"
                        fillOpacity={0.2}
                        name="Students"
                      />
                      <Area
                        type="monotone"
                        dataKey="assessments"
                        stackId="2"
                        stroke="oklch(0.55 0.18 230)"
                        fill="oklch(0.55 0.18 230)"
                        fillOpacity={0.2}
                        name="Assessments"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn direction="right">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Assessments by Category</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={categoryData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.90 0.02 260)" />
                      <XAxis dataKey="name" tick={{ fill: "oklch(0.50 0.03 260)", fontSize: 12 }} />
                      <YAxis tick={{ fill: "oklch(0.50 0.03 260)", fontSize: 12 }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "oklch(0.99 0.003 260)",
                          border: "1px solid oklch(0.90 0.02 260)",
                          borderRadius: "8px",
                        }}
                      />
                      <Bar dataKey="count" fill="oklch(0.50 0.20 260)" radius={[4, 4, 0, 0]} name="Count" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </PageTransition>
    </main>
  )
}
