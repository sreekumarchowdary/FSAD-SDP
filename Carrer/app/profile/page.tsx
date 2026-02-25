"use client"

import { useState } from "react"
import Link from "next/link"
import { GraduationCap, User, LogOut, ArrowLeft, ClipboardList, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { PageTransition, FadeIn } from "@/components/animations"

const pastAssessments = [
  { name: "Personality Assessment", date: "Feb 20, 2026", score: "85%" },
  { name: "Technical Skills Test", date: "Feb 15, 2026", score: "78%" },
  { name: "Communication Skills", date: "Feb 10, 2026", score: "92%" },
]

export default function ProfilePage() {
  const [name, setName] = useState("Alex Thompson")
  const [email, setEmail] = useState("alex@example.com")

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
              <Link href="/dashboard">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Dashboard
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

      <main className="mx-auto max-w-3xl px-6 py-8">
        <PageTransition>
          <h1 className="mb-8 text-3xl font-bold text-foreground">My Profile</h1>

          <div className="flex flex-col gap-6">
            {/* User info */}
            <FadeIn>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Personal Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <User className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-foreground">{name}</p>
                      <p className="text-sm text-muted-foreground">Student</p>
                    </div>
                  </div>

                  <form className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="profileEmail">Email</Label>
                      <Input
                        id="profileEmail"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <Button type="button" className="w-fit">Save Changes</Button>
                  </form>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Change password */}
            <FadeIn delay={0.1}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Change Password</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="currentPw">Current Password</Label>
                      <Input id="currentPw" type="password" placeholder="Enter current password" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="newPw">New Password</Label>
                      <Input id="newPw" type="password" placeholder="Enter new password" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="confirmNewPw">Confirm New Password</Label>
                      <Input id="confirmNewPw" type="password" placeholder="Confirm new password" />
                    </div>
                    <Button type="button" variant="outline" className="w-fit">
                      Update Password
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Past assessments */}
            <FadeIn delay={0.2}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Past Assessments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    {pastAssessments.map((a, i) => (
                      <div key={i}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                              <ClipboardList className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-foreground">{a.name}</p>
                              <p className="flex items-center gap-1 text-xs text-muted-foreground">
                                <Calendar className="h-3 w-3" />
                                {a.date}
                              </p>
                            </div>
                          </div>
                          <span className="text-sm font-semibold text-primary">{a.score}</span>
                        </div>
                        {i < pastAssessments.length - 1 && <Separator className="mt-4" />}
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
