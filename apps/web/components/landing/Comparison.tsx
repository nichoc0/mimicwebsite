'use client';

import { motion } from 'framer-motion';
import { Check, X, Minus } from 'lucide-react';

export default function Comparison() {
    const features = [
        { name: "Price", mimic: "$1,000", haply: "$5,000+", gello: "$400/arm", vr: "$300-1,000" },
        { name: "Workspace Volume", mimic: "1 ft³ per arm", haply: "Limited", gello: "Limited", vr: "Room-scale (imprecise)" },
        { name: "Bimanual", mimic: true, haply: false, gello: false, vr: "Awkward" },
        { name: "Universal Compatibility", mimic: true, haply: false, gello: false, vr: false },
        { name: "Precision", mimic: "High (12-bit)", haply: "High", gello: "Medium", vr: "Low" },
        { name: "Intuitive Mapping", mimic: "Direct kinematic", haply: "Haptic stylus", gello: "Joint-matched", vr: "Abstract" },
    ];

    const renderValue = (value: string | boolean) => {
        if (value === true) return <Check className="h-5 w-5 text-brand-gold mx-auto" />;
        if (value === false) return <Minus className="h-5 w-5 text-slate-600 mx-auto" />;
        return <span className="text-sm">{value}</span>;
    };

    return (
        <section className="bg-brand-navy py-32 px-4 lg:px-8 border-t border-white/5">
            <div className="mx-auto max-w-7xl">
                <div className="text-center mb-20">
                    <h2 className="text-3xl font-serif text-white mb-4">Technical Comparison</h2>
                </div>

                <div className="overflow-x-auto">
                    <motion.table
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="w-full text-left border-collapse"
                    >
                        <thead className="border-b border-white/10">
                            <tr className="border-b border-white/5">
                                <th className="p-6 text-left font-serif text-white font-normal">Feature</th>
                                <th className="p-6 text-brand-gold font-serif text-lg bg-white/5 min-w-[150px]">Mimic</th>
                                <th className="p-6 text-slate-400 font-light min-w-[150px]">Haply</th>
                                <th className="p-6 text-slate-400 font-light min-w-[150px]">Gello</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                <td className="p-6 text-white font-medium">Bimanual Control</td>
                                <td className="p-6 text-brand-gold bg-white/5"><Check className="h-5 w-5 mx-auto" /></td>
                                <td className="p-6 text-slate-500"><X className="h-5 w-5 mx-auto" /></td>
                                <td className="p-6 text-slate-500"><Check className="h-5 w-5 mx-auto" /></td>
                            </tr>
                            <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                <td className="p-6 text-white font-medium">Workspace Volume</td>
                                <td className="p-6 text-brand-gold bg-white/5">Large (1ft³)</td>
                                <td className="p-6 text-slate-500">Small</td>
                                <td className="p-6 text-slate-500">Small</td>
                            </tr>
                            <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                <td className="p-6 text-white font-medium">Universal Compatibility</td>
                                <td className="p-6 text-brand-gold bg-white/5"><Check className="h-5 w-5 mx-auto" /></td>
                                <td className="p-6 text-slate-500"><Check className="h-5 w-5 mx-auto" /></td>
                                <td className="p-6 text-slate-500"><X className="h-5 w-5 mx-auto" /></td>
                            </tr>
                            <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                <td className="p-6 text-white font-medium">Swappable Handles</td>
                                <td className="p-6 text-brand-gold bg-white/5"><Check className="h-5 w-5 mx-auto" /></td>
                                <td className="p-6 text-slate-500"><X className="h-5 w-5 mx-auto" /></td>
                                <td className="p-6 text-slate-500"><X className="h-5 w-5 mx-auto" /></td>
                            </tr>
                            <tr className="hover:bg-white/[0.02] transition-colors">
                                <td className="p-6 text-white font-medium">Price</td>
                                <td className="p-6 text-brand-gold font-bold bg-white/5">$1,000</td>
                                <td className="p-6 text-slate-500">$$$</td>
                                <td className="p-6 text-slate-500">~$400/arm</td>
                            </tr>
                        </tbody>
                    </motion.table>
                </div>
            </div>
        </section>
    );
}
