import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-[18px]')
          entry.target.classList.add('opacity-100', 'translate-y-0')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })

    document.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-[#f7f8f4] font-['Bricolage_Grotesque'] text-base leading-[1.65] text-[#101c3a] antialiased">
      <a className="fixed left-2 top-2 z-100 translate-y-[-150%] rounded-lg bg-[#101c3a] px-3.5 py-2.5 text-white focus:translate-y-0" href="#contenido">Saltar al contenido</a>
      <Header />
      <main id="contenido">
        <Hero />
        <Projects />
        <Experience />
        <About />
        <Contact />
      </main>
    </div>
  )
}
