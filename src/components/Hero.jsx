import React from 'react'

export default function Hero() {
  return (
    <section className="hero shell" id="inicio">
      <div className="hero-copy reveal">
        <p className="eyebrow"><span aria-hidden="true" /> Frontend junior · UX/UI</p>
        <h1>Diseño interfaces claras y construyo productos web que resuelven tareas reales.</h1>
        <p className="hero-intro">Soy Lucía Mestre Metola, técnica en Desarrollo de Software. Trabajo entre el código y el diseño para transformar necesidades concretas en experiencias web intuitivas, responsivas y consistentes.</p>
        <div className="hero-actions">
          <a className="button primary" href="#proyectos">Explorar proyectos <span aria-hidden="true">↘</span></a>
          <a className="button secondary" href="/Lucia-Mestre-Metola-CV.pdf" download>Descargar CV</a>
        </div>
      </div>
      <aside className="hero-card reveal" aria-label="Información profesional">
        <div className="availability"><span /> Disponible para oportunidades junior</div>
        <div className="monogram" aria-hidden="true">LM</div>
        <div>
          <p className="card-label">Enfoque</p>
          <p className="card-value">Frontend + UX/UI</p>
        </div>
        <div className="card-row">
          <div><p className="card-label">Ubicación</p><p className="card-value small">San Juan, Argentina</p></div>
          <div><p className="card-label">Modalidad</p><p className="card-value small">Remota · Híbrida</p></div>
        </div>
      </aside>
      <div className="hero-index" aria-hidden="true">01</div>
    </section>
  )
}
