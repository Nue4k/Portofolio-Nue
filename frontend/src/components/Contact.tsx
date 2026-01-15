import { Mail, MapPin, Phone, Send } from 'lucide-react';
import ShineText from './ShineText';

export default function Contact() {
    return (
        <section id="contact" className="py-20 px-8 md:px-20 w-full bg-stone-100 dark:bg-slate-900">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 text-stone-800 dark:text-white">
                    <ShineText>Contact Me</ShineText>
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-stone-800 dark:text-white mb-6">Let's Talk</h3>
                        <p className="text-stone-600 dark:text-slate-400 text-lg leading-relaxed">
                            Have a project in mind or just want to say hi? Feel free to reach out. I'm open to new opportunities and collaborations.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-stone-700 dark:text-slate-300">
                                <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-sm text-amber-500 dark:text-emerald-500">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-stone-500 dark:text-slate-400">Email</p>
                                    <p className="font-medium">akhmadzakihasrul@gmail.com</p>
                                </div>
                            </div>


                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="space-y-6 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-stone-200 dark:border-slate-700">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-stone-700 dark:text-slate-300">Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-lg bg-stone-50 dark:bg-slate-900 border border-stone-200 dark:border-slate-700 focus:border-amber-500 dark:focus:border-emerald-500 focus:ring-2 focus:ring-amber-200 dark:focus:ring-emerald-900/50 outline-none transition-all"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-stone-700 dark:text-slate-300">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-lg bg-stone-50 dark:bg-slate-900 border border-stone-200 dark:border-slate-700 focus:border-amber-500 dark:focus:border-emerald-500 focus:ring-2 focus:ring-amber-200 dark:focus:ring-emerald-900/50 outline-none transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-stone-700 dark:text-slate-300">Message</label>
                            <textarea
                                rows={4}
                                className="w-full px-4 py-3 rounded-lg bg-stone-50 dark:bg-slate-900 border border-stone-200 dark:border-slate-700 focus:border-amber-500 dark:focus:border-emerald-500 focus:ring-2 focus:ring-amber-200 dark:focus:ring-emerald-900/50 outline-none transition-all resize-none"
                                placeholder="Write your message here..."
                            ></textarea>
                        </div>

                        <button className="w-full py-3 px-6 bg-amber-500 hover:bg-amber-600 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                            <Send size={18} />
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
