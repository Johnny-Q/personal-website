import { EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import React from 'react'

const Hero = () => {
    return (
        <section className="py-32 min-h-screen w-full flex flex-col items-start justify-around gap-4">
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl">Hello! My name is</h1>
                <h1 className="text-6xl">Johnny Qu</h1>
            </div>
            <h1 className="max-w-xl text-4xl font-extralight">
                I'm a 3rd year software engineering student at McMaster University. I specialize in full-stack development.
            </h1>
            <div className="flex flex-col gap-2">
                <h2 className="text-xl font-light">I'm looking for summer internships!</h2>
                <div className="flex flex-row gap-2">
                    <a href="https://linkedin.com/in/johnny-qu">
                        <LinkedInLogoIcon height="48" width="48" />
                    </a>
                    <a href="https://github.com/johnny-q">
                        <GitHubLogoIcon height="48" width="48" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero