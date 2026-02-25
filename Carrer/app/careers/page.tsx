"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  GraduationCap,
  ArrowLeft,
  Search,
  Bookmark,
  BookmarkCheck,
  DollarSign,
  Briefcase,
  Code,
  Palette,
  Users,
  TrendingUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PageTransition, FadeIn } from "@/components/animations"

const categories = ["All", "Technology", "Management", "Creative", "Healthcare", "Finance"]

const careers = [
  {
    title: "Data Scientist",
    category: "Technology",
    match: 94,
    description: "Analyze complex data to help organizations make better decisions using statistical methods and machine learning.",
    skills: ["Python", "Statistics", "Machine Learning", "SQL"],
    salary: "$95K - $150K",
    icon: Code,
  },
  {
    title: "UX Designer",
    category: "Creative",
    match: 88,
    description: "Design intuitive digital experiences by researching user needs and creating wireframes and prototypes.",
    skills: ["Figma", "User Research", "Prototyping", "UI Design"],
    salary: "$75K - $120K",
    icon: Palette,
  },
  {
    title: "Product Manager",
    category: "Management",
    match: 85,
    description: "Lead cross-functional teams to define, build, and ship products that solve real customer problems.",
    skills: ["Strategy", "Analytics", "Communication", "Agile"],
    salary: "$100K - $160K",
    icon: Briefcase,
  },
  {
    title: "Software Engineer",
    category: "Technology",
    match: 82,
    description: "Design, develop, and maintain software applications and systems used by millions of people.",
    skills: ["JavaScript", "React", "Node.js", "System Design"],
    salary: "$90K - $170K",
    icon: Code,
  },
  {
    title: "Marketing Manager",
    category: "Management",
    match: 78,
    description: "Develop and execute marketing strategies to drive brand awareness and customer acquisition.",
    skills: ["SEO", "Analytics", "Content Strategy", "Branding"],
    salary: "$70K - $120K",
    icon: TrendingUp,
  },
  {
    title: "Clinical Psychologist",
    category: "Healthcare",
    match: 75,
    description: "Help individuals manage mental health challenges through therapy, assessment, and evidence-based interventions.",
    skills: ["Counseling", "Assessment", "Research", "Empathy"],
    salary: "$80K - $130K",
    icon: Users,
  },
  {
    title: "Financial Analyst",
    category: "Finance",
    match: 72,
    description: "Evaluate financial data and market trends to provide investment recommendations and business insights.",
    skills: ["Excel", "Financial Modeling", "Analysis", "Reporting"],
    salary: "$65K - $110K",
    icon: DollarSign,
  },
  {
    title: "Graphic Designer",
    category: "Creative",
    match: 70,
    description: "Create visual content for brands including logos, marketing materials, and digital assets.",
    skills: ["Adobe Suite", "Typography", "Branding", "Layout"],
    salary: "$50K - $90K",
    icon: Palette,
  },
]

export default function CareersPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [search, setSearch] = useState("")
  const [bookmarked, setBookmarked] = useState<Set<string>>(new Set())

  const toggleBookmark = (title: string) => {
    setBookmarked((prev) => {
      const next = new Set(prev)
      if (next.has(title)) next.delete(title)
      else next.add(title)
      return next
    })
  }

  const filtered = careers.filter((c) => {
    const matchesCategory = activeCategory === "All" || c.category === activeCategory
    const matchesSearch =
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase())
    return matchesCategory && matchesSearch
  })

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
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">Career Recommendations</h1>
            <p className="mt-1 text-muted-foreground">
              Personalized career paths based on your assessment results
            </p>
          </div>

          {/* Search and filter */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search careers..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={activeCategory === cat ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>

          {/* Career cards */}
          <div className="grid gap-4 md:grid-cols-2">
            {filtered.map((career, i) => (
              <FadeIn key={career.title} delay={i * 0.05}>
                <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                            <career.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">{career.title}</h3>
                            <Badge variant="secondary" className="mt-1">
                              {career.category}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                            {career.match}% Match
                          </span>
                          <button
                            onClick={() => toggleBookmark(career.title)}
                            className="text-muted-foreground hover:text-primary"
                            aria-label={bookmarked.has(career.title) ? "Remove bookmark" : "Bookmark career"}
                          >
                            {bookmarked.has(career.title) ? (
                              <BookmarkCheck className="h-5 w-5 text-primary" />
                            ) : (
                              <Bookmark className="h-5 w-5" />
                            )}
                          </button>
                        </div>
                      </div>

                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {career.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {career.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-md bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="mt-4 flex items-center gap-1 text-sm text-muted-foreground">
                        <DollarSign className="h-4 w-4" />
                        <span>{career.salary}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-lg text-muted-foreground">No careers match your filters.</p>
            </div>
          )}
        </PageTransition>
      </main>
    </div>
  )
}
