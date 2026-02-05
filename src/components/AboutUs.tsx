"use client";

import { motion } from "framer-motion";
import { Users, CheckCircle, Bot, Zap, ShieldCheck, Sparkles } from "lucide-react";

const stats = [
    { label: "Seamless Integration", value: "298+", icon: Users },
    { label: "AI Projects Delivered", value: "978+", icon: CheckCircle },
    { label: "Handled by AI Bots", value: "300%", icon: Bot },
    { label: "Faster Grow Rate", value: "95X", icon: Zap },
];

export default function AboutUs() {
    return (
        <section id="about" className="section-padding relative overflow-hidden bg-background/50">
            <div className="container-custom">
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    {/* Left: Illustration */}
                    <div className="lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative aspect-square glass-card overflow-hidden bg-white/[0.03] flex items-center justify-center p-12"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
                            <img
                                src="https://storage.perfectcdn.com/81013d/tjr9zz9zjgu98z9k.webp"
                                alt="About Team"
                                className="w-full h-full object-contain relative z-10"
                            />
                            {/* Floating micro-elements */}
                            <div className="absolute top-10 right-10 animate-float z-20">
                                <ShieldCheck className="w-12 h-12 text-primary opacity-50" />
                            </div>
                            <div className="absolute bottom-10 left-10 animate-float z-20" style={{ animationDelay: "2s" }}>
                                <Sparkles className="w-10 h-10 text-secondary opacity-50" />
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Content */}
                    <div className="lg:w-1/2">
                        <div className="mb-12">
                            <motion.h3
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-primary font-bold uppercase tracking-widest text-sm mb-6"
                            >
                                Our Services
                            </motion.h3>
                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-5xl font-black leading-tight mb-8"
                            >
                                Diverse SMM <span className="text-gradient">Panels for Every Need</span>
                            </motion.h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Explore our comprehensive range of SMM panels, designed to cater to every aspect of your social media needs. From boosting your Instagram followers to enhancing your LinkedIn network, our specialized services are tailored to ensure maximum impact and growth for your online presence. With MINSMM SMM PANEL, experience the power of targeted and effective social media marketing.
                            </p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="glass p-6 rounded-3xl border-white/[0.03]"
                                >
                                    <h4 className="text-3xl font-black text-white mb-2">{stat.value}</h4>
                                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
