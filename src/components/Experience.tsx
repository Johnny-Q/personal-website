import React from 'react'

const Experience = ({ company, date, role, description }: { company: string, date: string, role: string, description: string }) => {
    return (
        <div className="flex flex-col">
            <div className="w-full flex flex-col md:flex-row md:justify-between">
                <h1> {role} | {company}</h1>
                <h1>{date}</h1>
            </div>
            <p>{description}</p>
        </div>
    )
}

export default Experience