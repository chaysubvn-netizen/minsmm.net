"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";

const faqs = [
    {
        question: "What SMM services does your agency offer?",
        answer: "We offer a full suite of services including engagement boosting for Facebook, TikTok, Instagram, and Youtube, alongside AI-driven strategy consulting and account growth automation.",
    },
    {
        question: "Do I need a large amount of data to use your platform?",
        answer: "No, our systems are designed to scale with you. Whether you're a single profile or a large reseller, our AI-optimized workflows handle your request with precision.",
    },
    {
        question: "How long does it take to see results?",
        answer: "Most services are deployed via API instantly. You'll typically see a measurable increase in engagement within minutes to hours of project activation.",
    },
    {
        question: "Is my data secure with you?",
        answer: "Security is our top priority. We use industry-standard encryption and follow strict compliance protocols to ensure your account information remains private and protected.",
    },
    {
        question: "Can you integrate into my existing SMM panel?",
        answer: "Absolutely. We provide a modern, robust API designed for seamless integration with all major SMM panel platforms and custom business infrastructures.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="section-padding bg-background/50">
            <div className="container-custom">
                <div className="flex flex-col lg:flex-row gap-20">
                    {/* Left: Title */}
                    <div className="lg:w-[40%]">
                        <motion.h3
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-primary font-bold uppercase tracking-widest text-sm mb-6"
                        >
                            FAQ&apos;S
                        </motion.h3>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold mb-10 leading-tight"
                        >
                            Your SMM questions, <br /> expertly <span className="text-gradient">answered here</span>
                        </motion.h2>
                        <Link href="#contact" className="btn-default glass px-10">
                            View All FAQs
                        </Link>
                    </div>

                    {/* Right: Accordion */}
                    <div className="lg:w-[60%] space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="glass-card rounded-[2rem] overflow-hidden border-white/[0.03]">
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full p-8 text-left flex items-center justify-between hover:bg-white/[0.02] transition-colors"
                                >
                                    <span className="text-xl font-bold">{index + 1}. {faq.question}</span>
                                    <div className="w-10 h-10 glass rounded-full flex items-center justify-center">
                                        {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="p-8 pt-0 text-muted-foreground leading-relaxed text-lg border-t border-white/[0.03] mt-2">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
