"use client"

import Link from "next/link"
import { GraduationCap, Target, Users, Award, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FadeIn, ScaleIn, PageTransition } from "@/components/animations"

const values = [
  {
    icon: Target,
    title: "Precision",
    description:
      "Our assessments are built on validated psychological frameworks ensuring accurate and meaningful results.",
  },
  {
    icon: Users,
    title: "Accessibility",
    description:
      "We believe every student deserves access to high-quality career guidance, regardless of background.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We continuously improve our platform using the latest research in career development and AI technology.",
  },
  {
    icon: Heart,
    title: "Empathy",
    description:
      "We understand the challenges students face and design every feature with their needs in mind.",
  },
]

const teamMembers = [
  { name: "Dr. Emily Carter", role: "Founder & CEO", bio: "PhD in Organizational Psychology with 15 years of career counseling experience." },
  { name: "Raj Mehta", role: "CTO", bio: "Former lead engineer at a top EdTech company, passionate about AI-driven education." },
  { name: "Lisa Park", role: "Head of Research", bio: "Published researcher in psychometrics and assessment design with over 20 publications." },
  { name: "David Nguyen", role: "Lead Designer", bio: "Award-winning UX designer focused on creating intuitive educational experiences." },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="gradient-bg px-6 pb-20 pt-32 md:pb-28 md:pt-44">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
          </div>
          <PageTransition>
            <div className="relative mx-auto max-w-4xl text-center">
              <h1 className="text-balance text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                About CareerPath
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/80">
                We are on a mission to help every student discover their ideal
                career path through cutting-edge assessments and AI-powered
                guidance.
              </p>
            </div>
          </PageTransition>
        </section>

        {/* Mission */}
        <section className="bg-background px-6 py-20 md:py-28">
          <div className="mx-auto max-w-7xl">
            <FadeIn className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Our Mission
              </span>
              <h2 className="mt-3 text-balance text-3xl font-bold text-foreground md:text-4xl">
                Empowering Students to Make Informed Career Decisions
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                Too many students graduate without clarity about their career
                direction. CareerPath bridges that gap by combining
                scientifically validated personality and skill assessments with
                AI-powered recommendations, giving every student the tools to
                confidently choose their future.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Values */}
        <section className="gradient-bg-subtle px-6 py-20 md:py-28">
          <div className="mx-auto max-w-7xl">
            <FadeIn className="text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Our Values
              </span>
              <h2 className="mt-3 text-balance text-3xl font-bold text-foreground md:text-4xl">
                What Drives Us
              </h2>
            </FadeIn>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, i) => (
                <ScaleIn key={value.title} delay={i * 0.1}>
                  <div className="glass-card rounded-xl p-6 text-center shadow-sm">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </ScaleIn>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="bg-background px-6 py-20 md:py-28">
          <div className="mx-auto max-w-7xl">
            <FadeIn className="text-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Our Team
              </span>
              <h2 className="mt-3 text-balance text-3xl font-bold text-foreground md:text-4xl">
                Meet the People Behind CareerPath
              </h2>
            </FadeIn>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member, i) => (
                <ScaleIn key={member.name} delay={i * 0.1}>
                  <div className="glass-card rounded-xl p-6 text-center shadow-sm">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <span className="text-xl font-bold text-primary">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <h3 className="mt-4 font-semibold text-foreground">{member.name}</h3>
                    <p className="text-sm font-medium text-primary">{member.role}</p>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {member.bio}
                    </p>
                  </div>
                </ScaleIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-background px-6 py-20 md:py-28">
          <FadeIn>
            <div className="mx-auto max-w-4xl rounded-2xl gradient-bg p-10 text-center md:p-16">
              <h2 className="text-balance text-3xl font-bold text-white md:text-4xl">
                Ready to Find Your Path?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-white/80">
                Join thousands of students who have already discovered their
                ideal career with CareerPath.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90"
                  asChild
                >
                  <Link href="/signup">Get Started Free</Link>
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
      </main>
      <Footer />
    </div>
  )
}
