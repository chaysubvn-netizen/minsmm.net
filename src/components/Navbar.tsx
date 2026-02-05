"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/#about" },
        { name: "Services", href: "/#services" },
        { name: "Blog", href: "/#blog" },
        { name: "Api", href: "/api" },
    ];

    return (
        <header className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
            isScrolled ? "py-4 bg-background/80 backdrop-blur-xl border-b border-white/5" : "py-8 bg-transparent"
        )}>
            <div className="container-custom flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center group">
                    <img
                        src="/MinSmm-min.gif"
                        alt="MINSMM Logo"
                        className="h-10 md:h-12 w-auto object-contain"
                    />
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden lg:flex items-center gap-10">
                    <div className="flex items-center gap-8 px-8 py-3 rounded-full glass border-white/5">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-semibold hover:text-primary transition-colors duration-300"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <Link
                        href="https://app.minsmm.net/auth/login"
                        className="btn-default btn-highlighted px-10"
                    >
                        Get Started
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden p-3 rounded-xl glass"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 p-4 animate-in slide-in-from-top duration-500">
                    <div className="glass rounded-[2rem] p-8 flex flex-col gap-6 items-center text-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-xl font-bold hover:text-primary transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="https://app.minsmm.net/auth/login"
                            onClick={() => setIsMenuOpen(false)}
                            className="btn-default btn-highlighted w-full"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
