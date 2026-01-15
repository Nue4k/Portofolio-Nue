import Link from 'next/link';
import ShineText from './ShineText';

export default function Hero() {
    return (
        <section id="home" className="pt-32 pb-16 px-8 md:px-20 md:pt-48 md:pb-32 w-full flex flex-col-reverse md:flex-row items-center gap-12 justify-center relative">

            {/* Bagian Kiri: Teks & Intro */}
            <div className="flex-1 text-center md:text-left space-y-6">
                <h2 className="font-medium tracking-wide text-lg">
                    <ShineText>Hi, I'm Akhmad Zaki Hasrul 👋</ShineText>
                </h2>
                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                    I am an <br />
                    <ShineText className="text-4xl md:text-6xl">
                        Informatics student
                    </ShineText>
                </h1>
                <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto md:mx-0">
                    I am an Informatics Engineering student at Hasanuddin University.
                </p>

                {/* Tombol CTA (Call to Action) */}

            </div>

            {/* Bagian Kanan: Foto Profil Kotak */}
            <div className="flex-1 relative flex flex-col items-center">

                {/* Kotak Foto (Rasio 9:16) */}
                <div className="glow-shadow relative w-64 h-112 md:w-80 md:h-140 mx-auto bg-linear-to-b from-amber-500 to-orange-400 dark:from-emerald-500 dark:to-teal-400 rounded-3xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500">
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
                    <p className="font-medium mt-1">
                        <ShineText>Informatics Engineering Student</ShineText>
                    </p>
                </div>

            </div>
        </section>
    );
}