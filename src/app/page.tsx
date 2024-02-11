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
      <Section title="About me">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, ipsam! At ducimus necessitatibus ipsum dolorem corrupti, debitis nulla. Laborum, ea.</p>
      </Section>
      <Section title="Skills" className="flex flex-row gap-x-4 gap-y-4 align-start justify-between flex-wrap">
        <SkillList title="Programming Langauges" skills={["Python", "TypeScript", "JavaScript", "SQL", "Java", "C++", "Rust", "Golang", "HTML/CSS"]} />
        <SkillList title="Libraries/Frameworks" skills={["React", "Node.js", "Next.js", "Redux", " Express.js", " Flask", " Pandas", " SciKit-Learn", " Electron.js"]} />
        <SkillList title="Developer Tools" skills={["GCP", " AWS", " Git", " GitHub", " Docker", " Kafka", " Firebase", " Jupyter Notebooks", " Bash"]} />
      </Section>
      <Section title="Experience" className="flex flex-col gap-y-4">
        <Experience role="Software Developer" date="Jan. 2024 - Present" company="Skan" description="placeholder" />
        <Experience role="Software Developer" date="Mar. 2023 - Aug. 2023" company="McMaster NEUDOSE" description="placeholder" />
        <Experience role="Software Engineering Intern" date="May 2022 - Dec. 2022" company="Malleum" description="placeholder" />
        <Experience role="Software Developer" date="Nov. 2020 - Feb. 2021" company="Aceway Auto" description="placeholder" />
        <Experience role="Software Developer" date="Jul. 2020 - Sep. 2020" company="Oakville STARZ" description="placeholder" />
      </Section>
      <Section title="Projects" className="flex flex-col gap-y-4">
        <Project name="Expense Tracker" link="" description="placeholder" />
        <Project name="Expense Tracker" link="" description="placeholder" />
        <Project name="Expense Tracker" link="" description="placeholder" />
      </Section>
    </main>
  );
}
