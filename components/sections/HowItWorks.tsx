import React from 'react';

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 border-t border-slate-800/50 bg-slate-950/30">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                        Zero to institutional resilience in minutes.
                    </h2>
                    <p className="text-lg text-slate-400">
                        A workflow designed for engineers, not compliance officers.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative border-l border-slate-800 ml-6 md:ml-12 pl-8 md:pl-16 space-y-16">

                        {/* Step 1 */}
                        <div className="relative">
                            <div className="absolute -left-[45px] top-1 md:-left-[77px] w-8 h-8 rounded-full bg-black border-2 border-emerald-500 flex items-center justify-center text-xs font-bold text-emerald-400">
                                1
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-white">Choose a template</h3>
                            <p className="text-slate-400 mb-6">
                                Start with a battle-tested structure (SaaS, FinTech, Infra) or construct a custom schema using our declarative config syntax.
                            </p>
                            <div className="rounded-lg border border-slate-800 bg-black overflow-hidden font-mono text-xs sm:text-sm text-slate-300">
                                <div className="bg-slate-900/50 px-4 py-2 border-b border-slate-800 text-slate-500">rir.config.json</div>
                                <div className="p-4">
                                    <pre>
                                        <code className="text-emerald-400">{`{`}</code>
                                        <br />
                                        <code className="text-blue-300">{`  "template"`}</code>: <code className="text-emerald-300">{`"saas-standard"`}</code>,
                                        <br />
                                        <code className="text-blue-300">{`  "modules"`}</code>: [<code className="text-emerald-300">{`"infrastructure"`}</code>, <code className="text-emerald-300">{`"data-privacy"`}</code>]
                                        <br />
                                        <code className="text-emerald-400">{`}`}</code>
                                    </pre>
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="relative">
                            <div className="absolute -left-[45px] top-1 md:-left-[77px] w-8 h-8 rounded-full bg-black border-2 border-emerald-500 flex items-center justify-center text-xs font-bold text-emerald-400">
                                2
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-white">Add and track risks</h3>
                            <p className="text-slate-400 mb-6">
                                Register risks quickly via dashboard or API. Assign owners, define likelihood/impact, and set mitigation strategies.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="relative">
                            <div className="absolute -left-[45px] top-1 md:-left-[77px] w-8 h-8 rounded-full bg-emerald-500 border-2 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)] flex items-center justify-center text-xs font-bold text-black">
                                3
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-white">Let AI analyze and suggest</h3>
                            <p className="text-slate-400 mb-6">
                                Our intelligence layer automatically evaluates your register, highlighting blind spots and proposing industry-standard mitigations.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
