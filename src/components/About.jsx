import { skills } from '../data/projects.js'

export default function About() {
  return (
    <section className="py-19.5 min-[681px]:py-27.5" id="sobre-mi">
      <div className="mx-auto grid w-[min(1180px,calc(100%-30px))] grid-cols-1 gap-15 min-[681px]:w-[min(1180px,calc(100%-48px))] min-[901px]:grid-cols-[.7fr_1.3fr] min-[901px]:gap-[10vw]">
        <div data-reveal className="translate-y-4.5 opacity-0 transition-all duration-650 motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
          <p className="m-0 text-[.78rem] font-extrabold uppercase tracking-[.14em] text-[#628d92]">04 / Perfil</p>
          <h2 className="mt-5 font-['Fraunces'] text-[clamp(2.3rem,5vw,4.7rem)] font-bold leading-none tracking-[-.045em]">Entre la lógica y la experiencia</h2>
        </div>
        <div data-reveal className="translate-y-4.5 opacity-0 transition-all duration-650 motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
          <p className="m-0 font-['Fraunces'] text-[clamp(1.8rem,3.5vw,3.3rem)] font-semibold leading-[1.18] tracking-[-.035em]">Me interesa entender primero el problema: quién usará el producto, qué necesita resolver y cómo puede sentirse simple desde la primera interacción.</p>
          <p className="max-w-180 text-[1.08rem] text-[#3c4863]">Mi objetivo es especializarme en desarrollo frontend y diseño UX/UI. Disfruto convertir requerimientos en estructuras claras, prototipos y componentes reutilizables, sin perder de vista la viabilidad técnica.</p>
          <div className="mt-13 grid grid-cols-1 border-t border-[rgba(16,28,58,.16)] min-[681px]:grid-cols-2" aria-label="Competencias técnicas">
            {skills.map((skill, index) => (
              <div className={`border-b border-[rgba(16,28,58,.16)] py-6 min-[681px]:px-5.5 ${index % 2 === 0 ? 'min-[681px]:border-r min-[681px]:pl-0' : ''}`} key={skill.title}>
                <h3 className="mb-1.75 text-[.84rem] font-extrabold uppercase tracking-[.08em]">{skill.title}</h3>
                <p className="m-0 text-[#3c4863]">{skill.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
