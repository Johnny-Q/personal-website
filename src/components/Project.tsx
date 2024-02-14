import React from 'react'

const Project = ({ name, link, description }: { name: string, link: string, description: string }) => {
    return (
        <div className="flex flex-col gap-1">
            <h1 className="text-lg">{name}</h1>
            <p className="font-light">{description}</p>
        </div>
    )
}

export default Project