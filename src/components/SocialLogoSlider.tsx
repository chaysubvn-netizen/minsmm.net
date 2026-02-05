"use client";

import { motion } from "framer-motion";

const logos = [
    { name: "YouTube", url: "https://storage.perfectcdn.com/omxgjl/rc2yu8dow04524tt.gif" },
    { name: "Twitter", url: "https://storage.perfectcdn.com/hghbyr/ej7swmpsdmz98m74.gif" },
    { name: "Telegram", url: "https://cdn.mypanel.link/sw177w/7ea6iam2aygm0qws.gif" },
    { name: "Facebook", url: "https://cdn.mypanel.link/ob5eq3/8i5ip7j6s4zldfpc.gif" },
    { name: "TikTok", url: "https://cdn.mypanel.link/ob5eq3/pzxc1dk0d4arm7d0.gif" },
    { name: "Instagram", url: "https://cdn.mypanel.link/ob5eq3/fkeumdkfe6tm2nnw.gif" },
];

export default function SocialLogoSlider() {
    return (
        <section className="py-12 bg-background border-y border-white/5 overflow-hidden">
            <div className="container-custom">
                <div className="text-center mb-10">
                    <p className="text-sm font-bold uppercase tracking-[0.3em] text-muted-foreground whitespace-nowrap">
                        Providing Most Platforms on the Market.
                    </p>
                </div>

                <div className="relative">
                    {/* Fades */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

                    <motion.div
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="flex gap-20 whitespace-nowrap w-fit items-center"
                    >
                        {[...logos, ...logos, ...logos].map((logo, i) => (
                            <div key={i} className="flex-shrink-0 transition-all duration-500 hover:scale-125">
                                <img
                                    src={logo.url}
                                    alt={logo.name}
                                    className="w-24 h-24 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
