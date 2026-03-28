import React from 'react';

export function Problem() {
    return (
        <section id="problem" className="py-24 border-t border-slate-800/50 bg-black">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                        Spreadsheets are not risk tools.
                    </h2>
                    <p className="text-lg text-slate-400">
                        Developers and technical teams rely on unstructured, messy Excel files to track critical vulnerabilities. It doesn't scale.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="rounded-xl p-8 border border-red-900/30 bg-red-950/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><path d="M8 13h2" /><path d="M8 17h2" /><path d="M14 13h2" /><path d="M14 17h2" /></svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-red-200">Unstructured Chaos</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Every team uses a different spreadsheet template. Missing fields, broken formulas, and poor version control mean risks slip through the cracks.
                        </p>
                    </div>

                    <div className="rounded-xl p-8 border border-red-900/30 bg-red-950/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-red-200">No Standardization</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Without a standardized schema for likelihood, impact, and mitigation, it's impossible to aggregate risk across an organization logically.
                        </p>
                    </div>

                    <div className="rounded-xl p-8 border border-red-900/30 bg-red-950/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-red-200">Developer Friction</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Engineers hate using legacy enterprise tools and Excel. They need a CLI-friendly, programmatic, and structured way to document risks.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
