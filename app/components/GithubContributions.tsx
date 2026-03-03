"use client"

import dynamic from "next/dynamic"
import { motion } from "framer-motion"

const GitHubCalendar = dynamic(
    () => import("react-github-calendar").then(mod => mod.GitHubCalendar),
    { ssr: false }
)

const theme = {
    dark: ["#1e293b", "#854d0e", "#a16207", "#ca8a04", "#f59e0b"],
}

export default function GithubContributions() {
    return (
        <section id="github" className="py-24 lg:py-32 border-t border-slate-800/40">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-sm font-medium tracking-wider uppercase text-amber-500">
                        Open Source
                    </span>
                    <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
                        GitHub Activity
                    </h2>
                    <p className="mt-3 text-slate-400 max-w-lg">
                        Consistency matters. Here&apos;s my contribution activity over the past year.
                    </p>
                </motion.div>

                <motion.div
                    className="mt-10 p-6 rounded-xl border border-slate-800/80 bg-slate-900/50 overflow-x-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <div className="flex justify-center min-w-175">
                        <GitHubCalendar
                            username="Subinkumar077"
                            blockSize={13}
                            blockMargin={4}
                            fontSize={13}
                            theme={theme}
                            colorScheme="dark"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}