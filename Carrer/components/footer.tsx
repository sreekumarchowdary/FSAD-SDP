import Link from "next/link"
import { GraduationCap } from "lucide-react"

const footerLinks = {
  Platform: [
    { label: "Assessments", href: "/assessment" },
    { label: "Career Explorer", href: "/careers" },
    { label: "Results", href: "/results" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
  Resources: [
    { label: "Blog", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Support", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <GraduationCap className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">CareerPath</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Helping students discover their ideal career path through
              personality assessments and skill evaluations.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-4 text-sm font-semibold text-foreground">{title}</h3>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            2026 CareerPath. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
