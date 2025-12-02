'use client';

import { motion } from 'framer-motion';
import { Flag, Rocket } from 'lucide-react';

export default function Roadmap() {
    return (
        <section className="bg-slate-900 py-24 px-4 lg:px-8 border-t border-slate-800">
            <div className="mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white font-serif mb-4">Where We're Going</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Phase I */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative bg-slate-800/50 p-8 rounded-2xl border border-slate-700"
                    >
                        <div className="absolute -top-6 left-8 bg-slate-900 p-2 rounded-lg border border-slate-700">
                            <Flag className="h-8 w-8 text-blue-400" />
                        </div>
                        <div className="mt-4">
                            <h3 className="text-xl font-bold text-white mb-1">Phase I — Now</h3>
                            <div className="text-blue-400 font-medium mb-6">$5K</div>

                            <ul className="space-y-3">
                                {["Finalize hardware design", "Complete firmware and LeRobot integration", "Early adopter testing with McGill MRL", "Incorporate feedback, iterate"].map((item, i) => (
                                    <li key={i} className="flex items-start text-slate-300">
                                        <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Phase II */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative bg-slate-800/50 p-8 rounded-2xl border border-slate-700"
                    >
                        <div className="absolute -top-6 left-8 bg-slate-900 p-2 rounded-lg border border-slate-700">
                            <Rocket className="h-8 w-8 text-purple-400" />
                        </div>
                        <div className="mt-4">
                            <h3 className="text-xl font-bold text-white mb-1">Phase II — Next</h3>
                            <div className="text-purple-400 font-medium mb-6">$20K</div>

                            <ul className="space-y-3">
                                {["Manufacturing optimization", "Packaging and logistics setup", "Marketing push: ROSCon, ICRA", "Asian market expansion (Shenzhen)"].map((item, i) => (
                                    <li key={i} className="flex items-start text-slate-300">
                                        <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
