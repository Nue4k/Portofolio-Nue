import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8">
            <div className="max-w-6xl mx-auto px-8 md:px-20 text-center">

                {/* Social Links (Centered) */}
                <div className="flex justify-center space-x-6 mb-4">
                    <a href="https://github.com/Nue4k" target="_blank" className="text-slate-500 hover:text-emerald-500 transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/akhmadzakihasrul" target="_blank" className="text-slate-500 hover:text-blue-500 transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="https://www.instagram.com/akmzhs" target="_blank" className="text-slate-500 hover:text-pink-500 transition-colors">
                        <Instagram size={20} />
                    </a>
                    <a href="mailto:akhmadzakihasrul@gmail.com" className="text-slate-500 hover:text-red-500 transition-colors">
                        <Mail size={20} />
                    </a>
                </div>

                {/* Footer Text */}
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                    Created by <span className="font-bold text-slate-700 dark:text-slate-200">Nue4k</span>
                </p>
                <p className="text-slate-400 dark:text-slate-500 text-xs mt-2">
                    Built with Next.js & Tailwind CSS
                </p>

            </div>
        </footer>
    );
}
