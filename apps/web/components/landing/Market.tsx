'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Building2, Code2, Factory } from 'lucide-react';

export default function Market() {
    const customers = [
        {
            icon: <GraduationCap className="h-6 w-6 text-purple-400" />,
            title: "University Labs",
            examples: "MIT, Stanford, McGill, Mila, UofT"
        },
        {
            icon: <Building2 className="h-6 w-6 text-blue-400" />,
            title: "Industry R&D",
            examples: "Boston Dynamics, Kinova, AstraZeneca, Ford"
        },
        {
            icon: <Code2 className="h-6 w-6 text-green-400" />,
            title: "Open-Source Community",
            examples: "LeRobot ecosystem, Hugging Face robotics"
        },
        {
            icon: <Factory className="h-6 w-6 text-orange-400" />,
            title: "SME Robotics",
            examples: "Smaller shops building custom automation"
        }
    ];

    return (
        <section className="bg-slate-900 py-24 px-4 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-serif text-white mb-6">
                            Bridging Research & Industry
                        </h2>
                        <p className="text-lg text-slate-400 mb-8 leading-relaxed font-light">
                            The AI robotics industry is valued at over <span className="text-brand-gold font-medium">$70 billion</span>.
                            Leading institutions like McGill, Mila, and Boston Dynamics are already investing in kinesthetic imitation learning.
                        </p>
                        <p className="text-lg text-slate-400 mb-8 leading-relaxed font-light">
                            Mimic addresses this emerging market by providing the intuitive spatial controllers essential for the humanoid robotics revolution.
                        </p>

                        <div className="bg-blue-900/20 border border-blue-500/20 rounded-xl p-6">
                            <p className="text-blue-200 font-medium">
                                Already partnered with McGill Mobile Robotics Lab and integrated into ongoing Kinova MOVO research.
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {customers.map((customer, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-slate-800 p-6 rounded-xl border border-slate-700"
                            >
                                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-700">
                                    {customer.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{customer.title}</h3>
                                <p className="text-sm text-slate-400">{customer.examples}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
