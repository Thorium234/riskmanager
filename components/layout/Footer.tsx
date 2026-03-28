import React from 'react';
import Link from 'next/link';

export function Footer() {
    return (
        <footer className="border-t border-slate-800 bg-black py-12 md:py-16">
            <div className="container mx-auto px-4">
                <div className="grid gap-8 md:grid-cols-4 lg:grid-cols-5">
                    <div className="lg:col-span-2">
                        <Link href="/" className="font-bold text-lg tracking-tight mb-4 inline-block">
                            Risk Intelligence Register
                        </Link>
                        <p className="text-sm text-slate-400 max-w-xs">
                            AI-powered risk intelligence built for developers. Identify, predict, and mitigate risks before they happen.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-medium mb-4 text-slate-200">Product</h3>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li><Link href="#" className="hover:text-white transition-colors">Features</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Integrations</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Changelog</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-medium mb-4 text-slate-200">Resources</h3>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li><Link href="#" className="hover:text-white transition-colors">Documentation</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">API Reference</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Community</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-medium mb-4 text-slate-200">Company</h3>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-slate-800 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>© {new Date().getFullYear()} Risk Intelligence Register. All rights reserved.</p>
                    <div className="flex gap-4">
                        {/* Social Icons Placeholder */}
                        <div className="w-5 h-5 bg-slate-800 rounded-full"></div>
                        <div className="w-5 h-5 bg-slate-800 rounded-full"></div>
                        <div className="w-5 h-5 bg-slate-800 rounded-full"></div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
