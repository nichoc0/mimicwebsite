'use client';

export default function Footer() {
    return (
        <footer className="bg-slate-950 py-12 px-4 border-t border-slate-800">
            <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-white font-serif mb-2">Mimic</h3>
                    <p className="text-slate-500">The mouse for robotics.</p>
                </div>

                <div className="text-slate-600 text-sm">
                    © {new Date().getFullYear()} Mimic Robotics. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
