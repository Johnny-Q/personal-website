import React from 'react'

const SkillList = ({ title, skills }: { title: string, skills: string[] }) => {
    return (
        <div className="flex flex-col">
            <h1 className='text-lg'>{title}</h1>
            {skills.map((skill, i) => (
                <p key={i} className="font-light">
                    {skill}
                </p>
            ))}
        </div>
    )
}

export default SkillList