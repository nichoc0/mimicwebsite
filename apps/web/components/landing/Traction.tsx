'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Traction() {
    return (
        <section className="bg-slate-900 py-24 px-4 lg:px-8 border-t border-slate-800">
            <div className="mx-auto max-w-7xl text-center">
                <h2 className="text-3xl font-bold text-white font-serif mb-8">Trusted Partners</h2>

                <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-16 leading-relaxed">
                    Mimic is actively deployed at <span className="text-white font-medium">McGill's Mobile Robotics Laboratory</span> and supported by leading institutions.
                </p>

                <div className="flex flex-wrap justify-center gap-8 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Concordia Logo */}
                    <div className="flex items-center justify-center p-4 bg-white rounded-xl h-20 w-48">
                        <div className="relative h-12 w-full">
                            <Image
                                src="/concordialogo.jpg"
                                alt="Concordia University"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Text Placeholders for others */}
                    <div className="flex items-center justify-center p-4 bg-white rounded-xl h-20 w-48">
                        <span className="text-slate-900 font-bold text-lg">McGill</span>
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white rounded-xl h-20 w-48">
                        <span className="text-slate-900 font-bold text-lg">Mila</span>
                    </div>
                    <div className="flex items-center justify-center p-4 bg-white rounded-xl h-20 w-48">
                        <span className="text-slate-900 font-bold text-lg">Kinova</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
