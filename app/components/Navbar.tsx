"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Github, Menu, X } from "lucide-react"

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "GitHub", href: "#github" },
    { label: "Contact", href: "#contact" },
]

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-surface/80 backdrop-blur-xl border-b border-slate-800/60"
                : "bg-transparent"
                }`}
        >
            <div className="section-container flex items-center justify-between h-16">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-lg font-semibold tracking-tight text-slate-100 hover:text-amber-400 transition-colors duration-200"
                >
                    subinkumar<span className="text-amber-500">.</span>me
                </Link>

                {/* Desktop nav */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="px-3 py-2 text-sm text-slate-400 hover:text-slate-100 transition-colors duration-200 rounded-md hover:bg-slate-800/50"
                        >
                            {link.label}
                        </a>
                    ))}
                    <div className="ml-3 h-5 w-px bg-slate-700" />
                    <a
                        href="https://github.com/Subinkumar077"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800/50 rounded-md transition-all duration-200"
                        aria-label="GitHub"
                    >
                        <Github size={18} />
                    </a>
                    <a
                        href="#contact"
                        className="ml-3 px-4 py-2 text-sm font-medium text-slate-900 bg-amber-500 hover:bg-amber-400 rounded-md transition-colors duration-200"
                    >
                        Hire Me
                    </a>
                </div>

                {/* Mobile toggle */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden p-2 text-slate-400 hover:text-slate-100 transition-colors"
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile nav */}
            {mobileOpen && (
                <div className="md:hidden bg-surface/95 backdrop-blur-xl border-t border-slate-800/60">
                    <div className="section-container py-4 flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="px-3 py-2.5 text-sm text-slate-400 hover:text-slate-100 hover:bg-slate-800/50 rounded-md transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="https://github.com/Subinkumar077"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-2.5 text-sm text-slate-400 hover:text-slate-100 hover:bg-slate-800/50 rounded-md transition-colors flex items-center gap-2"
                        >
                            <Github size={16} /> GitHub
                        </a>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar