import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ActivitiesSection } from "@/components/activities/ActivitiesSection"
import { About } from "@/components/about"
import { CoreSkillsSection } from "@/components/skills/CoreSkillsSection"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <CoreSkillsSection />
      <ActivitiesSection />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
