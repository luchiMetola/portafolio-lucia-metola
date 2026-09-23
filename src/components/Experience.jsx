import React from 'react'
import { experience } from '../data/projects.js'

export default function Experience() {
  return (
    <section className="section experience" id="experiencia">
      <div className="shell experience-grid">
        <div className="section-heading sticky reveal">
          <p className="section-number">03 / Experiencia</p>
          <h2>Aprender haciendo</h2>
          <p>Mi recorrido combina trabajo colaborativo, desarrollo independiente y formación técnica.</p>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item reveal" key={`${item.date}-${item.role}`}>
              <p className="timeline-date">{item.date}</p>
              <h3>{item.role}</h3>
              <p className="timeline-company">{item.organization}</p>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
