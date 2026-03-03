"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react"

const socials = [
    {
        label: "GitHub",
        href: "https://github.com/Subinkumar077",
        icon: Github,
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com/in/subinkumar",
        icon: Linkedin,
    },
    {
        label: "Twitter",
        href: "https://twitter.com/subinkumar",
        icon: Twitter,
    },
]

export default function Contact() {
    return (
        <section id="contact" className="py-24 lg:py-32 border-t border-slate-800/40">
            <div className="section-container">
                <div className="max-w-2xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-sm font-medium tracking-wider uppercase text-amber-500">
                            Contact
                        </span>
                        <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-slate-100">
                            Let&apos;s Work Together
                        </h2>
                        <p className="mt-4 text-slate-400 leading-relaxed">
                            I&apos;m always open to discussing new projects, creative ideas,
                            or opportunities to be part of something great. Drop me a line
                            and I&apos;ll get back to you within 24 hours.
                        </p>
                    </motion.div>

                    <motion.div
                        className="mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                    >
                        <a
                            href="mailto:subinkumar077@gmail.com"
                            className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-slate-900 bg-amber-500 hover:bg-amber-400 rounded-lg transition-colors duration-200"
                        >
                            <Mail size={18} />
                            subinkumar077@gmail.com
                        </a>
                    </motion.div>

                    <motion.div
                        className="mt-10 flex justify-center gap-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                    >
                        {socials.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-2 px-4 py-2.5 text-sm text-slate-400 border border-slate-800 rounded-lg hover:border-slate-700 hover:text-slate-200 transition-all duration-200"
                            >
                                <social.icon size={16} />
                                {social.label}
                                <ArrowUpRight
                                    size={12}
                                    className="opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200"
                                />
                            </a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
