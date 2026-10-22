import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Stack from '../sections/Stack'
import Skills from '../sections/Skills'
import ScrollProgress from '../components/ScrollProgress'
import Experience from '../sections/Experience'
import Projects from '../sections/Projects'
import Achievements from '../sections/Achievements'
import Education from '../sections/Education'
import Contact from '../sections/Contact'

export default function Home() {
  useEffect(() => { document.title = 'Sahir Ul Islam | MERN Stack Developer' }, [])
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-white">
        Skip to content
      </a>
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Stack />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
