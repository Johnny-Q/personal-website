import React from 'react'

const Experience = ({ company, date, role, description }: { company: string, date: string, role: string, description: string }) => {
    return (
        <div className="flex flex-col gap-1">
            <div className="w-full flex flex-col md:flex-row md:justify-between">
                <h1 className="text-lg"> {role} | {company}</h1>
                <h1 className="text-lg">{date}</h1>
            </div>
            <p className="font-light">{description}</p>
        </div>
    )
}

export default Experience