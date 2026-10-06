export default function SectionHeading({ number, title, description, className = '' }) {
  return (
    <div data-reveal className={`mb-13 grid translate-y-4.5 grid-cols-1 items-start gap-7.5 opacity-0 transition-all duration-650 motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none min-[901px]:grid-cols-[180px_minmax(0,1fr)_minmax(220px,360px)] min-[901px]:items-end ${className}`.trim()}>
      <p className="m-0 self-start text-[.78rem] font-extrabold uppercase tracking-[.14em] text-[#628d92]">{number}</p>
      <h2 className="m-0 font-['Fraunces'] text-[clamp(2.3rem,5vw,4.7rem)] font-bold leading-none tracking-[-.045em]">{title}</h2>
      {description && <p className="m-0 text-[#3c4863]">{description}</p>}
    </div>
  )
}
