'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function Solution() {
    const stats = [
        { label: "Retail Price", value: "$1,000", sub: "vs $30,000+ alternatives" },
        { label: "Workspace", value: "1 ft³", sub: "per arm for full-range motion" },
        { label: "Freedom", value: "6-DOF", sub: "decoupled position & orientation" },
        { label: "Compatibility", value: "Universal", sub: "works with any standard arm" },
    ];

    return (
        <section className="relative overflow-hidden bg-brand-navy py-32 px-4 lg:px-8 border-t border-white/5">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-brand-gold/5 to-transparent pointer-events-none" />

            <div className="mx-auto max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-serif text-white mb-8">
                            Your Hands. Their Arms.
                        </h2>
                        <p className="text-lg text-slate-400 mb-8 leading-relaxed font-light">
                            Mimic is a tabletop-mounted bimanual controller that maps your arm movements directly to any robotic arm—no training required, no complex setup.
                        </p>
                        <p className="text-lg text-slate-400 mb-10 leading-relaxed font-light">
                            Move your hand forward, the robot moves forward. Rotate your wrist, it rotates. <span className="text-brand-gold font-medium">What you do is exactly what the robot does.</span>
                        </p>

                        <ul className="space-y-5">
                            {["Plug & Play Setup", "Zero Latency Mapping", "Haptic Feedback Ready"].map((item, i) => (
                                <li key={i} className="flex items-center text-slate-300 font-light">
                                    <CheckCircle2 className="h-5 w-5 text-brand-gold mr-4" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/[0.02] p-8 rounded-sm border border-white/5 text-center hover:bg-white/[0.04] transition-colors"
                            >
                                <div className="text-3xl font-serif text-white mb-2">{stat.value}</div>
                                <div className="text-sm font-medium text-brand-gold mb-1 uppercase tracking-wide">{stat.label}</div>
                                <div className="text-xs text-slate-500 font-light">{stat.sub}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
