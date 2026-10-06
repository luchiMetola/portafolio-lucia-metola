export default function Hero() {
  return (
    <section className="relative mx-auto grid min-h-0 w-[min(1180px,calc(100%-30px))] grid-cols-1 items-center gap-11 py-11.5 min-[681px]:w-[min(1180px,calc(100%-48px))] min-[681px]:py-18.5 min-[901px]:min-h-[calc(100vh-76px)] min-[901px]:grid-cols-[minmax(0,1.5fr)_minmax(290px,.65fr)] min-[901px]:gap-[8vw] min-[901px]:pb-21.5" id="inicio">
      <div data-reveal className="translate-y-4.5 opacity-0 transition-all duration-650 motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none">
        <p className="flex items-center gap-2.5 text-[.78rem] font-extrabold uppercase tracking-[.14em]"><span className="h-2.25 w-2.25 rounded-full bg-[#3158e7] shadow-[0_0_0_6px_rgba(49,88,231,.12)]" aria-hidden="true" /> Frontend junior · UX/UI</p>
        <h1 className="my-4.5 mb-6.5 max-w-225 font-['Fraunces'] text-[clamp(2.65rem,13vw,4.4rem)] font-medium leading-[.98] tracking-[-.055em] min-[681px]:text-[clamp(3rem,6.4vw,6.35rem)]">Diseño interfaces claras y construyo productos web que resuelven tareas reales.</h1>
        <p className="m-0 max-w-180 text-[clamp(1.06rem,1.5vw,1.3rem)] text-[#3c4863]">Soy Lucía Metola, técnica en Desarrollo de Software. Trabajo entre el código y el diseño para transformar necesidades concretas en experiencias web intuitivas, responsivas y consistentes.</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a className="inline-flex items-center gap-3 rounded-full bg-[#628d92] px-5 py-3.25 font-bold text-white no-underline transition hover:-translate-y-0.5 hover:bg-[#3d676f] motion-reduce:transition-none" href="#proyectos">Explorar proyectos <span aria-hidden="true">↘</span></a>
          <a className="inline-flex items-center gap-3 rounded-full border border-[rgba(16,28,58,.16)] bg-white px-5 py-3.25 font-bold no-underline transition hover:-translate-y-0.5 motion-reduce:transition-none" href="/Lucia-Metola-CV.pdf" download>Descargar CV</a>
        </div>
      </div>
      <aside data-reveal className="relative flex min-h-97.5 translate-y-4.5 flex-col justify-between self-stretch overflow-hidden rounded-[26px] bg-[#628d92] p-6 text-white opacity-0 shadow-[0_24px_70px_rgba(16,28,58,.13)] transition-all duration-650 motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none min-[681px]:min-h-105 min-[901px]:min-h-130" aria-label="Información profesional">
        <div className="absolute -bottom-30 -right-27.5 h-75 w-75 rounded-full border border-[rgba(100,247,255,0.5)] shadow-[0_0_0_45px_rgba(100,247,255,.06),0_0_0_90px_rgba(100,247,255,.04)]" aria-hidden="true" />
        <div className="relative z-10 flex items-center gap-2.25 text-[.82rem]"><span className="h-2 w-2 rounded-full bg-[#d7ff64] shadow-[0_0_0_5px_rgba(215,255,100,.12)]" /> Disponible para oportunidades junior</div>
        <div className="relative z-10 self-center font-['Fraunces'] text-[clamp(5rem,10vw,8rem)] font-bold tracking-[-.07em] text-[#ddebe6]" aria-hidden="true">LM</div>
        <div className="relative z-10">
          <p className="mb-0.5 text-[.74rem] uppercase tracking-[.12em] text-[#e2eff1]">Enfoque</p>
          <p className="m-0 text-xl font-bold">Frontend + UX/UI</p>
        </div>
        <div className="relative z-10 grid grid-cols-2 gap-4">
          <div><p className="mb-0.5 text-[.74rem] uppercase tracking-[.12em] text-[#e2eff1]">Ubicación</p><p className="m-0 text-[.92rem] font-bold">San Juan, Argentina</p></div>
          <div><p className="mb-0.5 text-[.74rem] uppercase tracking-[.12em] text-[#e2eff1]">Modalidad</p><p className="m-0 text-[.92rem] font-bold">Remota · Híbrida</p></div>
        </div>
      </aside>
      <div className="absolute bottom-2.5 right-0 text-base font-extrabold text-[rgba(16,28,58,.13)]" aria-hidden="true">01</div>
    </section>
  )
}
