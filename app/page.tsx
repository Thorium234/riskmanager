import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Problem } from '@/components/sections/Problem';
import { Solution } from '@/components/sections/Solution';
import { Features } from '@/components/sections/Features';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { UseCases } from '@/components/sections/UseCases';
import { FinalCTA } from '@/components/sections/FinalCTA';

export default function Home() {
    return (
        <>
            <Header />
            <main className="flex-grow">
                <Hero />
                <Problem />
                <Solution />
                <Features />
                <HowItWorks />
                <UseCases />
                <FinalCTA />
            </main>
            <Footer />
        </>
    );
}
