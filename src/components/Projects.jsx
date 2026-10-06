import ProjectCard from './ProjectCard.jsx'
import SectionHeading from './SectionHeading.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <section className="border-y border-[rgba(16,28,58,.16)] bg-white py-19.5 min-[681px]:py-27.5" id="proyectos">
      <div className="mx-auto w-[min(1180px,calc(100%-30px))] min-[681px]:w-[min(1180px,calc(100%-48px))]">
        <SectionHeading
          number="02 / Proyectos"
          title="Trabajo seleccionado"
          description="Dos experiencias que muestran cómo abordo producto, interfaz e implementación."
        />
        <div className="space-y-7.5">{projects.map((project) => <ProjectCard project={project} key={project.id} />)}</div>
      </div>
    </section>
  )
}
