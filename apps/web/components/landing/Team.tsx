'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Team() {
    const team = [
        {
            name: "Mathias Desrochers",
            role: "CEO",
            bio: "McGill Robotics Lab RA. 1st place CEC. Firmware @ AAVAA."
        },
        {
            name: "Achal Patel",
            role: "CTO",
            bio: "Concordia Aerospace RA. 1st place CEC. ML + mobile robotics."
        },
        {
            name: "Nathanael McCooeye",
            role: "COO",
            bio: "Former startup founder. HRI researcher. Mechanical systems lead."
        },
        {
            name: "Nicholas Armstrong",
            role: "CINO",
            bio: "PistonSolutions co-founder. Bombardier alum. AI infrastructure."
        },
        {
            name: "Josiah McCooeye",
            role: "Advisor",
            bio: "7yr consultancy. Six Sigma Black Belt. GTM strategy."
        }
    ];

    return (
        <section className="bg-slate-900 py-24 px-4 lg:px-8 border-t border-slate-800">
            <div className="mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white font-serif mb-4">Built by Engineers, for Engineers</h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10"
                    >
                        <Image
                            src="/team.jpg"
                            alt="Mimic Team"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                    </motion.div>

                    <div className="grid gap-6 sm:grid-cols-2">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:bg-slate-800 transition-colors"
                            >
                                <h3 className="text-lg font-bold text-white">{member.name}</h3>
                                <div className="text-blue-400 text-sm font-medium mb-2">{member.role}</div>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {member.bio}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
