import { About } from './components/About'
import { Contact } from './components/Contact'
import { EducationList } from './components/EducationList'
import { ExperienceList } from './components/ExperienceList'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-accent-ink"
      >
        Skip to content
      </a>

      <Nav />

      <main id="main">
        <Hero />
        <About />
        <ExperienceList />
        <Skills />
        {/* <Projects /> */}
        <EducationList />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
