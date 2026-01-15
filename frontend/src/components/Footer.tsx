import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-stone-200 dark:bg-slate-900 border-t border-stone-300 dark:border-slate-800 py-8">
            <div className="max-w-6xl mx-auto px-8 md:px-20 text-center">

                {/* Social Links (Centered) */}
                <div className="flex justify-center space-x-6 mb-4">
                    <a href="https://github.com/Nue4k" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-amber-600 dark:hover:text-emerald-500 transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/akhmadzakihasrul" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-blue-500 transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="https://www.instagram.com/akmzhs" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-pink-500 transition-colors">
                        <Instagram size={20} />
                    </a>
                    <a href="mailto:akhmadzakihasrul@gmail.com" className="text-stone-500 hover:text-red-500 transition-colors">
                        <Mail size={20} />
                    </a>
                </div>

                {/* Footer Text */}
                <p className="text-stone-500 dark:text-slate-400 text-sm">
                    Created by <span className="font-bold text-stone-700 dark:text-slate-200">Nue4k</span>
                </p>
                <p className="text-stone-400 dark:text-slate-500 text-xs mt-2">
                    Built with Next.js & Tailwind CSS
                </p>

            </div>
        </footer>
    );
}
