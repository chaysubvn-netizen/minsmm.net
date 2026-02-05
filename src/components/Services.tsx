"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
    {
        title: "SMM Strategy & Consulting",
        desc: "We assess your brand, identify high impact growth opportunities, and guide you with a clear roadmap.",
        image: "https://storage.perfectcdn.com/81013d/tjr9zz9zjgu98z9k.webp",
    },
    {
        title: "AI Integration & Deployment",
        desc: "We leverage autonomous agents to handle engagement, follow-backs, and content scheduling seamlessly.",
        image: "https://storage.perfectcdn.com/81013d/tntrs0dts0wqfq5o.webp",
    },
    {
        title: "Custom SMM Solutions",
        desc: "Tailored automation services for larger agencies and business panels requiring dedicated API power.",
        image: "https://res.cloudinary.com/djjwnvmwv/image/upload/v1733130539/jtsmmpanel/jfx5ojjg4ya6hhz7aj0n.webp",
    },
];

const socialPlatforms = [
    "Facebook", "Instagram", "TikTok", "YouTube", "Telegram", "Twitter", "LinkedIn", "Discord", "Spotify", "Threads", "Snapchat", "Twitch"
];

export default function Services() {
    return (
        <section id="services" className="section-padding bg-background">
            <div className="container-custom">
                <div className="text-center mb-20">
                    <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold uppercase tracking-widest text-sm mb-6"
                    >
                        Our Services
                    </motion.h3>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold"
                    >

                        Increase Your Social Media Impact With <span className="text-secondary">SMM World Panel</span>
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="glass-card overflow-hidden hover:scale-[1.02] transition-all duration-500 flex flex-col h-full">
                                <div className="aspect-[16/10] overflow-hidden relative bg-white/[0.03] flex items-center justify-center p-6">
                                    <img src={service.image} alt={service.title} className="w-full h-full object-contain group-hover:scale-105 transition-all duration-700 opacity-90 group-hover:opacity-100 relative z-10" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                                    <div className="absolute inset-0 blur-2xl opacity-20 bg-primary/20 scale-50" />
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <h4 className="text-2xl font-black mb-4 flex justify-between items-center group-hover:text-primary transition-colors">
                                        {service.title}
                                        <ArrowUpRight className="w-6 h-6 rotate-45 group-hover:rotate-0 transition-transform" />
                                    </h4>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {service.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Scrolling Platforms Marquee */}
                <div className="relative pt-10 border-t border-white/5 overflow-hidden">
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

                    <motion.div
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="flex gap-16 whitespace-nowrap w-fit px-10"
                    >
                        {[...socialPlatforms, ...socialPlatforms].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 group cursor-default">
                                <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                                <span className="text-sm font-black uppercase tracking-[0.3em] text-muted-foreground group-hover:text-white transition-colors">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
