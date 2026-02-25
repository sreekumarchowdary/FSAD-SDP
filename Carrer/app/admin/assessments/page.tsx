"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Plus,
  Pencil,
  Trash2,
  ToggleLeft,
  ToggleRight,
  X,
  GripVertical,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { PageTransition, FadeIn } from "@/components/animations"

interface Assessment {
  id: number
  name: string
  description: string
  questions: number
  active: boolean
  category: string
}

const initialAssessments: Assessment[] = [
  { id: 1, name: "Personality Assessment", description: "Discover your personality type and traits", questions: 30, active: true, category: "Personality" },
  { id: 2, name: "Technical Skills Test", description: "Evaluate your technical abilities", questions: 25, active: true, category: "Technical" },
  { id: 3, name: "Communication Skills", description: "Assess your communication strengths", questions: 20, active: false, category: "Soft Skills" },
  { id: 4, name: "Leadership Assessment", description: "Measure your leadership potential", questions: 15, active: true, category: "Soft Skills" },
  { id: 5, name: "Career Interest Inventory", description: "Explore your career interests", questions: 40, active: false, category: "Interest" },
]

export default function ManageAssessmentsPage() {
  const [assessments, setAssessments] = useState(initialAssessments)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [formName, setFormName] = useState("")
  const [formDesc, setFormDesc] = useState("")
  const [formCategory, setFormCategory] = useState("")

  const toggleActive = (id: number) => {
    setAssessments((prev) =>
      prev.map((a) => (a.id === id ? { ...a, active: !a.active } : a))
    )
  }

  const deleteAssessment = (id: number) => {
    setAssessments((prev) => prev.filter((a) => a.id !== id))
  }

  const openCreate = () => {
    setEditingId(null)
    setFormName("")
    setFormDesc("")
    setFormCategory("")
    setDialogOpen(true)
  }

  const openEdit = (a: Assessment) => {
    setEditingId(a.id)
    setFormName(a.name)
    setFormDesc(a.description)
    setFormCategory(a.category)
    setDialogOpen(true)
  }

  const handleSave = () => {
    if (editingId !== null) {
      setAssessments((prev) =>
        prev.map((a) =>
          a.id === editingId
            ? { ...a, name: formName, description: formDesc, category: formCategory }
            : a
        )
      )
    } else {
      const newId = Math.max(...assessments.map((a) => a.id)) + 1
      setAssessments((prev) => [
        ...prev,
        {
          id: newId,
          name: formName,
          description: formDesc,
          questions: 0,
          active: true,
          category: formCategory,
        },
      ])
    }
    setDialogOpen(false)
  }

  return (
    <main className="p-8">
      <PageTransition>
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Manage Assessments</h1>
            <p className="mt-1 text-muted-foreground">Create, edit, and manage your assessment tests</p>
          </div>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={openCreate}>
                <Plus className="mr-2 h-4 w-4" />
                Create Assessment
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  {editingId ? "Edit Assessment" : "Create New Assessment"}
                </DialogTitle>
              </DialogHeader>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSave()
                }}
                className="flex flex-col gap-4"
              >
                <div className="flex flex-col gap-2">
                  <Label htmlFor="aName">Assessment Name</Label>
                  <Input
                    id="aName"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="e.g. Personality Assessment"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="aDesc">Description</Label>
                  <Textarea
                    id="aDesc"
                    value={formDesc}
                    onChange={(e) => setFormDesc(e.target.value)}
                    placeholder="Brief description of the assessment"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="aCat">Category</Label>
                  <Input
                    id="aCat"
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value)}
                    placeholder="e.g. Personality, Technical"
                    required
                  />
                </div>
                <div className="flex justify-end gap-3">
                  <Button type="button" variant="outline" onClick={() => setDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">
                    {editingId ? "Save Changes" : "Create"}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="flex flex-col gap-4">
          <AnimatePresence>
            {assessments.map((a, i) => (
              <FadeIn key={a.id} delay={i * 0.05}>
                <Card>
                  <CardContent className="flex items-center justify-between p-5">
                    <div className="flex items-center gap-4">
                      <GripVertical className="h-5 w-5 text-muted-foreground/50" />
                      <div>
                        <h3 className="font-semibold text-foreground">{a.name}</h3>
                        <p className="text-sm text-muted-foreground">{a.description}</p>
                        <div className="mt-2 flex items-center gap-2">
                          <Badge variant="secondary">{a.category}</Badge>
                          <span className="text-xs text-muted-foreground">
                            {a.questions} questions
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleActive(a.id)}
                        className="text-muted-foreground hover:text-foreground"
                        aria-label={a.active ? "Deactivate" : "Activate"}
                      >
                        {a.active ? (
                          <ToggleRight className="h-6 w-6 text-primary" />
                        ) : (
                          <ToggleLeft className="h-6 w-6" />
                        )}
                      </button>
                      <Button variant="ghost" size="icon" onClick={() => openEdit(a)}>
                        <Pencil className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => deleteAssessment(a.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </AnimatePresence>
        </div>
      </PageTransition>
    </main>
  )
}
