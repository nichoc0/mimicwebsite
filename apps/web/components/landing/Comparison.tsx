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
                            <tr>
                                <th className="p-6 text-slate-400 font-light text-sm uppercase tracking-wider">Feature</th>
                                <th className="p-6 text-brand-gold font-serif text-lg bg-white/5 min-w-[150px]">Mimic</th>
                                <th className="p-6 text-slate-500 font-light text-sm uppercase tracking-wider min-w-[150px]">Haply</th>
                                <th className="p-6 text-slate-500 font-light text-sm uppercase tracking-wider min-w-[150px]">Gello</th>
                                <th className="p-6 text-slate-500 font-light text-sm uppercase tracking-wider min-w-[150px]">VR</th>
                            </tr>
                        </thead>
                        <tbody>
                            {features.map((feature, index) => (
                                <tr key={index} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                    <td className="p-6 text-slate-200 font-medium">{feature.name}</td>
                                    <td className="p-6 text-white text-center bg-white/5 font-medium border-x border-white/5">
                                        {renderValue(feature.mimic)}
                                    </td>
                                    <td className="p-6 text-slate-500 text-center font-light">{renderValue(feature.haply)}</td>
                                    <td className="p-6 text-slate-500 text-center font-light">{renderValue(feature.gello)}</td>
                                    <td className="p-6 text-slate-500 text-center font-light">{renderValue(feature.vr)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </motion.table>
                </div>
            </div>
        </section>
    );
}
