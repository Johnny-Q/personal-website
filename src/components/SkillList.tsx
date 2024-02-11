import React from 'react'

const SkillList = ({ title, skills }: { title: string, skills: string[] }) => {
    return (
        <div className="flex flex-col">
            <h1>{title}</h1>
            {skills.map((skill, i) => (
                <p key={i}>
                    {skill}
                </p>
            ))}
        </div>
    )
}

export default SkillList