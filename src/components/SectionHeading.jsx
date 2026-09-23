import React from 'react'

export default function SectionHeading({ number, title, description, className = '' }) {
  return (
    <div className={`section-heading reveal ${className}`.trim()}>
      <p className="section-number">{number}</p>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}
