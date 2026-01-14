import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Portfolio() {
    const projects = [
        {
            title: "Personal Portfolio",
            desc: "A modern, responsive, and interactive personal portfolio website. Built with Next.js App Router and Tailwind CSS.",
            tech: ["Next.js", "Tailwind CSS", "TypeScript"],
            color: "from-emerald-500 to-teal-400"
        },
    ];

    return (
        <section id="portfolio" className="py-20 px-8 md:px-20 w-full bg-white dark:bg-slate-900">
            <div className="max-w-6xl mx-auto">

                {/* Judul Section */}
                <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">
                    <span className="text-emerald-500">Project</span>
                </h2>

                {/* Grid Projects */}
                <div className="flex flex-wrap justify-center gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group w-full max-w-sm bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                        >
                            {/* Gambar/Thumbnail Dummy */}
                            <div className={`h-48 w-full bg-linear-to-r ${project.color} flex items-center justify-center`}>
                                <span className="text-white font-bold text-2xl opacity-25">{project.title}</span>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-4">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                    {project.desc}
                                </p>

                                {/* Tech Stack Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Link Buttons */}
                                <div className="pt-4 flex items-center gap-4">
                                    <Link href="#" className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700/50 px-4 py-2 rounded-lg shadow-sm hover:shadow-md hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-500 active:shadow-none active:translate-y-0.5 transition-all">
                                        <ExternalLink size={16} /> Demo
                                    </Link>
                                    <Link href="#" className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700/50 px-4 py-2 rounded-lg shadow-sm hover:shadow-md hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-500 active:shadow-none active:translate-y-0.5 transition-all">
                                        <Github size={16} /> Code
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tombol Lihat Selengkapnya (Opsional) */}
                <div className="mt-16 text-center">
                    <Link href="#" className="inline-flex items-center gap-2 text-emerald-500 font-medium hover:underline hover:underline-offset-4">
                        View GitHub Repository <ArrowRight size={16} />
                    </Link>
                </div>

            </div>
        </section>
    );
}
