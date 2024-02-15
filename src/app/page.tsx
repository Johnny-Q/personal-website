import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Section from "@/components/Section";
import SkillList from "@/components/SkillList";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-[80%] max-w-screen-lg flex flex-col items-center">
      <Hero />
      <Section title="About Me" className="flex flex-col gap-4">
        <p className="font-light">My interest in technology first sparked in middle school after attending my first coding workshop. Ever since then, I have been teaching myself to code and exploring different fields in tech. From chasing passion projects and attending hackathons, I gained a lot of experience in full-stack development. Before that, I was building simple games, doing competitive programming, and dabbling in cybersecurity. Currently, I'm trying to learn more about big data and cloud computing.</p>
        <p className="font-light">Despite my interests being all over the place, my goal with tech has always been the same. I want to use the skillset I've carefully built up to positively impact everyday lives.</p>
        <p className="font-light">When I'm not coding, I'm usually fencing, bouldering, or making thai milk tea!</p>
      </Section>
      <Section title="Skills" className="flex flex-row gap-x-4 gap-y-4 align-start justify-between flex-wrap">
        <SkillList title="Programming Langauges" skills={["Python", "TypeScript", "JavaScript", "SQL", "Java", "C++", "Rust", "Golang", "HTML/CSS"]} />
        <SkillList title="Libraries/Frameworks" skills={["React", "Node.js", "Next.js", "Redux", " Express.js", " Flask", " Pandas", " SciKit-Learn", " Electron.js"]} />
        <SkillList title="Developer Tools" skills={["GCP", " AWS", " Git", " GitHub", " Docker", " Kafka", " Firebase", " Jupyter Notebooks", " Bash"]} />
      </Section>
      <Section title="Experience" className="flex flex-col gap-8">
        <Experience role="Software Developer" date="Mar. 2023 - Present" company="McMaster NEUDOSE" description="McMaster NEUDOSE is a satellite design team building a CubeSat for dosimitry of charged and neutral particals. My role on the team is to build applications that help payload development!" />
        <Experience role="Software Engineering Intern" date="May 2022 - Dec. 2022" company="Malleum" description="At Malleum, I was actively learning and applying practical cybersecurity knowledge. I also got to explore smart contracts vulnerabilities and building data pipelines here!" />
        <Experience role="Software Developer" date="Nov. 2020 - Feb. 2021" company="Aceway Auto" description="Aceway Auto is a local autoparts wholesaler. I built an early iteration of their website, allowing customers to search and filter through their catelog of 5000+ products." />
        <Experience role="Software Developer" date="Jul. 2020 - Sep. 2020" company="Oakville STARZ" description="Oakville STARZ is a volunteer organization initially brought together by their love for music. I was tasked to build a web application to help them facilitate their community events." />
        <a href="/Johnny_Qu_resume.pdf">View Full Resume</a>
      </Section>
      <Section title="Projects" className="flex flex-col gap-8">
        <Project name="Personal Website" link="" description="What you're currently looking at! Built with React." />
        <Project name="Personal Budget Tracker" link="" description="A web app built using Next.js to help manage my personal finances. Currently in development." />
      </Section>
    </main>
  );
}
