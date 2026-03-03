"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowDown, Download, Mail } from "lucide-react"

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-16">
            {/* Ambient background glow */}
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-blue-500/8 rounded-full blur-[100px] pointer-events-none" />

            <div className="section-container relative z-10 w-full">
                <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
                    {/* Text content — takes 3 of 5 columns */}
                    <div className="lg:col-span-3 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="mt-4 inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-full">
                                Available for work
                            </span>
                        </motion.div>

                        <motion.h1
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            Hi, I&apos;m{" "}
                            <span className="gradient-text">Subin Kumar</span>
                            <br />
                            <span className="text-slate-300">
                                I build things for the web.
                            </span>
                        </motion.h1>

                        <motion.p
                            className="max-w-xl text-lg text-slate-400 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Full-stack developer with 5+ years of experience crafting
                            performant, scalable web applications. I obsess over clean
                            architecture, pixel-perfect UIs, and developer experience.
                        </motion.p>

                        <motion.div
                            className="flex flex-wrap gap-3 pt-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-slate-900 bg-amber-500 hover:bg-amber-400 rounded-lg transition-colors duration-200"
                            >
                                <Mail size={16} />
                                Get in touch
                            </a>
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-slate-300 border border-slate-700 hover:border-slate-500 hover:text-slate-100 rounded-lg transition-all duration-200"
                            >
                                <Download size={16} />
                                Resume
                            </a>
                        </motion.div>

                        {/* Quick stats */}
                        <motion.div
                            className="flex gap-8 pt-6 border-t border-slate-800/60"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            {[
                                { value: "5+", label: "Years Exp." },
                                { value: "30+", label: "Projects" },
                                { value: "15+", label: "Happy Clients" },
                            ].map((stat) => (
                                <div key={stat.label}>
                                    <div className="text-2xl font-bold text-slate-100">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs text-slate-500 mt-0.5">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Profile image — takes 2 of 5 columns */}
                    <motion.div
                        className="lg:col-span-2 flex justify-center lg:justify-end"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="relative">
                            <div className="w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[28rem] rounded-2xl overflow-hidden border-2 border-slate-800 shadow-2xl shadow-slate-950/50">
                                <Image
                                    src="/images/image.png"
                                    width={1024}
                                    height={1536}
                                    alt="Subin Kumar"
                                    className="object-cover object-top w-full h-full"
                                    priority
                                />
                            </div>
                            {/* Decorative dots */}
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 grid grid-cols-4 gap-1.5 opacity-20">
                                {Array.from({ length: 16 }).map((_, i) => (
                                    <div
                                        key={i}
                                        className="w-1.5 h-1.5 rounded-full bg-amber-500"
                                    />
                                ))}
                            </div>

                        </div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    className="hidden lg:flex justify-center pt-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                >
                    <a
                        href="#about"
                        className="flex flex-col items-center gap-2 text-slate-500 hover:text-slate-400 transition-colors"
                    >
                        <span className="text-xs tracking-wider uppercase">
                            Scroll down
                        </span>
                        <ArrowDown size={16} className="animate-bounce" />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
