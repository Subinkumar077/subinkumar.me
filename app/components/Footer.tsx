export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="border-t border-slate-800/40 py-8">
            <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
                <p>
                    &copy; {year} Subin Kumar. Built with Next.js &amp; Tailwind CSS.
                </p>
                <p className="text-slate-600">
                    Designed &amp; developed with care.
                </p>
            </div>
        </footer>
    )
}
