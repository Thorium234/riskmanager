import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Risk Intelligence Register",
    description: "Identify, Predict, and Mitigate Risks Before They Happen.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className="antialiased min-h-screen flex flex-col">
                {children}
            </body>
        </html>
    );
}
