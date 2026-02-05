"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
    return (
        <section className="section-padding container-custom">
            <div className="glass-card bg-primary px-10 py-24 md:p-24 relative overflow-hidden text-center group">
                {/* Animated Background Gradients */}
                <div className="absolute top-0 right-0 w-[40%] h-full bg-white/10 -skew-x-12 translate-x-20 transition-transform duration-1000 group-hover:translate-x-10" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -rotate-12 pointer-events-none" />

                <div className="relative z-10 max-w-4xl mx-auto">
                    <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-white/80 font-bold uppercase tracking-[0.3em] text-xs mb-8"
                    >
                        Ready to grow?
                    </motion.h3>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black text-white mb-10 leading-[1.1] tracking-tight"
                    >
                        Scale your influence <br /> faster & more intelligently <span>with AI.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-white/70 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
                    >
                        Whether you have a single profile or an enterprise roadmap, we&apos;d love to help you reach your growth milestones.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="flex flex-col sm:flex-row gap-6 justify-center"
                    >
                        <Link href="#contact" className="btn-default bg-white text-primary hover:bg-white/90 shadow-xl px-12">
                            Get Started Today
                        </Link>
                        <Link href="#contact" className="btn-default glass text-white border-white/20 px-12">
                            Send a Message
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
