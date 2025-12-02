'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function BusinessModel() {
    return (
        <section className="bg-brand-navy py-32 px-4 lg:px-8 border-t border-white/5">
            <div className="mx-auto max-w-7xl">
                <div className="text-center mb-20">
                    <h2 className="text-3xl font-serif text-white mb-4">Pricing & Economics</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Pricing Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/[0.02] rounded-sm p-10 border border-white/5"
                    >
                        <h3 className="text-xl font-serif text-white mb-2">Mimic Base Kit</h3>
                        <div className="text-5xl font-light text-white mb-8">$1,000</div>

                        <ul className="space-y-4 mb-10">
                            <li className="flex items-center text-slate-300 font-light">
                                <Check className="h-5 w-5 text-brand-gold mr-4" />
                                Full Bimanual Controller
                            </li>
                            <li className="flex items-center text-slate-300 font-light">
                                <Check className="h-5 w-5 text-brand-gold mr-4" />
                                Universal Firmware
                            </li>
                            <li className="flex items-center text-slate-300 font-light">
                                <Check className="h-5 w-5 text-brand-gold mr-4" />
                                Data Collection Interface
                            </li>
                        </ul>

                        <div className="pt-8 border-t border-white/5">
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-slate-400 font-light">Additional Handles</span>
                                <span className="text-white font-medium">$100 each</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-slate-400 font-light">Enterprise Support</span>
                                <span className="text-white font-medium">Custom</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Economics Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-brand-gold/5 rounded-sm p-10 border border-brand-gold/20"
                    >
                        <h3 className="text-xl font-serif text-white mb-8">Unit Economics</h3>

                        <div className="space-y-8">
                            <div>
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="text-slate-400 uppercase tracking-wide">COGS</span>
                                    <span className="text-white">~$800</span>
                                </div>
                                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-slate-400 w-[80%]" />
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="text-slate-400 uppercase tracking-wide">Margin</span>
                                    <span className="text-brand-gold">~20%</span>
                                </div>
                                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-brand-gold w-[20%]" />
                                </div>
                            </div>

                            <div className="pt-8 border-t border-brand-gold/20">
                                <h4 className="text-white font-serif mb-6">Projections</h4>
                                <div className="grid grid-cols-2 gap-8">
                                    <div>
                                        <div className="text-xs text-brand-gold uppercase tracking-widest mb-1">Seed Stage</div>
                                        <div className="text-2xl font-light text-white">$100K</div>
                                        <div className="text-xs text-slate-500 mt-1">100 units/yr</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-brand-gold uppercase tracking-widest mb-1">Growth Stage</div>
                                        <div className="text-2xl font-light text-white">$1M</div>
                                        <div className="text-xs text-slate-500 mt-1">1,000 units/yr</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
