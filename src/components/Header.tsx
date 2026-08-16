"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: "Tools", href: "#tools" },
        { name: "Projects", href: "#projects" },
        { name: "Shading", href: "#shading" },
        { name: "Gen AI", href: "#gen-ai" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-slate-50/80 backdrop-blur-md">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                {/* Brand Logo / Name */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-sm font-extrabold text-white shadow-sm shadow-indigo-200">
                        3D
                    </div>
                    <span className="text-sm font-bold tracking-tight text-slate-900 sm:text-base">
                        Portfolio<span className="text-indigo-600">.</span>
                    </span>
                </Link>

                {/* Desktop Navigation Links */}
                <nav className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-semibold text-slate-600 transition-colors hover:text-indigo-600"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Action CTA Button */}
                <div className="hidden items-center gap-4 md:flex">
                    <a
                        href="#contact"
                        className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-slate-800 shadow-sm transition-all hover:border-slate-400 hover:bg-slate-50 hover:shadow"
                    >
                        Get in Touch
                    </a>
                </div>

                {/* Mobile Menu Toggle Button */}
                <button
                    type="button"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white p-2 text-slate-600 hover:bg-slate-100 md:hidden"
                    aria-label="Toggle Navigation"
                >
                    <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {mobileMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {mobileMenuOpen && (
                <div className="border-b border-slate-200 bg-white px-6 py-4 shadow-lg md:hidden">
                    <div className="flex flex-col space-y-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-sm font-semibold text-slate-700 transition-colors hover:text-indigo-600"
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="pt-2 border-t border-slate-100">
                            <a
                                href="#contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="block w-full text-center rounded-lg border border-slate-300 bg-slate-50 px-4 py-2 text-xs font-bold text-slate-800"
                            >
                                Get in Touch
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
