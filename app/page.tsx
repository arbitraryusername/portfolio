"use client"

import { useState } from "react"
import { Navigation } from "./components/Navigation"
import { FireflyBackground } from "./components/FireflyBackground"
import { MoonButton } from "./components/MoonButton"
import { Home } from "./components/Home"
import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Resume } from "./components/Resume"
import { Projects } from "./components/Projects"

export default function Page() {
  const [currentSection, setCurrentSection] = useState("home")

  const renderSection = () => {
    switch (currentSection) {
      case "home":
        return <Home />
      case "about":
        return <About />
      case "contact":
        return <Contact />
      case "resume":
        return <Resume />
      case "projects":
        return <Projects />
      default:
        return <Home />
    }
  }

  return (
    <main className="min-h-screen h-screen flex flex-col p-4 relative overflow-hidden bg-gradient-to-b from-gray-950 via-blue-950 to-indigo-950">
      <MoonButton setCurrentSection={setCurrentSection} />
      <Navigation setCurrentSection={setCurrentSection} />
      <FireflyBackground />
      <div className="flex-grow flex flex-col">
        <div className="z-10 w-full max-w-4xl px-4 mx-auto h-full overflow-y-auto">{renderSection()}</div>
      </div>
    </main>
  )
}

