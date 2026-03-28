import React from 'react';

const coreFeatures = [
    {
        title: "Prebuilt Templates",
        description: "Start instantly with templates tailored for SaaS, Infrastructure, Compliance, and DevOps deployments.",
        icon: "📋"
    },
    {
        title: "Risk Scoring Matrix",
        description: "Automated calculations of risk severity based on standardized likelihood and impact matrices.",
        icon: "📊"
    },
    {
        title: "AI Suggestions",
        description: "Connect your specific risks to known mitigation strategies via our intelligence engine.",
        icon: "🧠"
    },
    {
        title: "Clean UI",
        description: "Zero spreadsheet feel. A streamlined, application-grade dashboard for registering risks.",
        icon: "✨"
    },
    {
        title: "API First",
        description: "Easily integrate risk logs directly into your CI/CD pipelines and deployment scripts.",
        icon: "⚡"
    },
    {
        title: "Audit Trails",
        description: "Immutable tracking of risk status changes, mitigation steps, and ownership history.",
        icon: "🔍"
    }
];

export function Features() {
    return (
        <section id="features" className="py-24 border-t border-slate-800/50 bg-black">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        Everything you need.
                        <br />
                        <span className="text-slate-500">Nothing you don't.</span>
                    </h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {coreFeatures.map((feature, idx) => (
                        <div key={idx} className="flex flex-col">
                            <div className="text-2xl mb-4 p-3 bg-slate-900 rounded-lg inline-flex w-fit border border-slate-800 shadow-sm">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-slate-200">{feature.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
