import ShineText from './ShineText';

export default function About() {
    return (
        <section id="about" className="py-20 px-8 md:px-20 w-full bg-stone-100 dark:bg-slate-800">
            <div className="max-w-6xl mx-auto">

                {/* Judul Section */}
                <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">
                    <ShineText>About Me</ShineText>
                </h2>

                {/* Deskripsi Diri (Centered) */}
                <div className="max-w-4xl mx-auto space-y-6 text-center">
                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>

            </div>
        </section>
    );
}