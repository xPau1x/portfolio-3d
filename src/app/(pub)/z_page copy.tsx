"use client";

import { useState } from "react";
import Image from "next/image";
import { Lottie } from "lottie-react";
import ReactCompareImage from "react-compare-image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
// import lottieAnimation from "/tca-loading.json";

// Data sets for Lightbox Galleries
const nprImages = [
    {
        src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80",
        title: "Stylized Shader Run 01",
    },
    {
        src: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=1200&q=80",
        title: "Cel-Shaded Mech",
    },
    {
        src: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=1200&q=80",
        title: "Linework Interior",
    },
    {
        src: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?w=1200&q=80",
        title: "Watercolor Toon Pass",
    },
];

const genAiImages = [
    {
        src: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=1200&q=80",
        title: "Cyberpunk Alley Gen Pass",
    },
    {
        src: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=80",
        title: "Character Diffusion Render",
    },
    {
        src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80",
        title: "Environment Polish",
    },
    {
        src: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=1200&q=80",
        title: "Fantasy Portal Final",
    },
];

export default function PortfolioPage() {
    // Lightbox state management
    const [nprIndex, setNprIndex] = useState(-1);
    const [genAiIndex, setGenAiIndex] = useState(-1);

    return (
        <main className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-indigo-500 selection:text-white">
            {/* 1. HERO SECTION */}
            <section className="relative flex flex-col items-center justify-center px-6 py-28 text-center border-b border-neutral-800">
                <span className="mb-4 rounded-full border border-neutral-700 bg-neutral-900 px-4 py-1.5 text-xs tracking-widest text-indigo-400 uppercase">
                    3D Generalist & Technical Animator
                </span>
                <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight sm:text-7xl">
                    Crafting Digital Worlds, Dynamics & Motion
                </h1>
                <p className="mt-6 max-w-2xl text-lg text-neutral-400 sm:text-xl">
                    Specializing in procedural asset creation, character
                    animation, NPR shading pipelines, and generative AI control
                    workflows.
                </p>
            </section>

            {/* 2. STACK & TOOLS SECTION */}
            <section className="border-b border-neutral-800 bg-neutral-900/50 py-12 px-6">
                <div className="mx-auto max-w-6xl text-center">
                    <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-6">
                        Software & Pipeline Stack
                    </h2>
                    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-sm font-medium text-neutral-300">
                        {[
                            "Blender",
                            "Houdini",
                            "Unreal Engine 5",
                            "Maya",
                            "ZBrush",
                            "Substance Painter",
                            "ComfyUI",
                            "After Effects",
                        ].map((tool) => (
                            <span
                                key={tool}
                                className="rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-2 shadow-sm"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            <div className="mx-auto max-w-6xl px-6 py-20 space-y-32">
                {/* PROJECT 1: Video Left, Text Right */}
                <section className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
                    <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl">
                        <video
                            src="/tca-intro.mp4"
                            controls
                            playsInline
                            preload="metadata"
                            className="w-full"
                        />
                    </div>
                    <div className="space-y-4">
                        <span className="text-sm font-bold text-indigo-400 uppercase tracking-wider">
                            Project 01
                        </span>
                        <h2 className="text-3xl font-bold sm:text-4xl">
                            Kinetic Mech Dynamics
                        </h2>
                        <p className="text-neutral-400 leading-relaxed">
                            Full-sequence hard-surface animation focusing on
                            weight, mechanical articulation, and physics-driven
                            secondary motion simulated in Houdini and rendered
                            in Unreal Engine 5.
                        </p>
                        <div className="flex gap-2 pt-2">
                            <span className="rounded bg-neutral-800 px-2.5 py-1 text-xs text-neutral-300">
                                Hard Surface
                            </span>
                            <span className="rounded bg-neutral-800 px-2.5 py-1 text-xs text-neutral-300">
                                Rigging
                            </span>
                            <span className="rounded bg-neutral-800 px-2.5 py-1 text-xs text-neutral-300">
                                UE5
                            </span>
                        </div>
                    </div>
                </section>

                {/* PROJECT 2: Lottie Animation Left-Swapped (Text Left, Lottie Right) */}
                <section className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
                    <div className="space-y-4 lg:order-1 order-2">
                        <span className="text-sm font-bold text-indigo-400 uppercase tracking-wider">
                            Project 02
                        </span>
                        <h2 className="text-3xl font-bold sm:text-4xl">
                            Micro Vector Motion Loops
                        </h2>
                        <p className="text-neutral-400 leading-relaxed">
                            Lightweight 3D-to-2D motion design pipeline exported
                            directly to Lottie JSON. Designed for seamless web
                            interfaces and mobile application micro-interactions
                            with tiny file footprints.
                        </p>
                        <div className="flex gap-2 pt-2">
                            <span className="rounded bg-neutral-800 px-2.5 py-1 text-xs text-neutral-300">
                                Lottie
                            </span>
                            <span className="rounded bg-neutral-800 px-2.5 py-1 text-xs text-neutral-300">
                                UI/UX
                            </span>
                            <span className="rounded bg-neutral-800 px-2.5 py-1 text-xs text-neutral-300">
                                Vector 3D
                            </span>
                        </div>
                    </div>
                    <div className="lg:order-2 order-1 flex items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-900/80 p-2 shadow-2xl">
                        <div className="size-130">
                            <Lottie src="/tca-loading.json" autoplay loop />
                        </div>
                    </div>
                </section>

                {/* PROJECT 3: Regular Video Left, Text Right */}
                <section className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
                    <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl">
                        <video
                            src="/parkour.mp4"
                            controls
                            playsInline
                            preload="metadata"
                            className="w-full aspect-video object-cover"
                        />
                    </div>
                    <div className="space-y-4">
                        <span className="text-sm font-bold text-indigo-400 uppercase tracking-wider">
                            Project 03
                        </span>
                        <h2 className="text-3xl font-bold sm:text-4xl">
                            Cinematic Environment Pass
                        </h2>
                        <p className="text-neutral-400 leading-relaxed">
                            Environment assembly featuring custom volumetric
                            fog, dynamic lighting setups, and realistic
                            vegetation scattering tailored for high-end
                            cinematic trailers.
                        </p>
                        <div className="flex gap-2 pt-2">
                            <span className="rounded bg-neutral-800 px-2.5 py-1 text-xs text-neutral-300">
                                Environment
                            </span>
                            <span className="rounded bg-neutral-800 px-2.5 py-1 text-xs text-neutral-300">
                                Lighting
                            </span>
                            <span className="rounded bg-neutral-800 px-2.5 py-1 text-xs text-neutral-300">
                                Volumetrics
                            </span>
                        </div>
                    </div>
                </section>

                {/* SECTION 4: NPR RENDERING */}
                <section className="space-y-8 border-t border-neutral-800 pt-20">
                    <div className="max-w-3xl space-y-3">
                        <span className="text-sm font-bold text-indigo-400 uppercase tracking-wider">
                            Shading Pipeline
                        </span>
                        <h2 className="text-3xl font-bold sm:text-4xl">
                            Non-Photorealistic Rendering (NPR)
                        </h2>
                        <p className="text-neutral-400 leading-relaxed">
                            Exploration into real-time cel-shading, toon line
                            art, and painterly post-process shaders. Bypassing
                            physical accuracy in favor of expressive, graphic
                            art styles directly within the viewport.
                        </p>
                    </div>

                    {/* NPR Image Grid */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {nprImages.map((img, idx) => (
                            <div
                                key={idx}
                                onClick={() => setNprIndex(idx)}
                                className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900"
                            >
                                <Image
                                    src={img.src}
                                    alt={img.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100 flex items-end p-4">
                                    <p className="text-xs font-semibold text-white">
                                        {img.title}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* NPR Lightbox */}
                    <Lightbox
                        open={nprIndex >= 0}
                        index={nprIndex}
                        close={() => setNprIndex(-1)}
                        slides={nprImages}
                    />
                </section>

                {/* SECTION 5: GEN AI OVER 3D */}
                <section className="space-y-8 border-t border-neutral-800 pt-20">
                    <div className="max-w-3xl space-y-3">
                        <span className="text-sm font-bold text-indigo-400 uppercase tracking-wider">
                            Experimental Workflow
                        </span>
                        <h2 className="text-3xl font-bold sm:text-4xl">
                            Gen AI over 3D
                        </h2>
                        <p className="text-neutral-400 leading-relaxed">
                            Utilizing base 3D greybox renders for depth, normal
                            passes, and precise spatial composition, then
                            running control-guided diffusion models on top. This
                            technique yields hyper-consistent visual
                            storytelling without sacrificing structural
                            geometry.
                        </p>
                    </div>

                    {/* Before / After Draggable Image Slider */}
                    <div className="space-y-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                            Interactive Comparison (Original 3D Render vs. AI
                            Stylized Overlay)
                        </span>
                        <div className="overflow-hidden rounded-2xl border border-neutral-800 shadow-2xl h-150">
                            <ReactCompareImage
                                leftImage="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1600&q=80"
                                rightImage="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=1600&q=80"
                                leftImageAlt="Base 3D Render"
                                rightImageAlt="Gen AI Overlaid Result"
                                sliderLineWidth={2}
                                sliderLineColor="#6366f1"
                            />
                        </div>
                    </div>

                    {/* Gen AI Image Grid */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 pt-4">
                        {genAiImages.map((img, idx) => (
                            <div
                                key={idx}
                                onClick={() => setGenAiIndex(idx)}
                                className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900"
                            >
                                <Image
                                    src={img.src}
                                    alt={img.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100 flex items-end p-4">
                                    <p className="text-xs font-semibold text-white">
                                        {img.title}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Gen AI Lightbox */}
                    <Lightbox
                        open={genAiIndex >= 0}
                        index={genAiIndex}
                        close={() => setGenAiIndex(-1)}
                        slides={genAiImages}
                    />
                </section>
            </div>
        </main>
    );
}
