import { useEffect, useState } from 'react'

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
    <header className={`sticky top-0 z-30 border-b bg-[rgba(247,248,244,.88)] backdrop-blur-[18px] transition-colors ${scrolled ? 'border-[rgba(16,28,58,.16)]' : 'border-transparent'}`}>
      <nav className="mx-auto flex min-h-17 w-[min(1180px,calc(100%-30px))] items-center justify-between gap-7 min-[681px]:min-h-19 min-[681px]:w-[min(1180px,calc(100%-48px))]" aria-label="Navegación principal">
        <a className="text-xl font-medium font-['FuenteFontesk'] tracking-[-.04em] no-underline" href="#inicio" aria-label="Ir al inicio" onClick={closeMenu}>LM<span className="text-[#628d92]">.</span></a>
        <button
          className="rounded-full border border-[#101c3a] bg-transparent px-3.5 py-2 font-bold min-[681px]:hidden"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="menu"
          onClick={() => setMenuOpen((current) => !current)}
        >
          Menú
        </button>
        <div className={`${menuOpen ? 'flex' : 'hidden'} absolute left-3.75 right-3.75 top-[calc(100%+1px)] flex-col rounded-[18px] border border-[rgba(16,28,58,.16)] bg-white p-3 shadow-[0_24px_70px_rgba(16,28,58,.13)] min-[681px]:static min-[681px]:flex min-[681px]:flex-row min-[681px]:items-center min-[681px]:gap-7.5 min-[681px]:border-0 min-[681px]:bg-transparent min-[681px]:p-0 min-[681px]:shadow-none`} id="menu">
          <a className="px-3 py-2.75 text-[.92rem] font-semibold no-underline hover:text-[#628d92] min-[681px]:p-0" href="#proyectos" onClick={closeMenu}>Proyectos</a>
          <a className="px-3 py-2.75 text-[.92rem] font-semibold no-underline hover:text-[#628d92] min-[681px]:p-0" href="#experiencia" onClick={closeMenu}>Experiencia</a>
          <a className="px-3 py-2.75 text-[.92rem] font-semibold no-underline hover:text-[#628d92] min-[681px]:p-0" href="#sobre-mi" onClick={closeMenu}>Sobre mí</a>
          <a className="px-3 py-2.75 text-[.92rem] font-semibold no-underline hover:text-[#628d92] min-[681px]:rounded-full min-[681px]:border min-[681px]:border-[#101c3a] min-[681px]:px-4 min-[681px]:py-2" href="#contacto" onClick={closeMenu}>Contacto</a>
        </div>
      </nav>
    </header>
  )
}
