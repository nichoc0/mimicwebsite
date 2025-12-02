'use client';

import { motion } from 'framer-motion';
import { Eye, HandMetal, Link, Move, Lock, Settings } from 'lucide-react';

export default function Features() {
    const features = [
        {
            icon: <Eye className="h-6 w-6 text-blue-400" />,
            title: "What You See Is What You Get",
            description: "Direct kinematic mapping means the robot mirrors your exact hand position and orientation. No mental translation."
        },
        {
            icon: <HandMetal className="h-6 w-6 text-blue-400" />,
            title: "Bimanual Control",
            description: "Two independent arms for complex manipulation tasks—folding, assembly, handovers."
        },
        {
            icon: <Link className="h-6 w-6 text-blue-400" />,
            title: "Universal Compatibility",
            description: "One controller for any arm. Our firmware layer abstracts the robot-specific details."
        },
        {
            icon: <Move className="h-6 w-6 text-blue-400" />,
            title: "Built-In Base Control",
            description: "Integrated joysticks for controlling mobile bases—wheeled robots, quadrupeds, whatever your platform needs."
        },
        {
            icon: <Lock className="h-6 w-6 text-blue-400" />,
            title: "Active Hold (Deadman Switch)",
            description: "Release the controller and it freezes in place. Gravity-compensated servos hold position."
        },
        {
            icon: <Settings className="h-6 w-6 text-blue-400" />,
            title: "Swappable Handles",
            description: "Wheel grips for driving, precision styluses for manipulation, custom handles for your specific end-effector."
        }
    ];

    return (
        <section className="bg-slate-900 py-24 px-4 lg:px-8 border-t border-slate-800">
            <div className="mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white font-serif mb-4">Built for Researchers, Priced for Labs</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Everything you need to collect high-quality data, without the high price tag.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-800/30 p-8 rounded-2xl border border-slate-700 hover:bg-slate-800/50 hover:border-blue-500/30 transition-all group"
                        >
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
