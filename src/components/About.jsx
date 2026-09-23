import React from 'react'
import { skills } from '../data/projects.js'

export default function About() {
  return (
    <section className="section about" id="sobre-mi">
      <div className="shell about-grid">
        <div className="section-heading reveal">
          <p className="section-number">04 / Perfil</p>
          <h2>Entre la lógica y la experiencia</h2>
        </div>
        <div className="about-copy reveal">
          <p className="large-copy">Me interesa entender primero el problema: quién usará el producto, qué necesita resolver y cómo puede sentirse simple desde la primera interacción.</p>
          <p>Mi objetivo es especializarme en desarrollo frontend y diseño UX/UI. Disfruto convertir requerimientos en estructuras claras, prototipos y componentes reutilizables, sin perder de vista la viabilidad técnica.</p>
          <div className="skills" aria-label="Competencias técnicas">
            {skills.map((skill) => <div key={skill.title}><h3>{skill.title}</h3><p>{skill.detail}</p></div>)}
          </div>
        </div>
      </div>
    </section>
  )
}
