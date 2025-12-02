'use client';

import { motion } from 'framer-motion';

export default function HowItWorks() {
    const steps = [
        {
            number: "01",
            title: "Mount",
            description: "Clamp the Mimic base to any table. No permanent installation required."
        },
        {
            number: "02",
            title: "Connect",
            description: "Plug into your robotic arm via our lightweight firmware. Works with ROS, LeRobot, and custom stacks."
        },
        {
            number: "03",
            title: "Demonstrate",
            description: "Grab the ergonomic stylus and move naturally. Your motion is captured at 100Hz+."
        },
        {
            number: "04",
            title: "Train",
            description: "Use your collected demonstrations to train imitation learning policies. Compatible with ACT, SmolVLA, etc."
        }
    ];

    return (
        <section id="how-it-works" className="bg-slate-900 py-24 px-4 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white font-serif mb-4">Intuitive By Design</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        From setup to data collection in minutes, not days.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Video Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-slate-800 aspect-video"
                    >
                        <video
                            className="w-full h-full object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                            poster="/mimiccad.jpg" // Fallback poster
                        >
                            <source src="/mimic-demo.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none" />
                    </motion.div>

                    {/* Steps Section */}
                    <div className="space-y-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex gap-6"
                            >
                                <div className="flex-shrink-0">
                                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10 text-lg font-bold text-blue-400">
                                        {step.number}
                                    </span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
