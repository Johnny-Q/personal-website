import React from 'react'

const Section = ({ title, className, children }: { title: string, className?: string, children?: React.ReactNode }) => {
  return (
    <section className="w-full max-w-screen-md py-16">
      <h1 className="text-xl py-2">{title}</h1>
      <div className={className}>
        {children}
      </div>
    </section>
  )
}

export default Section