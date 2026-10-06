function ProjectVisual({ project, className = '' }) {
  // El acercamiento compensa la diferencia visual entre ambas capturas panorámicas.
  const imageScaleClass = project.id === 'dcf' ? 'scale-[1.12]' : 'scale-[.98]'

  return (
    <div className={`relative min-h-75 overflow-hidden bg-[#dce5f5] min-[681px]:min-h-100 min-[901px]:min-h-125 ${className}`.trim()}>
      <img
        aria-hidden="true"
        className="absolute inset-0 h-full w-full scale-110 object-cover opacity-25 blur-2xl"
        src={project.image}
        alt=""
      />
      <div className="absolute inset-0 bg-white/30" aria-hidden="true" />
      <img
        className={`relative z-10 h-full w-full object-contain ${imageScaleClass}`}
        src={project.image}
        alt={project.imageAlt}
      />
      <span className="absolute right-5 top-5 z-20 rounded-full bg-white/90 px-3 py-1.75 text-xs font-bold">
        {project.year}
      </span>
    </div>
  )
}

function ProjectCopy({ project, className = '' }) {
  return (
    <div className={`flex flex-col justify-center px-5.5 pb-8.5 pt-7.5 min-[681px]:p-[clamp(30px,5vw,64px)] ${className}`.trim()}>
      <div className="flex flex-col justify-between gap-0.75 text-xs font-extrabold uppercase tracking-[.09em] text-[#628d92] min-[681px]:flex-row min-[681px]:gap-5">
        <span>{project.number}</span>
        <span>{project.category}</span>
      </div>
      <h3 className="mb-3.5 mt-7 font-['Fraunces'] text-[clamp(2.7rem,5vw,5rem)] font-bold leading-none tracking-tighter">{project.title}</h3>
      <p className="m-0 text-[1.18rem] text-[#3c4863]">{project.summary}</p>
      <div className="mt-8.5 grid grid-cols-1 gap-6 border-t border-[rgba(16,28,58,.16)] pt-7 min-[681px]:grid-cols-2">
        <div>
          <h4 className="mb-1.25 text-[.76rem] font-extrabold uppercase tracking-widest">Mi aporte</h4>
          <p className="m-0 text-[.92rem] text-[#3c4863]">{project.contribution}</p>
        </div>
        <div>
          <h4 className="mb-1.25 text-[.76rem] font-extrabold uppercase tracking-widest">{project.processTitle}</h4>
          <p className="m-0 text-[.92rem] text-[#3c4863]">{project.process}</p>
        </div>
      </div>
      <ul className="m-0 mt-7.5 flex list-none flex-wrap gap-2 p-0" aria-label={`Tecnologías de ${project.title}`}>
        {project.technologies.map((technology) => (
          <li
            className="rounded-full border border-[rgba(16,28,58,.16)] bg-white px-2.75 py-1.5 text-[.78rem] font-bold"
            key={technology}
          >
            {technology}
          </li>
        ))}
      </ul>
      {(project.website || project.github) && (
        <div className="mt-7.5 flex gap-6">
          {project.website && (
            <a className="font-extrabold underline decoration-1 underline-offset-[5px] hover:text-[#628d92]" href={project.website} target="_blank" rel="noreferrer">
              Ver sitio <span aria-hidden="true">↗</span>
            </a>
          )}
          {project.github && (
            <a className="font-extrabold underline decoration-1 underline-offset-[5px] hover:text-[#628d92]" href={project.github} target="_blank" rel="noreferrer">
              Ver GitHub <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      )}
    </div>
  )
}

export default function ProjectCard({ project }) {
  const alternate = project.variant === 'alternate'
  const visualOrderClass = alternate ? 'order-1 min-[901px]:order-2' : ''
  const copyOrderClass = alternate ? 'order-2 min-[901px]:order-1' : ''

  return (
    <article data-reveal className={`grid min-h-150 translate-y-4.5 grid-cols-1 overflow-hidden rounded-[20px] border border-[rgba(16,28,58,.16)] bg-[#f7f8f4] opacity-0 transition-all duration-650 motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none min-[681px]:rounded-[28px] ${alternate ? 'min-[901px]:grid-cols-[.88fr_1.12fr]' : 'min-[901px]:grid-cols-[1.12fr_.88fr]'}`}>
      <ProjectVisual project={project} className={visualOrderClass} />
      <ProjectCopy project={project} className={copyOrderClass} />
    </article>
  )
}
