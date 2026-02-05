"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const facts = [
    {
        title: "Proven Technical Expertise",
        value: "15+",
        sub: "Years of Market Experience",
        desc: "Our team brings deep experience in machine learning and social algorithm engineering.",
    },
    {
        title: "Customizable Solutions",
        value: "200+",
        sub: "API Endpoints Available",
        desc: "We don't believe in one size fits all. Every service is tailored to your business needs.",
    },
    {
        title: "Focus on Real Results",
        value: "99%",
        sub: "Client Satisfaction Rate",
        desc: "We build systems that are safe, transparent, and designed for long-term account health.",
    },
];

export default function Facts() {
    return (
        <section id="facts" className="section-padding relative">
            <div className="container-custom text-center">
                <div className="mb-20">
                    <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold uppercase tracking-widest text-sm mb-6"
                    >
                        Our Facts
                    </motion.h3>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold"
                    >
                        Why leading brands trust us to deliver <br /> smart <span className="text-gradient">SMM services</span>
                    </motion.h2>
                </div>

                <div className="grid lg:grid-cols-3 gap-10 mb-16">
                    {facts.map((fact, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-12 text-left flex flex-col justify-between hover:bg-white/[0.04]"
                        >
                            <h4 className="text-xl font-bold mb-8 opacity-80">{fact.title}</h4>
                            <div className="mb-10">
                                <h2 className="text-6xl font-black text-primary mb-2 tracking-tighter">{fact.value}</h2>
                                <p className="font-bold text-sm uppercase tracking-widest text-muted-foreground">{fact.sub}</p>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                                {fact.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="pt-10 flex flex-col md:flex-row justify-center items-center gap-4 text-lg font-medium"
                >
                    <p className="text-muted-foreground">Let&apos;s make something great work together.</p>
                    <Link href="#contact" className="text-primary font-bold border-b-2 border-primary/20 hover:border-primary transition-all pb-1">
                        Get Free Quote
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
