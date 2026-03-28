import React from 'react';
import { Button } from '../ui/Button';

export function FinalCTA() {
    return (
        <section className="py-32 border-t border-slate-800/50 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-slate-900 via-black to-black text-center relative overflow-hidden">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-slate-800/20 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative">
                <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
                    Stop reacting to risks.<br />
                    <span className="text-slate-500">Start predicting them.</span>
                </h2>
                <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
                    Join the waitlist for RIR Alpha today and transform how your engineering team models uncertainty.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button variant="primary" size="lg" className="w-full sm:w-auto px-8">
                        Create Free Account
                    </Button>
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                        View Documentation
                    </Button>
                </div>
            </div>
        </section>
    );
}
