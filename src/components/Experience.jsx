import { experience } from '../data/projects.js'

export default function Experience() {
  return (
    <section className="bg-[#3d676f] py-19.5 text-white min-[681px]:py-27.5" id="experiencia">
      <div className="mx-auto grid w-[min(1180px,calc(100%-30px))] grid-cols-1 items-start gap-15 min-[681px]:w-[min(1180px,calc(100%-48px))] min-[901px]:grid-cols-[.72fr_1.28fr] min-[901px]:gap-[10vw]">
        <div data-reveal className="translate-y-4.5 opacity-0 transition-all duration-650 motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none min-[901px]:sticky min-[901px]:top-27.5">
          <p className="m-0 text-[.78rem] font-extrabold uppercase tracking-[.14em] text-[#a9d4d8]">03 / Experiencia</p>
          <h2 className="my-5 font-['Fraunces'] text-[clamp(2.3rem,5vw,4.7rem)] font-bold leading-none tracking-[-.045em]">Aprender haciendo</h2>
          <p className="max-w-107.5 text-[#b8c0d2]">Mi recorrido combina trabajo colaborativo, desarrollo independiente y formación técnica.</p>
        </div>
        <div className="border-t border-[rgba(255,255,255,.18)]">
          {experience.map((item) => (
            <article data-reveal className="relative translate-y-4.5 border-b border-[rgba(255,255,255,.18)] py-8.5 pb-9.5 pl-8.5 opacity-0 transition-all duration-650 before:absolute before:left-0 before:top-10.5 before:h-2.5 before:w-2.5 before:rounded-full before:bg-[#d8fcad] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none" key={`${item.date}-${item.role}`}>
              <p className="mb-2.5 text-[.78rem] font-bold uppercase tracking-[.08em] text-[#d8fcad]">{item.date}</p>
              <h3 className="m-0 font-['Fraunces'] text-[clamp(1.45rem,3vw,2.2rem)] font-bold leading-[1.1]">{item.role}</h3>
              <p className="mb-3.25 mt-1.75 font-bold text-[#b8c0d2]">{item.organization}</p>
              <p className="m-0 text-[#d5dae6]">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
