import React from 'react';
import Link from 'next/link';

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="font-bold text-lg tracking-tight flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-white text-black flex items-center justify-center font-bold text-xs">
                        R
                    </div>
                    Risk Intelligence Register
                </Link>
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
                    <Link href="#problem" className="hover:text-white transition-colors">Problem</Link>
                    <Link href="#solution" className="hover:text-white transition-colors">Solution</Link>
                    <Link href="#features" className="hover:text-white transition-colors">Features</Link>
                    <Link href="#how-it-works" className="hover:text-white transition-colors">How it Works</Link>
                </nav>
                <div className="flex items-center gap-4">
                    <Link href="#" className="text-sm font-medium text-slate-300 hover:text-white hidden sm:block">
                        Log in
                    </Link>
                    <Link
                        href="#"
                        className="inline-flex h-9 items-center justify-center rounded-md bg-white px-4 text-sm font-medium text-black transition-colors hover:bg-slate-200"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </header>
    );
}
