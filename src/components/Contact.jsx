import React from 'react'

export default function Contact() {
  return (
    <>
      <section className="contact" id="contacto">
        <div className="shell contact-inner reveal">
          <p className="section-number">05 / Contacto</p>
          <h2>¿Construimos algo claro, útil y bien pensado?</h2>
          <p>Estoy abierta a oportunidades junior en desarrollo frontend y UX/UI.</p>
          <a className="contact-email" href="mailto:luciametola@gmail.com">luciametola@gmail.com <span aria-hidden="true">↗</span></a>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/lucia-metola-b0aa50273" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/luchiMetola" target="_blank" rel="noreferrer">GitHub</a>
            <a href="/Lucia-Mestre-Metola-CV.pdf" download>Descargar CV</a>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="shell"><p>Lucía Mestre Metola · 2026</p><a href="#inicio">Volver arriba ↑</a></div>
      </footer>
    </>
  )
}
