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
                        I am an individual with a strong interest in data science and technology.
                        I enjoy thinking, exploring ideas, and playing with logic to uncover patterns and insights from data.


                    </p>
                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                        I am able to work independently as well as collaboratively in a team,
                        and I adapt well to new challenges and new technologies.
                    </p>
                </div>

            </div>
        </section>
    );
}