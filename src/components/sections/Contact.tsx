"use client";

import { useActionState } from "react";
import { sendEmailAction, FormState } from "@/app/actions/sendEmail";

const initialState: FormState = {
    success: false,
};

export default function ContactSection() {
    const [state, formAction, isPending] = useActionState(
        sendEmailAction,
        initialState,
    );

    return (
        <section
            id="contact"
            className="border-t border-slate-200 bg-slate-100/60 rounded-xl py-24 px-6"
        >
            <div className="mx-auto max-w-6xl">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left Column: Heading & Info */}
                    <div className="space-y-6">
                        <span className="text-sm font-bold text-indigo-600 uppercase tracking-wider">
                            Let&apos;s Connect
                        </span>
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                            Get in Touch
                        </h2>
                        <p className="text-lg leading-relaxed text-slate-600">
                            Open for freelance projects, technical animation
                            pipeline consulting, or full-time opportunities.
                            Drop a message and let&apos;s build something
                            together.
                        </p>

                        <div className="pt-4 space-y-4 text-sm font-semibold text-slate-700">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white shadow-sm text-indigo-600">
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <span>pmarov@gmail.com</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white shadow-sm text-indigo-600">
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>
                                </div>
                                <span>+375 44 736-50-22</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50">
                        {state.success ? (
                            <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">
                                    Message Sent!
                                </h3>
                                <p className="mt-2 text-sm text-slate-600">
                                    Thanks for reaching out. I&apos;ll get back
                                    to you as soon as possible.
                                </p>
                            </div>
                        ) : (
                            <form action={formAction} className="space-y-5">
                                {state.error && (
                                    <div className="rounded-lg bg-red-50 border border-red-200 p-3 text-xs font-semibold text-red-600">
                                        {state.error}
                                    </div>
                                )}

                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        required
                                        placeholder="Your name"
                                        className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:bg-white focus:outline-none focus:ring-1 focus:ring-indigo-600 transition-all"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                        placeholder="you@example.com"
                                        className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:bg-white focus:outline-none focus:ring-1 focus:ring-indigo-600 transition-all"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        required
                                        rows={4}
                                        placeholder="Tell me about your project..."
                                        className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:bg-white focus:outline-none focus:ring-1 focus:ring-indigo-600 transition-all resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isPending}
                                    className="w-full rounded-lg bg-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-sm shadow-indigo-200 hover:bg-indigo-700 disabled:opacity-50 transition-all"
                                >
                                    {isPending ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
