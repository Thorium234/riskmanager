import React from 'react';
import { Card } from '../ui/Card';

export function Solution() {
    return (
        <section id="solution" className="py-24 border-t border-slate-800/50 bg-slate-950/30 relative">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative">
                <div className="max-w-3xl mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                        A new standard for risk intelligence.
                    </h2>
                    <p className="text-lg text-slate-400">
                        RIR replaces unstructured documents with a strongly-typed schema and AI analysis, perfectly suited for the modern engineering stack.
                    </p>
                </div>

                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
                    <Card className="flex flex-col border-slate-700/50 hover:border-slate-600 transition-colors">
                        <div className="h-12 w-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 text-blue-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
                        </div>
                        <h3 className="text-xl font-bold mb-3">Structured Risk Registers</h3>
                        <p className="text-slate-400 text-sm flex-grow">
                            Strict schemas for likelihood, impact, and mitigation velocity. Move away from open-text fields to quantifiable, actionable data points.
                        </p>
                    </Card>

                    <Card className="flex flex-col border-slate-700/50 hover:border-slate-600 transition-colors">
                        <div className="h-12 w-12 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 text-emerald-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                        </div>
                        <h3 className="text-xl font-bold mb-3">AI Risk Intelligence</h3>
                        <p className="text-slate-400 text-sm flex-grow">
                            Machine learning models trained on curated developer datasets. Get automated scoring and mitigation suggestions based on industry patterns.
                        </p>
                    </Card>

                    <Card className="flex flex-col border-slate-700/50 hover:border-slate-600 transition-colors">
                        <div className="h-12 w-12 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 text-purple-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" /></svg>
                        </div>
                        <h3 className="text-xl font-bold mb-3">Developer-First Workflow</h3>
                        <p className="text-slate-400 text-sm flex-grow">
                            Designed like the tools you already use. CLI integration, API-first architecture, and a dark-mode Next.js UI that doesn't hurt your eyes.
                        </p>
                    </Card>
                </div>
            </div>
        </section>
    );
}
