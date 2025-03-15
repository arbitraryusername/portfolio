import { User, Mail, FileText, Lightbulb } from "lucide-react"

interface NavigationProps {
  setCurrentSection: (section: string) => void
}

export function Navigation({ setCurrentSection }: NavigationProps) {
  const navItems = [
    { name: "Resume", icon: FileText, section: "resume" },
    { name: "Projects", icon: Lightbulb, section: "projects" },
    { name: "About", icon: User, section: "about" },
    { name: "Contact", icon: Mail, section: "contact" },
  ]

  return (
    <nav className="absolute top-0 right-0 p-4 z-20">
      <ul className="flex space-x-6">
        {navItems.map((item) => (
          <li key={item.name}>
            <button
              onClick={() => setCurrentSection(item.section)}
              className="flex items-center text-blue-200 hover:text-yellow-400 transition-colors duration-300"
            >
              <item.icon className="w-5 h-5 mr-1" />
              <span className="hidden sm:inline">{item.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

