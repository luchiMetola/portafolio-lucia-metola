import React from 'react'

function ProjectVisual({ project }) {
  const isMetola = project.variant === 'featured'
  return (
    <div className={`project-visual ${isMetola ? 'metola-visual' : 'dcf-visual'}`}>
      <img className={isMetola ? 'visual-background' : ''} src={project.image} alt={project.imageAlt} />
      {isMetola && <div className="visual-overlay" />}
      {project.logo && <img className="metola-logo" src={project.logo} alt="Metola Bikes" />}
      <span className="project-year">{project.year}</span>
    </div>
  )
}

function ProjectCopy({ project }) {
  return (
    <div className="project-copy">
      <div className="project-topline"><span>{project.number}</span><span>{project.category}</span></div>
      <h3>{project.title}</h3>
      <p className="project-summary">{project.summary}</p>
      <div className="project-details">
        <div><h4>Mi aporte</h4><p>{project.contribution}</p></div>
        <div><h4>{project.processTitle}</h4><p>{project.process}</p></div>
      </div>
      <ul className="tag-list" aria-label={`Tecnologías de ${project.title}`}>
        {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
      </ul>
      {(project.website || project.github) && (
        <div className="project-links">
          {project.website && <a href={project.website} target="_blank" rel="noreferrer">Ver sitio <span aria-hidden="true">↗</span></a>}
          {project.github && <a href={project.github} target="_blank" rel="noreferrer">Ver GitHub <span aria-hidden="true">↗</span></a>}
        </div>
      )}
    </div>
  )
}

export default function ProjectCard({ project }) {
  const alternate = project.variant === 'alternate'
  return (
    <article className={`project${alternate ? ' project-alt' : ' project-featured'} reveal`}>
      {alternate ? <><ProjectCopy project={project} /><ProjectVisual project={project} /></> : <><ProjectVisual project={project} /><ProjectCopy project={project} /></>}
    </article>
  )
}
