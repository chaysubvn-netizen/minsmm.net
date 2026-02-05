"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Rocket, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="pt-24 pb-10 bg-background relative overflow-hidden">
            {/* Decorative Blur */}
            <div className="absolute bottom-0 left-0 w-full h-[300px] bg-primary/5 blur-[100px] -z-10" />

            <div className="container-custom">
                {/* Footer Top: CTA */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-24 pb-24 border-b border-white/5">
                    <div className="max-w-2xl text-center lg:text-left">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-black mb-6"
                        >
                            Let&apos;s start work <br /> <span className="text-gradient">together!</span>
                        </motion.h2>
                        <p className="text-xl text-muted-foreground">
                            Partner with us to create intelligent, impactful, and future-ready SMM solutions together.
                        </p>
                    </div>
                    <Link href="#contact" className="btn-default btn-highlighted px-12 py-6 text-xl">
                        Let&apos;s Work Together
                    </Link>
                </div>

                {/* Footer Main */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center mb-8 group">
                            <img
                                src="/MinSmm-min.gif"
                                alt="MINSMM Logo"
                                className="h-10 md:h-12 w-auto object-contain"
                            />
                        </Link>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram].map((Icon, i) => (
                                <Link key={i} href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-500">
                                    <Icon className="w-5 h-5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-2 grid sm:grid-cols-2 gap-10">
                        <div>
                            <h4 className="text-lg font-bold mb-6 italic opacity-80 uppercase tracking-widest text-xs">Get In Touch</h4>
                            <p className="text-xl font-bold mb-2 hover:text-primary transition-colors cursor-pointer">+(00) - 152 885 253</p>
                            <p className="text-xl font-bold hover:text-primary transition-colors cursor-pointer">info@minsmm.net</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold mb-6 italic opacity-80 uppercase tracking-widest text-xs">Our Location</h4>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                123 Lorem Street Suite 5B, <br /> Ips Park London, UK SW1A 1AA
                            </p>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 italic opacity-80 uppercase tracking-widest text-xs">Subscribe Newsletter</h4>
                        <div className="relative group">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 focus:border-primary/50 transition-colors"
                            />
                            <button className="absolute right-2 top-2 bottom-2 aspect-square glass rounded-xl flex items-center justify-center hover:bg-primary transition-colors group-hover:shadow-[0_0_20px_rgba(var(--color-primary),0.3)]">
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-medium text-muted-foreground">
                    <p>© {new Date().getFullYear()} MINSMM.NET. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
