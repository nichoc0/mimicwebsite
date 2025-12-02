'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-brand-navy px-4 py-20 lg:px-8">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden opacity-10">
                <div className="absolute -left-1/4 top-0 h-[800px] w-[800px] rounded-full bg-brand-gold/20 blur-[120px]" />
                <div className="absolute -right-1/4 bottom-0 h-[800px] w-[800px] rounded-full bg-blue-900/20 blur-[120px]" />
            </div>

            <div className="relative z-10 mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-8 text-center lg:text-left"
                >
                    <h1 className="font-serif text-5xl font-medium leading-tight text-white lg:text-7xl tracking-tight">
                        High-Precision <br />
                        <span className="text-brand-gold italic">3D Teleoperation Kit</span>
                    </h1>

                    <p className="text-lg text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
                        Mimic is a tabletop-mounted bimanual controller that integrates seamlessly with any robotic arm. Intuitive, accurate, and designed for the future of AI robotics.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4">
                        <button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-brand-gold/30 bg-brand-gold/10 px-8 py-4 font-serif text-brand-gold transition-all duration-500 hover:bg-brand-gold hover:text-brand-navy"
                        >
                            <span className="mr-3">Request Access</span>
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </button>
                        <button
                            onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                            className="text-slate-400 transition-colors hover:text-white font-light tracking-wide text-sm uppercase"
                        >
                            View Demonstration
                        </button>
                    </div>
                </motion.div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="relative mx-auto w-full max-w-lg lg:max-w-none"
                >
                    <div className="relative aspect-square w-full overflow-hidden rounded-sm bg-gradient-to-br from-white/5 to-white/0 p-1">
                        <div className="relative h-full w-full overflow-hidden rounded-sm bg-brand-navy">
                            <Image
                                src="/mimiccad.jpg"
                                alt="Mimic Teleoperation Kit"
                                fill
                                className="object-cover opacity-90 grayscale-[20%] contrast-125"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent" />
                        </div>
                    </div>

                    {/* Minimal Badge */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="absolute -bottom-12 left-0 hidden lg:block"
                    >
                        <p className="font-serif text-2xl text-white">Trusted by <span className="text-brand-gold italic">McGill & Concordia</span></p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
