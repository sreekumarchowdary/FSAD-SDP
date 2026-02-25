"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Brain, Target, TrendingUp, ChevronRight, Star, Users, BookOpen, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn, ScaleIn } from "@/components/animations"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden gradient-bg px-6 pb-20 pt-32 md:pb-32 md:pt-44">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90">
            AI-Powered Career Guidance
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-4xl text-balance text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl"
        >
          Discover Your Perfect Career Path
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/80 md:text-xl"
        >
          Take personality tests, evaluate your skills, and receive AI-powered
          career recommendations tailored just for you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
            <Link href="/signup">
              Get Started <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
            asChild
          >
            <Link href="/assessment">Take Assessment</Link>
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-8"
        >
          {[
            { value: "50K+", label: "Students" },
            { value: "200+", label: "Career Paths" },
            { value: "95%", label: "Accuracy" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-white md:text-3xl">{stat.value}</p>
              <p className="mt-1 text-sm text-white/60">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const features = [
  {
    icon: Brain,
    title: "Personality Tests",
    description: "Comprehensive personality assessments based on validated psychological frameworks to understand your traits.",
  },
  {
    icon: Target,
    title: "Skill Analysis",
    description: "Evaluate your technical and soft skills with adaptive assessments that measure your true capabilities.",
  },
  {
    icon: TrendingUp,
    title: "Career Recommendations",
    description: "Receive personalized career suggestions powered by AI, matching your unique profile to ideal paths.",
  },
  {
    icon: BarChart3,
    title: "Detailed Reports",
    description: "Get in-depth reports with visual breakdowns of your strengths, areas for growth, and career fit scores.",
  },
  {
    icon: Users,
    title: "Peer Comparisons",
    description: "See how your profile compares to others in similar fields and learn from the paths of successful professionals.",
  },
  {
    icon: BookOpen,
    title: "Learning Paths",
    description: "Discover courses and resources aligned with your recommended careers to start building your future.",
  },
]

export function FeaturesSection() {
  return (
    <section className="bg-background px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <FadeIn className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Features
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground md:text-4xl">
            Everything You Need to Find Your Path
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            Our platform combines cutting-edge assessments with AI-driven
            insights to guide your career decisions.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <ScaleIn key={feature.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glass-card group rounded-xl p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>
  )
}

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Computer Science Student",
    content: "CareerPath helped me realize that my strengths align perfectly with UX research. I never would have considered it without the assessment!",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Business Major",
    content: "The skill analysis was incredibly accurate. It identified gaps in my knowledge and suggested courses that actually made a difference.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Engineering Student",
    content: "I was torn between multiple career paths. CareerPath gave me the clarity and confidence to pursue data science. Highly recommend!",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="gradient-bg-subtle px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <FadeIn className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Testimonials
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground md:text-4xl">
            Trusted by Students Everywhere
          </h2>
        </FadeIn>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.15} direction="up">
              <div className="glass-card rounded-xl p-6 shadow-sm">
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {`"${t.content}"`}
                </p>
                <div className="mt-6">
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CTASection() {
  return (
    <section className="bg-background px-6 py-20 md:py-28">
      <FadeIn>
        <div className="mx-auto max-w-4xl rounded-2xl gradient-bg p-10 text-center md:p-16">
          <h2 className="text-balance text-3xl font-bold text-white md:text-4xl">
            Ready to Discover Your Future?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-white/80">
            Join thousands of students who have already found their ideal career
            path. Start your assessment today.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link href="/signup">Create Free Account</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
              asChild
            >
              <Link href="/assessment">Try Assessment</Link>
            </Button>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
