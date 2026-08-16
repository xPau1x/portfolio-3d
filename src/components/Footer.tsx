"use client";

import Link from "next/link";

export default function Footer() {
    const navLinks = [
        { name: "Projects", href: "#projects" },
        { name: "Pipeline", href: "#pipeline" },
        { name: "Shading", href: "#shading" },
        { name: "Gen AI", href: "#gen-ai" },
        { name: "Contact", href: "#contact" },
    ];

    const socialLinks = [
        {
            name: "LinkedIn",
            href: "https://linkedin.com/in/pau1m",
            icon: (
                <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
            ),
        },
    ];

    return (
        <footer className="border-t border-slate-200 bg-slate-200 py-12 px-6">
            <div className="mx-auto max-w-6xl space-y-8">
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                    {/* Logo / Name */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600 text-xs font-extrabold text-white shadow-sm shadow-indigo-200">
                            3D
                        </div>
                        <span className="text-sm font-bold tracking-tight text-slate-900">
                            Portfolio<span className="text-indigo-600">.</span>
                        </span>
                    </Link>

                    {/* Nav Links */}
                    <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-600">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="transition-colors hover:text-indigo-600"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4 text-slate-500">
                        {socialLinks.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={item.name}
                                className="rounded-lg border border-slate-200 p-2 transition-all hover:border-slate-300 hover:bg-slate-50 hover:text-indigo-600"
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-8 text-xs font-medium text-slate-500 sm:flex-row">
                    <p>© {new Date().getFullYear()} All rights reserved.</p>
                    <p className="text-slate-400">
                        Built with Next.js & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
}
