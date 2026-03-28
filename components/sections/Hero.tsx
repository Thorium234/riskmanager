import React from 'react';
import { Button } from '../ui/Button';

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-black to-black -z-10" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-slate-800/30 blur-[120px] rounded-full pointer-events-none -z-10" />

            <div className="container mx-auto px-4 text-center">
                <div className="inline-flex items-center rounded-full border border-slate-700 bg-slate-800/50 px-3 py-1 text-sm font-medium text-slate-300 backdrop-blur-sm mb-8 transition-colors hover:bg-slate-800 cursor-pointer">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
                    RIR Alpha is now available
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto mb-6 leading-tight">
                    Identify, Predict, and Mitigate Risks Before They Happen
                </h1>

                <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    AI-powered risk intelligence built for developers. Ditch the unstructured spreadsheets and build institutional resilience with zero friction.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button variant="primary" size="lg" className="w-full sm:w-auto">
                        Get Started
                    </Button>
                    <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                        View Templates
                    </Button>
                </div>

                {/* Terminal/Code UI mockup preview */}
                <div className="mt-20 mx-auto max-w-5xl rounded-xl border border-slate-800 bg-black/40 shadow-2xl overflow-hidden backdrop-blur-md">
                    <div className="flex items-center px-4 py-3 border-b border-slate-800 bg-slate-900/50">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                        </div>
                        <div className="mx-auto text-xs font-mono text-slate-500">rir-dashboard</div>
                    </div>
                    <div className="p-6 md:p-8 text-left h-64 md:h-96 flex flex-col items-center justify-center text-slate-500 border-t border-white/5">
                        <div className="animate-pulse">Loading intelligence models...</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
