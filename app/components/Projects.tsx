"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"

interface Project {
    title: string
    description: string
    tags: string[]
    github?: string
    live?: string
    featured?: boolean
}

const projects: Project[] = [
    {
        title: "E-Commerce Platform",
        description:
            "Full-stack e-commerce solution with real-time inventory management, Stripe payments, and admin dashboard. Built to handle 10k+ concurrent users.",
        tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
        github: "https://github.com/Subinkumar077",
        live: "#",
        featured: true,
    },
    {
        title: "Task Management App",
        description:
            "Collaborative project management tool with real-time updates, drag-and-drop kanban boards, and team analytics. Reduced team onboarding time by 60%.",
        tags: ["React", "Node.js", "Socket.io", "MongoDB", "Redis"],
        github: "https://github.com/Subinkumar077",
        live: "#",
        featured: true,
    },
    {
        title: "AI Content Generator",
        description:
            "SaaS platform leveraging OpenAI APIs for automated content creation with custom fine-tuning, tone control, and multi-language support.",
        tags: ["Next.js", "Python", "FastAPI", "OpenAI", "Tailwind"],
        github: "https://github.com/Subinkumar077",
        featured: true,
    },
    {
        title: "DevOps Dashboard",
        description:
            "Monitoring dashboard aggregating CI/CD pipelines, server health, and deployment logs with real-time alerts and historical analytics.",
        tags: ["React", "Go", "Docker", "Grafana", "WebSocket"],
        github: "https://github.com/Subinkumar077",
    },
    {
        title: "CLI Toolkit",
        description:
            "Developer productivity CLI with scaffolding, code generation, and automated testing workflows. 500+ npm weekly downloads.",
        tags: ["Node.js", "TypeScript", "Commander.js"],
        github: "https://github.com/Subinkumar077",
    },
    {
        title: "Portfolio & Blog",
        description:
            "This website — built with Next.js 16, Tailwind CSS v4, and Framer Motion. Markdown-based blog with syntax highlighting and RSS feed.",
        tags: ["Next.js", "Tailwind CSS", "MDX", "Framer Motion"],
        github: "https://github.com/Subinkumar077",
        live: "#",
    },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
    return (
        <motion.article
            className={`group relative rounded-xl border border-slate-800/80 bg-slate-900/50 p-6 transition-all duration-300 hover:border-slate-700/80 hover:bg-slate-900/80 ${project.featured ? "lg:col-span-1" : ""
                }`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
        >
            {/* Featured badge */}
            {project.featured && (
                <div className="absolute -top-2.5 left-5 px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-full">
                    Featured
                </div>
            )}

            <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-slate-200 group-hover:text-amber-400 transition-colors duration-200">
                    {project.title}
                </h3>
                <div className="flex items-center gap-2 shrink-0">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 text-slate-500 hover:text-slate-300 transition-colors"
                            aria-label="View source code"
                        >
                            <Github size={16} />
                        </a>
                    )}
                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 text-slate-500 hover:text-slate-300 transition-colors"
                            aria-label="View live demo"
                        >
                            <ExternalLink size={16} />
                        </a>
                    )}
                </div>
            </div>

            <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                    <span
                        key={tag}
                        className="px-2 py-0.5 text-[11px] font-medium text-slate-400 bg-slate-800/80 rounded-md"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </motion.article>
    )
}

export default function Projects() {
    return (
        <section id="projects" className="py-24 lg:py-32">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="flex items-end justify-between gap-4"
                >
                    <div>
                        <span className="text-sm font-medium tracking-wider uppercase text-amber-500">
                            Portfolio
                        </span>
                        <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
                            Selected Projects
                        </h2>
                        <p className="mt-3 text-slate-400 max-w-lg">
                            A curated selection of projects I&apos;ve worked on. Each one
                            presented a unique challenge and helped me grow as an engineer.
                        </p>
                    </div>
                    <a
                        href="https://github.com/Subinkumar077"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:inline-flex items-center gap-1 text-sm text-slate-400 hover:text-amber-400 transition-colors shrink-0"
                    >
                        View all on GitHub
                        <ArrowUpRight size={14} />
                    </a>
                </motion.div>

                <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {projects.map((project, idx) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            index={idx}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
