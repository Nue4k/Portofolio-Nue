'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Github, Linkedin, Instagram, Mail, Code2 } from 'lucide-react';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Project', href: '#project' },
    { name: 'About', href: '#about' },
    { name: 'Certificates', href: '#certificates' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 glass">
            <div className="w-full px-8 md:px-20">
                <div className="flex items-center justify-between h-16">

                    {/* LOGO */}
                    <div className="shrink-0">
                        <Link href="/" className="flex items-center gap-2 text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-emerald-500 to-teal-400">
                            <Code2 className="text-emerald-500" /> Nue4k.
                        </Link>
                    </div>

                    {/* MENU DESKTOP */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-slate-700 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* SOCIAL ICONS (Desktop) */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="https://github.com/Nue4k" target="_blank" className="text-slate-500 hover:text-emerald-500 transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="#" className="text-slate-500 hover:text-blue-500 transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="#" className="text-slate-500 hover:text-blue-500 transition-colors">
                            <Instagram size={20} />
                        </a>
                        <a href="mailto:akhmadzakihasrul@gmail.com" className="text-slate-500 hover:text-blue-500 transition-colors">
                            <Mail size={20} />
                        </a>
                    </div>

                    {/* TOMBOL MENU MOBILE (Hamburger) */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md text-slate-700 dark:text-slate-200 hover:text-emerald-500 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* MENU MOBILE (Muncul saat tombol diklik) */}
            {isOpen && (
                <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-black/90 backdrop-blur-md">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-slate-700 dark:text-slate-300 hover:text-emerald-500 block px-3 py-2 rounded-md text-base font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}