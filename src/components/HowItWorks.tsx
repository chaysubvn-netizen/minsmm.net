"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Settings } from "lucide-react";

const steps = [
    {
        no: "01",
        title: "Signup",
        desc: "Create or Register your account on SMM World Panel by simply filling a few personal details and get ready to increase your online influence.",
    },
    {
        no: "02",
        title: "Add Funds",
        desc: "After the creation of an account, you will be redirected to the dashboard, Click on Add funds and securely add balance to your account and unlock access to premium and cheap SMM Services.",
    },
    {
        no: "03",
        title: "Choose Your SMM Service",
        desc: "Select from the range of SMM Services for each social media platform including likes, followers, views and more to boost your brand visibility on social media.",
    },
    {
        no: "04",
        title: "Watch your Growth",
        desc: "Once you Place the order, sit back and see your engagement while we handle the rest.",
    },
];

const socialIcons = [
    "https://res.cloudinary.com/djjwnvmwv/image/upload/v1733130539/jtsmmpanel/jfx5ojjg4ya6hhz7aj0n.webp",
    "https://storage.perfectcdn.com/81013d/tntrs0dts0wqfq5o.webp",
    "https://storage.perfectcdn.com/81013d/tjr9zz9zjgu98z9k.webp",
    "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=200&auto=format&fit=crop",
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="section-padding bg-background/50">
            <div className="container-custom">
                <div className="glass-card p-4 md:p-12 rounded-[3.5rem] bg-white/[0.02] border-white/[0.05]">
                    <div className="flex flex-col lg:flex-row items-stretch gap-16">

                        {/* Left Column: Visual Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-[45%] bg-gradient-to-br from-blue-600 to-indigo-900 rounded-[2.5rem] p-10 flex flex-col relative overflow-hidden shadow-2xl"
                        >
                            {/* Decorative bubbles */}
                            <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                            <div className="absolute bottom-[-5%] left-[-5%] w-32 h-32 bg-primary/20 rounded-full blur-2xl" />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 w-fit mb-8">
                                    <div className="bg-orange-500 rounded-full p-1">
                                        <Settings className="w-4 h-4 text-white animate-spin-slow" />
                                    </div>
                                    <span className="text-sm font-black text-white tracking-tight">How it works</span>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-8">
                                    How Our SMM Panel Works? Increase Your Social Presence in 4 Easy Steps
                                </h2>

                                <p className="text-white/80 text-sm leading-relaxed mb-12">
                                    SMM World Panel is your go-to SMM Panel for social media growth. Whether you are a brand, company, or an influencer, we offer a premium and variety of SMM services to increase your social media presence. With just a few simple steps, you can increase your engagement, gain followers and boost your brand visibility across multiple social media platforms. Our working procedure is made to be quick, safe, and user-friendly. You can focus on growing while we will handle the rest of the process.
                                </p>

                                {/* Icon Grid at Bottom */}
                                <div className="mt-auto grid grid-cols-4 gap-4 opacity-90">
                                    {socialIcons.map((icon, i) => (
                                        <div key={i} className="aspect-square bg-white/10 rounded-2xl flex items-center justify-center p-2 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all cursor-default scale-90">
                                            <img src={icon} alt="social" className="w-full h-full object-contain rounded-lg" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column: Steps */}
                        <div className="lg:w-[55%] py-8">
                            <div className="flex justify-end mb-12">
                                <Link
                                    href="https://app.minsmm.net/auth/register"
                                    className="bg-white text-black font-black px-8 py-4 rounded-2xl flex items-center gap-3 hover:bg-white/90 transition-all shadow-xl group"
                                >
                                    Register Now
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            <div className="relative space-y-12 pl-12 md:pl-0">
                                {/* SVG Connector Lines would go here - simplified with CSS for now */}
                                <div className="absolute left-[39px] top-10 bottom-10 w-[2px] bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-pink-500/50 md:hidden" />

                                {steps.map((step, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex flex-col md:flex-row md:items-start gap-8 relative"
                                    >
                                        {/* Number Circle */}
                                        <div className="relative z-10 flex-shrink-0">
                                            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-2xl font-black text-black shadow-[0_10px_40px_rgba(0,0,0,0.1)] border-8 border-background relative">
                                                {step.no}
                                                {/* Connecting line for desktop */}
                                                {index < steps.length - 1 && (
                                                    <div className="hidden md:block absolute top-[105%] left-1/2 -translate-x-1/2 w-[2px] h-12 bg-white/10" />
                                                )}
                                            </div>
                                        </div>

                                        <div className="pt-4">
                                            <h3 className="text-2xl font-black mb-4 group-hover:text-primary transition-colors">
                                                {step.title}
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed max-w-xl">
                                                {step.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
