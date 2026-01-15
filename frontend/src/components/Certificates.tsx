import { Award, ExternalLink } from 'lucide-react';
import ShineText from './ShineText';

const certificates = [
    {
        id: 1,
        title: "Belajar Dasar AI",
        issuer: "Dicoding Indonesia",
        date: "2025",
        image: "/certificates/ai-basic.png",
        credentialLink: "https://www.dicoding.com/certificates/53XEK91MVXRN"
    },
    {
        id: 2,
        title: "Memulai Pemrograman Dengan C",
        issuer: "Dicoding Indonesia",
        date: "2025",
        image: "/certificates/c-basic.png",
        credentialLink: "https://www.dicoding.com/certificates/07Z639N5JZQR"
    },
    {
        id: 3,
        title: "Memulai Pemrograman Dengan Java",
        issuer: "Dicoding Indonesia",
        date: "2025",
        image: "/certificates/java-basic.png",
        credentialLink: "https://www.dicoding.com/certificates/72ZDK97KVPYW"
    },
];

export default function Certificates() {
    return (
        <section id="certificates" className="py-20 px-8 md:px-20 w-full bg-stone-200 dark:bg-slate-800">
            <div className="max-w-6xl mx-auto">

                {/* Section Header */}
                <h2 className="text-3xl font-bold text-center mb-12 text-stone-800 dark:text-white">
                    <ShineText>Certificates</ShineText>
                </h2>

                {/* Grid */}
                <div className="flex flex-wrap justify-center gap-6">
                    {certificates.map((cert) => (
                        <div
                            key={cert.id}
                            className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-1.5rem)] bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-stone-200 dark:border-slate-700 hover:border-amber-500 dark:hover:border-emerald-500 transition-all hover:shadow-lg group"
                        >
                            {/* Certificate Image */}
                            <div className="bg-stone-100 dark:bg-slate-800 flex items-center justify-center relative overflow-hidden p-4">
                                {cert.image ? (
                                    <img src={cert.image} alt={cert.title} className="w-full h-auto object-contain shadow-sm group-hover:scale-105 transition-transform duration-500" />
                                ) : (
                                    <div className="h-48 w-full flex items-center justify-center">
                                        <Award size={48} className="text-stone-400 dark:text-slate-600 group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="font-bold text-lg text-stone-800 dark:text-white mb-1 line-clamp-2">
                                    {cert.title}
                                </h3>
                                <p className="text-amber-600 dark:text-emerald-400 text-sm font-medium mb-4">
                                    {cert.issuer} • {cert.date}
                                </p>

                                <a
                                    href={cert.credentialLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-amber-600 dark:hover:text-emerald-500 transition-colors"
                                >
                                    <ExternalLink size={14} /> Verify Credential
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
