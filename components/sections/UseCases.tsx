import React from 'react';
import { Card } from '../ui/Card';

export function UseCases() {
    return (
        <section className="py-24 border-t border-slate-800/50 bg-black">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                        Built for those who build.
                    </h2>
                    <p className="text-lg text-slate-400">
                        RIR provides the structure and insight technical teams need to manage platform risk without slowing down development.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <Card className="hover:border-slate-600 transition-colors bg-slate-900/40">
                        <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                            <span className="text-blue-400">01.</span> Developers
                        </h3>
                        <p className="text-slate-400 text-sm">
                            Log technical debt, architectural vulnerabilities, and scaling limits using familiar API-first syntax. Avoid last-minute security reviews.
                        </p>
                    </Card>

                    <Card className="hover:border-slate-600 transition-colors bg-slate-900/40">
                        <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                            <span className="text-purple-400">02.</span> Startups
                        </h3>
                        <p className="text-slate-400 text-sm">
                            Establish institutional memory from day one. Show investors and auditors that you have a proactive, intelligent grasp on operational risk.
                        </p>
                    </Card>

                    <Card className="hover:border-slate-600 transition-colors bg-slate-900/40">
                        <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                            <span className="text-emerald-400">03.</span> Technical Leads
                        </h3>
                        <p className="text-slate-400 text-sm">
                            Stop maintaining broken spreadsheets. Get an organizational overview of active threats and mitigation velocity in real-time.
                        </p>
                    </Card>
                </div>
            </div>
        </section>
    );
}
