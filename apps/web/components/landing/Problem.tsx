'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, Clock, DollarSign } from 'lucide-react';

export default function Problem() {
    const problems = [
        {
            icon: <Clock className="h-8 w-8 text-brand-gold" />,
            title: "Painfully Slow",
            description: "Researchers spend more time fighting their tools than collecting data."
        },
        {
            icon: <DollarSign className="h-8 w-8 text-brand-gold" />,
            title: "Prohibitively Expensive",
            description: "Custom rigs and VR setups cost $30,000+ and require complex maintenance."
        },
        {
            icon: <AlertTriangle className="h-8 w-8 text-brand-gold" />,
            title: "Unnatural Control",
            description: "Joysticks and VR controllers fail to capture the natural dexterity of human arms."
        }
    ];

    return (
        <section className="bg-brand-navy py-32 px-4 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-serif text-white mb-6"
                    >
                        The Bottleneck in AI Robotics
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-400 font-light leading-relaxed"
                    >
                        The next frontier in AI isn't chatbots—it's robots that can fold laundry, handle lab samples, and assist in surgery.
                        But training these robots is painfully slow. <span className="text-brand-gold font-medium">The result? AI robotics labs are bottlenecked by hardware, not ideas.</span>
                    </motion.p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white/[0.02] rounded-sm p-10 border border-white/5 hover:border-brand-gold/30 transition-colors"
                        >
                            <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-navy shadow-lg ring-1 ring-white/10">
                                {problem.icon}
                            </div>
                            <h3 className="text-xl font-serif text-white mb-4">{problem.title}</h3>
                            <p className="text-slate-400 leading-relaxed font-light">
                                {problem.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
