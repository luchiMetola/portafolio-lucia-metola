import React, { useEffect, useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 8)
    updateHeader()
    window.addEventListener('scroll', updateHeader, { passive: true })
    return () => window.removeEventListener('scroll', updateHeader)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <nav className="nav shell" aria-label="Navegación principal">
        <a className="brand" href="#inicio" aria-label="Ir al inicio" onClick={closeMenu}>LMM<span>.</span></a>
        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="menu"
          onClick={() => setMenuOpen((current) => !current)}
        >
          Menú
        </button>
        <div className={`nav-links${menuOpen ? ' open' : ''}`} id="menu">
          <a href="#proyectos" onClick={closeMenu}>Proyectos</a>
          <a href="#experiencia" onClick={closeMenu}>Experiencia</a>
          <a href="#sobre-mi" onClick={closeMenu}>Sobre mí</a>
          <a className="nav-contact" href="#contacto" onClick={closeMenu}>Contacto</a>
        </div>
      </nav>
    </header>
  )
}
