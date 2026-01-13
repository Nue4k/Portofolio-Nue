import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
    return (
        <section id="home" className="pt-32 pb-16 px-8 md:px-20 md:pt-48 md:pb-32 w-full flex flex-col-reverse md:flex-row items-center gap-12 justify-center">

            {/* Bagian Kiri: Teks & Intro */}
            <div className="flex-1 text-center md:text-left space-y-6">
                <h2 className="text-emerald-500 font-medium tracking-wide text-lg">
                    Halo, Saya Akhmad Zaki Hasrul 👋
                </h2>
                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                    Saya adalah <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-400">
                        Mahasiswa Teknik Informatika
                    </span>
                </h1>
                <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto md:mx-0">
                    Saya adalah mahasiswa Teknik Informatika di Universitas Hasanuddin.
                </p>

                {/* Tombol CTA (Call to Action) */}
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                    <Link
                        href="#portfolio"
                        className="px-8 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium transition-all flex items-center gap-2"
                    >
                        Lihat Karya <ArrowRight size={20} />
                    </Link>
                    <button
                        className="px-8 py-3 rounded-full border border-slate-300 dark:border-slate-700 hover:border-emerald-500 hover:text-emerald-500 transition-all flex items-center gap-2 text-slate-700 dark:text-slate-300"
                    >
                        Download CV <Download size={20} />
                    </button>
                </div>
            </div>

            {/* Bagian Kanan: Foto Profil Kotak */}
            <div className="flex-1 relative flex flex-col items-center">

                {/* Kotak Foto (Rasio 9:16) */}
                <div className="relative w-64 h-[28rem] md:w-80 md:h-[35rem] mx-auto bg-gradient-to-b from-emerald-500 to-teal-400 rounded-3xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500">
                    {/* Placeholder Initial */}
                    <div className="w-full h-full flex items-center justify-center text-white text-8xl font-bold opacity-20 select-none">
                        AZ
                    </div>
                </div>

                {/* Nama di Bawah Foto */}
                <div className="mt-8 text-center">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        Akhmad Zaki Hasrul
                    </h3>
                    <p className="text-emerald-500 font-medium mt-1">
                        Mahasiswa Teknik Informatika
                    </p>
                </div>

            </div>

        </section>
    );
}