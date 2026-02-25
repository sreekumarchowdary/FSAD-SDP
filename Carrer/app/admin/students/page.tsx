"use client"

import { useState } from "react"
import { Search, Eye, Download, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"
import { PageTransition, FadeIn } from "@/components/animations"

const students = [
  { id: 1, name: "Alex Thompson", email: "alex@example.com", tests: 3, avgScore: 82, lastTest: "Feb 20, 2026", status: "Active" },
  { id: 2, name: "Sarah Chen", email: "sarah@example.com", tests: 5, avgScore: 91, lastTest: "Feb 19, 2026", status: "Active" },
  { id: 3, name: "Marcus Johnson", email: "marcus@example.com", tests: 2, avgScore: 75, lastTest: "Feb 18, 2026", status: "Active" },
  { id: 4, name: "Priya Patel", email: "priya@example.com", tests: 4, avgScore: 88, lastTest: "Feb 17, 2026", status: "Active" },
  { id: 5, name: "James Wilson", email: "james@example.com", tests: 1, avgScore: 65, lastTest: "Feb 15, 2026", status: "Inactive" },
  { id: 6, name: "Emily Davis", email: "emily@example.com", tests: 3, avgScore: 79, lastTest: "Feb 14, 2026", status: "Active" },
  { id: 7, name: "Ryan Kim", email: "ryan@example.com", tests: 4, avgScore: 85, lastTest: "Feb 12, 2026", status: "Active" },
  { id: 8, name: "Lisa Wang", email: "lisa@example.com", tests: 2, avgScore: 72, lastTest: "Feb 10, 2026", status: "Inactive" },
]

const studentDetails = {
  personality: "INTJ - The Architect",
  skills: [
    { name: "Analytical Thinking", score: 85 },
    { name: "Problem Solving", score: 90 },
    { name: "Communication", score: 72 },
    { name: "Creativity", score: 68 },
    { name: "Leadership", score: 55 },
  ],
  topCareers: ["Data Scientist", "UX Designer", "Product Manager"],
}

export default function StudentResultsPage() {
  const [search, setSearch] = useState("")
  const [selectedStudent, setSelectedStudent] = useState<(typeof students)[number] | null>(null)

  const filtered = students.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.email.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main className="p-8">
      <PageTransition>
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Student Results</h1>
            <p className="mt-1 text-muted-foreground">View and manage student assessment results</p>
          </div>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export to CSV
          </Button>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search students..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Table */}
        <FadeIn>
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Student</TableHead>
                    <TableHead>Tests Taken</TableHead>
                    <TableHead>Avg. Score</TableHead>
                    <TableHead>Last Test</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filtered.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium text-foreground">{student.name}</p>
                          <p className="text-xs text-muted-foreground">{student.email}</p>
                        </div>
                      </TableCell>
                      <TableCell>{student.tests}</TableCell>
                      <TableCell>
                        <span
                          className={`font-medium ${
                            student.avgScore >= 80
                              ? "text-chart-2"
                              : student.avgScore >= 60
                              ? "text-chart-4"
                              : "text-destructive"
                          }`}
                        >
                          {student.avgScore}%
                        </span>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {student.lastTest}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={student.status === "Active" ? "default" : "secondary"}
                        >
                          {student.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setSelectedStudent(student)}
                        >
                          <Eye className="mr-1 h-4 w-4" />
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </FadeIn>

        {filtered.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-lg text-muted-foreground">No students found.</p>
          </div>
        )}

        {/* Student detail dialog */}
        <Dialog
          open={!!selectedStudent}
          onOpenChange={(open) => !open && setSelectedStudent(null)}
        >
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>{selectedStudent?.name} - Results</DialogTitle>
            </DialogHeader>
            {selectedStudent && (
              <div className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-muted p-3 text-center">
                    <p className="text-sm text-muted-foreground">Tests Taken</p>
                    <p className="text-xl font-bold text-foreground">{selectedStudent.tests}</p>
                  </div>
                  <div className="rounded-lg bg-muted p-3 text-center">
                    <p className="text-sm text-muted-foreground">Avg. Score</p>
                    <p className="text-xl font-bold text-primary">{selectedStudent.avgScore}%</p>
                  </div>
                </div>

                <div>
                  <p className="mb-1 text-sm font-medium text-foreground">Personality Type</p>
                  <p className="text-sm text-muted-foreground">{studentDetails.personality}</p>
                </div>

                <div>
                  <p className="mb-3 text-sm font-medium text-foreground">Skills Breakdown</p>
                  <div className="flex flex-col gap-3">
                    {studentDetails.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="mb-1 flex items-center justify-between text-sm">
                          <span className="text-foreground">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.score}%</span>
                        </div>
                        <Progress value={skill.score} className="h-2" />
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-2 text-sm font-medium text-foreground">Top Career Matches</p>
                  <div className="flex flex-wrap gap-2">
                    {studentDetails.topCareers.map((career) => (
                      <Badge key={career} variant="secondary">
                        {career}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </PageTransition>
    </main>
  )
}
