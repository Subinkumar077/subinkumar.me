"use client"

import { motion } from "framer-motion"

/* ─── Skill data with CDN SVG logos ─── */
interface Skill {
    name: string
    logo: string
}

const row1: Skill[] = [
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Redux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
]

const row2: Skill[] = [
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
    { name: "Go", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" },
    { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
]

const row3: Skill[] = [
    { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Sass", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
    { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "Prisma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" },
    { name: "Jest", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" },
    { name: "Vercel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" },
    { name: "Bash", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
    { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "npm", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
]

/* ─── Single skill pill ─── */
function SkillPill({ skill }: { skill: Skill }) {
    return (
        <div className="flex items-center gap-3 px-5 py-3 rounded-xl border border-slate-800/80 bg-slate-900/60 hover:border-amber-500/40 hover:bg-slate-800/80 transition-all duration-300 shrink-0 group cursor-default select-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={skill.logo}
                alt={skill.name}
                width={28}
                height={28}
                className="w-7 h-7 object-contain group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
            />
            <span className="text-sm font-medium text-slate-300 whitespace-nowrap group-hover:text-amber-400 transition-colors duration-300">
                {skill.name}
            </span>
        </div>
    )
}

/* ─── Infinite marquee row ─── */
function MarqueeRow({
    skills,
    direction = "left",
    speed = 30,
}: {
    skills: Skill[]
    direction?: "left" | "right"
    speed?: number
}) {
    // Duplicate items 4x to guarantee seamless loop
    const items = [...skills, ...skills, ...skills, ...skills]

    return (
        <div className="group/marquee relative overflow-hidden w-full">
            {/* Fade edges — match surface bg for seamless blend */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 z-10 bg-linear-to-r from-surface via-surface/80 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 z-10 bg-linear-to-l from-surface via-surface/80 to-transparent" />

            <div
                className="flex gap-4 w-max group-hover/marquee:[animation-play-state:paused]"
                style={{
                    animationName: direction === "left" ? "marquee-left" : "marquee-right",
                    animationDuration: `${speed}s`,
                    animationTimingFunction: "linear",
                    animationIterationCount: "infinite",
                }}
            >
                {items.map((skill, i) => (
                    <SkillPill key={`${skill.name}-${i}`} skill={skill} />
                ))}
            </div>
        </div>
    )
}

/* ─── Main section ─── */
export default function Skills() {
    return (
        <section id="skills" className="py-24 lg:py-32 border-t border-slate-800/40 overflow-hidden">
            <div className="section-container mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-sm font-medium tracking-wider uppercase text-amber-500">
                        Expertise
                    </span>
                    <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
                        Tech Stack
                    </h2>
                    <p className="mt-3 text-slate-400 max-w-lg">
                        Technologies and tools I use daily to bring ideas to life.
                        Always exploring, always learning.
                    </p>
                </motion.div>
            </div>

            {/* Three marquee rows — opposing directions for parallax feel */}
            <div className="section-container space-y-5">
                <MarqueeRow skills={row1} direction="left" speed={70} />
                <MarqueeRow skills={row2} direction="right" speed={80} />
                <MarqueeRow skills={row3} direction="left" speed={65} />
            </div>
        </section>
    )
}
