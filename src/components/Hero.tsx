"use client";

import { motion } from "framer-motion";
import { MoveRight, TrendingUp, Users, Heart, Share2 } from "lucide-react";
import Link from "next/link";

const FloatingElement = ({ children, className, delay = 0 }: { children: React.ReactNode, className: string, delay?: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
            opacity: 1,
            y: [0, -15, 0],
        }}
        transition={{
            opacity: { duration: 0.5, delay },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay }
        }}
        className={className}
    >
        {children}
    </motion.div>
);

export default function Hero() {
    return (
        <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
            {/* Background Shapes */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 rounded-l-[40%] -z-10 blur-[80px]" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-secondary/10 rounded-full -z-10 blur-[100px]" />

            {/* Wave Divider */}
            <div className="absolute bottom-0 left-0 w-full leading-[0] -z-10">
                <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                    <path fill="var(--color-background)" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,112C672,107,768,149,864,154.7C960,160,1056,128,1152,112C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>

            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column: Content */}
                    <div className="relative z-10 text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/5 mb-8 text-sm font-bold text-secondary"
                        >
                            Welcome To Minsmm.net
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl md:text-7xl font-black leading-[1.1] mb-8"
                        >
                            SMM World Panel- World’s Best and  <br />
                            <span className="text-gradient font-black">Cheapest SMM Panel</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-xl leading-relaxed"
                        >
                            Automate your digital presence with our enterprise-grade SMM panel. High-quality services, instant delivery, and 24/7 support.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex flex-wrap gap-6"
                        >
                            <Link href="#services" className="btn-default bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg px-10">
                                Our Services
                            </Link>
                            <Link href="#about" className="btn-default glass px-12 text-white border-white/10 hover:bg-white/5">
                                Learn More
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Column: Illustration & Floating Elements */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="relative z-10 aspect-[4/3] lg:aspect-square"
                        >
                            {/* Main Image - Using a reliable Unsplash Marketing Illustration */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-[100%] h-[100%] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse-slow" />
                                <img
                                    src="https://storage.perfectcdn.com/81013d/cisiri3e4fe0qu1o.webp"
                                    alt="SMM Growth"
                                    className="w-full h-full object-contain relative z-10 drop-shadow-2xl"
                                />
                            </div>

                            {/* Floating Icons */}
                            <FloatingElement className="absolute top-[5%] left-[5%] glass p-4 rounded-2xl border-white/10 shadow-xl z-20" delay={0.5}>
                                <TrendingUp className="w-8 h-8 text-primary" />
                            </FloatingElement>

                            <FloatingElement className="absolute top-[15%] right-[0%] glass p-4 rounded-2xl border-white/10 shadow-xl z-20" delay={1}>
                                <Heart className="w-8 h-8 text-pink-500 fill-pink-500/20" />
                            </FloatingElement>

                            <FloatingElement className="absolute bottom-[20%] left-[0%] glass p-4 rounded-2xl border-white/10 shadow-xl z-20" delay={1.5}>
                                <Users className="w-8 h-8 text-secondary" />
                            </FloatingElement>

                            <FloatingElement className="absolute bottom-[10%] right-[10%] glass p-4 rounded-2xl border-white/10 shadow-xl z-20" delay={2}>
                                <Share2 className="w-8 h-8 text-cyan-400" />
                            </FloatingElement>
                        </motion.div>

                        {/* Background Blob */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/10 rounded-full blur-[100px] -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
}
