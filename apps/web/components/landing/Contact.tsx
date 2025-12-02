'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate submission
        setTimeout(() => setSubmitted(true), 1000);
    };

    return (
        <section id="contact" className="bg-slate-900 py-24 px-4 lg:px-8 border-t border-slate-800">
            <div className="mx-auto max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white font-serif mb-4">Get Early Access</h2>
                    <p className="text-slate-400">
                        We're onboarding select research labs and early adopters. If you're building the future of physical AI, we want to hear from you.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-xl"
                >
                    {submitted ? (
                        <div className="text-center py-12">
                            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 text-green-400 mb-4">
                                <Send className="h-8 w-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Request Received!</h3>
                            <p className="text-slate-400">We'll be in touch shortly.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        className="w-full rounded-lg bg-slate-900 border border-slate-700 px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                                        placeholder="Dr. Jane Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="w-full rounded-lg bg-slate-900 border border-slate-700 px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                                        placeholder="jane@university.edu"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="org" className="block text-sm font-medium text-slate-300 mb-2">Organization</label>
                                <input
                                    type="text"
                                    id="org"
                                    required
                                    className="w-full rounded-lg bg-slate-900 border border-slate-700 px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                                    placeholder="University of Robotics"
                                />
                            </div>

                            <div>
                                <label htmlFor="usecase" className="block text-sm font-medium text-slate-300 mb-2">What would you use Mimic for?</label>
                                <textarea
                                    id="usecase"
                                    rows={4}
                                    required
                                    className="w-full rounded-lg bg-slate-900 border border-slate-700 px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                                    placeholder="We are researching bimanual manipulation for..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full rounded-lg bg-blue-600 px-8 py-4 font-bold text-white transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/25"
                            >
                                Request Access
                            </button>

                            <div className="text-center mt-4">
                                <button type="button" className="text-sm text-slate-400 hover:text-white transition-colors">
                                    Want to see Mimic in action? <span className="underline decoration-blue-500/50 hover:decoration-blue-500">Schedule a Demo</span>
                                </button>
                            </div>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
