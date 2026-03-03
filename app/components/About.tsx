"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap, MapPin } from "lucide-react"

const timeline = [
    {
        period: "2021 – Present",
        role: "Senior Full-Stack Developer",
        company: "Freelance / Contract",
        description:
            "Leading end-to-end development of web applications for startups and established businesses. Architecting scalable solutions with React, Next.js, Node.js, and cloud infrastructure.",
    },
    {
        period: "2019 – 2021",
        role: "Full-Stack Developer",
        company: "Product Company",
        description:
            "Built and maintained multiple customer-facing SaaS products. Implemented CI/CD pipelines, reduced page load times by 40%, and mentored junior developers.",
    },
    {
        period: "2017 – 2019",
        role: "Frontend Developer",
        company: "Agency",
        description:
            "Delivered 20+ responsive web projects for diverse clients. Specialized in performance optimization and cross-browser compatibility.",
    },
]

export default function About() {
    return (
        <section id="about" className="py-24 lg:py-32">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-sm font-medium tracking-wider uppercase text-amber-500">
                        Background
                    </span>
                    <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
                        About Me
                    </h2>
                </motion.div>

                <div className="mt-12 grid lg:grid-cols-5 gap-12 lg:gap-16">
                    {/* About text */}
                    <motion.div
                        className="lg:col-span-2 space-y-5"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <p className="text-slate-400 leading-relaxed">
                            I&apos;m a developer who believes great software is born at the
                            intersection of solid engineering and thoughtful design. Over
                            the past 5+ years, I&apos;ve shipped production code across
                            fintech, e-commerce, and SaaS — always with a bias toward
                            simplicity and maintainability.
                        </p>
                        <p className="text-slate-400 leading-relaxed">
                            When I&apos;m not writing code, you can find me exploring
                            open-source projects, writing technical articles, or
                            experimenting with new frameworks. I care deeply about
                            developer experience and building tools that people actually
                            enjoy using.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-2 text-sm text-slate-500">
                            <span className="flex items-center gap-1.5">
                                <MapPin size={14} className="text-amber-500" />
                                India
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Briefcase size={14} className="text-amber-500" />
                                Open to opportunities
                            </span>
                            <span className="flex items-center gap-1.5">
                                <GraduationCap size={14} className="text-amber-500" />
                                B.Tech CS
                            </span>
                        </div>
                    </motion.div>

                    {/* Timeline */}
                    <div className="lg:col-span-3 relative">
                        {/* Vertical line */}
                        <div className="absolute left-3 top-2 bottom-2 w-px bg-slate-800" />

                        <div className="space-y-10">
                            {timeline.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    className="relative pl-10"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{
                                        duration: 0.4,
                                        delay: idx * 0.1,
                                    }}
                                >
                                    {/* Dot */}
                                    <div className="absolute left-1.5 top-1.5 w-3 h-3 rounded-full bg-amber-500/20 border-2 border-amber-500" />

                                    <span className="text-xs font-medium tracking-wider uppercase text-slate-500">
                                        {item.period}
                                    </span>
                                    <h3 className="mt-1 text-lg font-semibold text-slate-200">
                                        {item.role}
                                    </h3>
                                    <p className="text-sm text-amber-500/80">
                                        {item.company}
                                    </p>
                                    <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                                        {item.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
