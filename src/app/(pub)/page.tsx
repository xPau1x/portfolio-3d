"use client";

import { useState } from "react";
import Image from "next/image";
import { Lottie } from "lottie-react";
import ReactCompareImage from "react-compare-image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Contact from "@/components/sections/Contact";

// Data sets for Lightbox Galleries
const nprImages = [
    {
        src: "/images/npr/01.png",
        title: "Path traced",
    },
    {
        src: "/images/npr/02.png",
        title: "Cel-shaded 01",
    },
    {
        src: "/images/npr/03.png",
        title: "Cel-shaded 02",
    },
    {
        src: "/images/npr/04.png",
        title: "Lineart pass + compositor 01",
    },
    {
        src: "/images/npr/05.png",
        title: "Lineart pass + compositor 02",
    },
    {
        src: "/images/npr/06.png",
        title: "Flat mograph look",
    },
    {
        src: "/images/npr/07.png",
        title: "Compositor + a layer of diffusion",
    },
];

const genAiImages = [
    {
        src: "/images/3d-ai/story/01.jpeg",
        title: "01",
    },
    {
        src: "/images/3d-ai/story/02.jpeg",
        title: "02",
    },
    {
        src: "/images/3d-ai/story/03.jpeg",
        title: "03",
    },
    {
        src: "/images/3d-ai/story/04.jpeg",
        title: "04",
    },
    {
        src: "/images/3d-ai/story/05.jpeg",
        title: "05",
    },
    {
        src: "/images/3d-ai/story/06.jpeg",
        title: "06",
    },
    {
        src: "/images/3d-ai/story/07.jpeg",
        title: "07",
    },
    {
        src: "/images/3d-ai/story/08.jpeg",
        title: "08",
    },
    {
        src: "/images/3d-ai/story/09.jpeg",
        title: "09",
    },
    {
        src: "/images/3d-ai/story/10.jpeg",
        title: "10",
    },
];

export default function PortfolioPage() {
    // Lightbox state management
    const [nprIndex, setNprIndex] = useState(-1);
    const [genAiIndex, setGenAiIndex] = useState(-1);

    return (
        <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-600 selection:text-white">
            {/* 1. HERO SECTION */}
            <section className="relative flex flex-col items-center justify-center px-6 py-28 text-center border-b border-slate-200/80 bg-white">
                <span className="mb-4 rounded-full border border-indigo-200 bg-indigo-50/70 px-4 py-1.5 text-xs font-semibold tracking-widest text-indigo-700 uppercase">
                    3D Generalist & Animator
                </span>
                <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl">
                    Pavel Marr
                </h1>
                <p className="mt-6 max-w-2xl text-lg text-slate-600 sm:text-xl">
                    3D and animation generalist with a broad experience in all
                    stages of 3D asset creation and animation pipelines.
                </p>
            </section>

            {/* 2. STACK & TOOLS SECTION */}
            <section
                id="tools"
                className="border-b border-slate-200 bg-slate-100/60 py-12 px-6"
            >
                <div className="mx-auto max-w-6xl text-center">
                    <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-6">
                        Software & Pipeline Stack
                    </h2>
                    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-sm font-semibold text-slate-700">
                        {[
                            "Blender",
                            "Blender Shader Nodes",
                            "Blender Geo Nodes",
                            "Blender Fluid, Cloth, and Hair Sims",
                            "Blender Compositor",
                            "Substance Painter",
                            "After Effects",
                            "DaVinci Resolve",
                            "ComfyUI",
                        ].map((tool) => (
                            <span
                                key={tool}
                                className="rounded-lg border border-slate-200/80 bg-white px-4 py-2 shadow-sm transition-all hover:border-slate-300 hover:shadow"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            <div
                id="projects"
                className="mx-auto max-w-6xl px-6 py-20 space-y-32"
            >
                {/* PROJECT 1: Video Left, Text Right */}
                <section className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
                    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50">
                        <video
                            src="/tca-intro.mp4"
                            controls
                            playsInline
                            preload="metadata"
                            className="w-full bg-slate-900"
                        />
                    </div>
                    <div className="space-y-4">
                        <span className="text-sm font-bold text-indigo-600 uppercase tracking-wider">
                            Project 01
                        </span>
                        <h2 className="text-3xl font-bold sm:text-4xl text-slate-900">
                            The Climate App <br /> Intro Animation
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                            I was given a very rough animatic and a voice over
                            and had a task of creating an entire intro video for
                            the first-time app users. <br />
                            <ul className="flex flex-col gap-2 mt-2 list-disc pl-4.5">
                                <li>
                                    over 1700 path-traced and composited frames
                                    overall;
                                </li>
                                <li>
                                    10 different scenes/locations with smooth
                                    transitions between them;
                                </li>
                                <li>
                                    modelling, texturing, rigging, and animating
                                    both humanoid and non-humanoid characters;
                                </li>
                                <li>
                                    animating nature and weather effects.
                                    Working with Blender&apos;s native smoke and
                                    liqui
                                </li>
                                <li>
                                    complex and innovative manual rig for the
                                    main character&apos;s face and mouth
                                    incorporating live boolean cut for the
                                    mouth. (Because the character is Earth and I
                                    needed a way to make the mouth move without
                                    stretching the &quot;continents&quot;
                                    texture).
                                </li>
                                <li>
                                    post-production in Blender&apos;s own
                                    compositor that involved rendering
                                    everything as multilayered EXRs and then
                                    compositing all layers back together while
                                    adding effects like motion blur, depth of
                                    field, distant atmospheric haze, plus camera
                                    lens effects and color correction into the
                                    final comp.
                                </li>
                                <li>
                                    combining final frame sequences into clips
                                    and editing them with music, sound effects,
                                    and voice over track into the final video.
                                </li>
                            </ul>
                        </p>
                        <div className="flex gap-2 pt-2">
                            <span className="rounded bg-slate-200/70 border border-slate-300/50 px-2.5 py-1 text-xs font-medium text-slate-700">
                                Blender
                            </span>
                            <span className="rounded bg-slate-200/70 border border-slate-300/50 px-2.5 py-1 text-xs font-medium text-slate-700">
                                Animation
                            </span>
                            <span className="rounded bg-slate-200/70 border border-slate-300/50 px-2.5 py-1 text-xs font-medium text-slate-700">
                                Compositing & Editing
                            </span>
                        </div>
                    </div>
                </section>

                {/* PROJECT 2: Lottie Animation Left-Swapped (Text Left, Lottie Right) */}
                <section className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
                    <div className="space-y-4 lg:order-1 order-2">
                        <span className="text-sm font-bold text-indigo-600 uppercase tracking-wider">
                            Project 02
                        </span>
                        <h2 className="text-3xl font-bold sm:text-4xl text-slate-900">
                            The Climate App Loading Animation (Vector/Lottie)
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                            A lightweight looping animaiton for the app&apos;s
                            loading screen. Had to align with in-app design and
                            existing graphics and be inder 1MB in size.
                            <ul className="flex flex-col gap-2 mt-2 list-disc pl-4.5">
                                <li>
                                    recreating the look and feel of the main
                                    character and overall app aesthetic 1 to 1
                                    inside AE;
                                </li>
                                <li>
                                    creating a rough 3D base in Blender to trace
                                    over and use as reference in AE;
                                </li>
                                <li>
                                    creating a challenging 3D character
                                    movements and environment entirely in 2D
                                    using raw vector path transforms, keyframing
                                    vector shapes on 2s and on 3s;
                                </li>
                                <li>
                                    creating a sick cape animation on 1s,
                                    because there was no other way :)
                                </li>
                                <li>making it loop seamlessly;</li>
                                <li>
                                    exporting from AE as JSON via Bodymovin
                                    plugin, so that it can be played via a
                                    Lottie player on the web.
                                </li>
                            </ul>
                        </p>
                        <div className="flex gap-2 pt-2">
                            <span className="rounded bg-slate-200/70 border border-slate-300/50 px-2.5 py-1 text-xs font-medium text-slate-700">
                                After Effects
                            </span>
                            <span className="rounded bg-slate-200/70 border border-slate-300/50 px-2.5 py-1 text-xs font-medium text-slate-700">
                                BodyMovin/Lottie
                            </span>
                            <span className="rounded bg-slate-200/70 border border-slate-300/50 px-2.5 py-1 text-xs font-medium text-slate-700">
                                3D to 2D Workflow
                            </span>
                        </div>
                    </div>
                    <div className="lg:order-2 order-1 flex items-center justify-center rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-200/50">
                        <div className="size-130">
                            <Lottie src="/tca-loading.json" autoplay loop />
                        </div>
                    </div>
                </section>

                {/* PROJECT 3: Regular Video Left, Text Right */}
                <section className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
                    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50">
                        <video
                            src="/parkour.mp4"
                            controls
                            playsInline
                            preload="metadata"
                            className="w-full aspect-video object-cover bg-slate-900"
                        />
                    </div>
                    <div className="space-y-4">
                        <span className="text-sm font-bold text-indigo-600 uppercase tracking-wider">
                            Project 03
                        </span>
                        <h2 className="text-3xl font-bold sm:text-4xl text-slate-900">
                            Random Early Character Parkour Animation
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                            Just an early character animation of mine showing a
                            custom Panda Rigify rig doing dome parkour.
                        </p>
                        <div className="flex gap-2 pt-2">
                            <span className="rounded bg-slate-200/70 border border-slate-300/50 px-2.5 py-1 text-xs font-medium text-slate-700">
                                Blender
                            </span>
                            <span className="rounded bg-slate-200/70 border border-slate-300/50 px-2.5 py-1 text-xs font-medium text-slate-700">
                                Rigify
                            </span>
                            <span className="rounded bg-slate-200/70 border border-slate-300/50 px-2.5 py-1 text-xs font-medium text-slate-700">
                                Action Animation
                            </span>
                        </div>
                    </div>
                </section>

                {/* SECTION 4: NPR RENDERING */}
                <section
                    id="shading"
                    className="space-y-8 border-t border-slate-200 pt-20"
                >
                    <div className="max-w-3xl space-y-3">
                        <span className="text-sm font-bold text-indigo-600 uppercase tracking-wider">
                            Shading Shenanigans
                        </span>
                        <h2 className="text-3xl font-bold sm:text-4xl text-slate-900">
                            NPR Experiments
                        </h2>
                        <p className="text-slate-600 leading-relaxed w-[50ch]">
                            Exploration of various NPR techniques from shaders
                            and inverted hulls to compositor tricks and subtle
                            gen AI coating.
                        </p>
                    </div>

                    {/* NPR Image Grid */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {nprImages.map((img, idx) => (
                            <div
                                key={idx}
                                onClick={() => setNprIndex(idx)}
                                className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md"
                            >
                                <Image
                                    src={img.src}
                                    alt={img.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-slate-950/60 opacity-0 transition-opacity group-hover:opacity-100 flex items-end p-4">
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
                <section
                    id="gen-ai"
                    className="space-y-8 border-t border-slate-200 pt-20"
                >
                    <div className="max-w-3xl space-y-3">
                        <span className="text-sm font-bold text-indigo-600 uppercase tracking-wider">
                            Experimental Workflow
                        </span>
                        <h2 className="text-3xl font-bold sm:text-4xl text-slate-900">
                            Gen AI over 3D
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                            Experimenting with 3D-guided image generation. The
                            idea is to overcome the main woes of gen AI and to
                            achive highly consistent images both stylistically
                            and in terms of consistent characters and
                            environments. Making it possible to tell meaningful
                            stories. <br />
                            Could be used for quick slideshow-esque, vo-driven,
                            comic book style animations for corporate social
                            media posts a couple of times per week, for example.
                        </p>
                    </div>

                    {/* Before / After Draggable Image Slider */}
                    <div className="space-y-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                            Interactive Comparison (Original 3D Render vs. AI
                            Stylized Overlay)
                        </span>
                        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50 h-150">
                            <ReactCompareImage
                                leftImage="/images/3d-ai/org.png"
                                rightImage="/images/3d-ai/story/10.jpeg"
                                leftImageAlt="Base 3D Render"
                                rightImageAlt="Gen AI Overlaid Result"
                                sliderLineWidth={2}
                                sliderLineColor="#4f46e5"
                            />
                        </div>
                    </div>

                    {/* Gen AI Image Grid */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 pt-4">
                        {genAiImages.map((img, idx) => (
                            <div
                                key={idx}
                                onClick={() => setGenAiIndex(idx)}
                                className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md"
                            >
                                <Image
                                    src={img.src}
                                    alt={img.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-slate-950/60 opacity-0 transition-opacity group-hover:opacity-100 flex items-end p-4">
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
                <Contact />
            </div>
        </main>
    );
}
