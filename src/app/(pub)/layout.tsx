import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Pavel Marr | 3D Generalist Portfolio",
    description:
        "Pavel Marr is a 3D generalists with a wide spectrum of proven experience across the entire 3D/animation/motion graphics pipelines. Whether it's modeling, sculpting, retopologizing, unwrapping, texturing, rigging and weight painting, animating, lighting, or rendering - Pavel has done it all. Ready for turnkey production of animated commercials or to take on a more specilized role within an existing company pipeline.",
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col bg-background text-foreground">
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
