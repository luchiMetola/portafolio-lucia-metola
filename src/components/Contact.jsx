export default function Contact() {
  return (
    <>
      <section className="bg-[#cbdfe0] py-19 min-[681px]:py-25" id="contacto">
        <div data-reveal className="mx-auto max-w-250 translate-y-4.5 px-3.75 text-center opacity-0 transition-all duration-650 motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none min-[681px]:px-6">
          <p className="m-0 text-[.78rem] font-extrabold uppercase tracking-[.14em]">05 / Contacto</p>
          <h2 className="mx-auto mb-4.5 mt-5 max-w-225 font-['Fraunces'] text-[clamp(2.8rem,7vw,6.4rem)] font-bold leading-[.98] tracking-[-.055em]">¿Construimos algo claro, útil y bien pensado?</h2>
          <p className="text-[1.12rem]">Estoy abierta a oportunidades junior en desarrollo frontend y UX/UI.</p>
          <a className="mt-5.5 inline-flex gap-3 wrap-break-word font-['Fraunces'] text-[clamp(1.2rem,3vw,2rem)] font-bold underline underline-offset-8" href="mailto:luciametola@gmail.com">luciametola@gmail.com <span aria-hidden="true">↗</span></a>
          <div className="mt-9.5 flex flex-wrap justify-center gap-3">
            <a className="rounded-full border border-[#3d676f] px-4 py-2.25 font-bold no-underline hover:bg-[#3d676f] hover:text-white" href="https://www.linkedin.com/in/lucia-metola-b0aa50273" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="rounded-full border border-[#3d676f] px-4 py-2.25 font-bold no-underline hover:bg-[#3d676f] hover:text-white" href="https://github.com/luchiMetola" target="_blank" rel="noreferrer">GitHub</a>
            <a className="rounded-full border border-[#3d676f] px-4 py-2.25 font-bold no-underline hover:bg-[#3d676f] hover:text-white" href="/Lucia-Mestre-Metola-CV.pdf" download>Descargar CV</a>
          </div>
        </div>
      </section>
      <footer className="bg-[#3d676f] text-white">
        <div className="mx-auto flex min-h-20.5 w-[min(1180px,calc(100%-30px))] flex-col items-start justify-between gap-5 py-6 min-[681px]:w-[min(1180px,calc(100%-48px))] min-[681px]:flex-row min-[681px]:items-center min-[681px]:py-0"><p className="m-0">Lucía Mestre Metola · 2026</p><a className="font-bold text-[#d8fcad] underline-offset-[5px]" href="#inicio">Volver arriba ↑</a></div>
      </footer>
    </>
  )
}
