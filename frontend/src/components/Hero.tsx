import Link from 'next/link';

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
                    <span className="bg-clip-text text-transparent bg-linear-to-r from-emerald-500 to-teal-400">
                        Mahasiswa Teknik Informatika
                    </span>
                </h1>
                <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto md:mx-0">
                    Saya adalah mahasiswa Teknik Informatika di Universitas Hasanuddin.
                </p>

                {/* Tombol CTA (Call to Action) */}

            </div>

            {/* Bagian Kanan: Foto Profil Kotak */}
            <div className="flex-1 relative flex flex-col items-center">

                {/* Kotak Foto (Rasio 9:16) */}
                <div className="relative w-64 h-112 md:w-80 md:h-140 mx-auto bg-linear-to-b from-emerald-500 to-teal-400 rounded-3xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500">
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


            {/* Wave Separator */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px]">
                    <path d="M321.39,56.44c-58-10.79-114.16-30.13-172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-slate-100 dark:fill-slate-800"></path>
                </svg>
            </div>
        </section>
    );
}