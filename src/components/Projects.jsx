import React from 'react'
import ProjectCard from './ProjectCard.jsx'
import SectionHeading from './SectionHeading.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <section className="section projects" id="proyectos">
      <div className="shell">
        <SectionHeading
          number="02 / Proyectos"
          title="Trabajo seleccionado"
          description="Dos experiencias que muestran cómo abordo producto, interfaz e implementación."
        />
        {projects.map((project) => <ProjectCard project={project} key={project.id} />)}
      </div>
    </section>
  )
}
