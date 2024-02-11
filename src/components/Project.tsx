import React from 'react'

const Project = ({ name, link, description }: { name: string, link: string, description: string }) => {
    return (
        <div className="flex flex-col">
            <h1>{name}</h1>
            <p>{description}</p>
        </div>
    )
}

export default Project