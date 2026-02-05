"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Globe, Code2, ChevronRight, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

const addOrderTypes = [
    {
        id: "0", name: "Default", params: [
            { key: "key", description: "Your API key" },
            { key: "action", description: "add" },
            { key: "service", description: "Service ID" },
            { key: "link", description: "Link to page" },
            { key: "quantity", description: "Needed quantity" },
            { key: "runs (optional)", description: "Runs to deliver" },
            { key: "interval (optional)", description: "Interval in minutes" },
        ]
    },
    {
        id: "10", name: "Package", params: [
            { key: "key", description: "Your API key" },
            { key: "action", description: "add" },
            { key: "service", description: "Service ID" },
            { key: "link", description: "Link to page" },
        ]
    },
    {
        id: "2", name: "Custom Comments", params: [
            { key: "key", description: "Your API key" },
            { key: "action", description: "add" },
            { key: "service", description: "Service ID" },
            { key: "link", description: "Link to page" },
            { key: "comments", description: "Comments list separated by \\r\\n or \\n" },
        ]
    },
    {
        id: "4", name: "Mentions Custom List", params: [
            { key: "key", description: "Your API key" },
            { key: "action", description: "add" },
            { key: "service", description: "Service ID" },
            { key: "link", description: "Link to page" },
            { key: "usernames", description: "Usernames list separated by \\r\\n or \\n" },
        ]
    },
    {
        id: "7", name: "Mentions User Followers", params: [
            { key: "key", description: "Your API key" },
            { key: "action", description: "add" },
            { key: "service", description: "Service ID" },
            { key: "link", description: "Link to page" },
            { key: "quantity", description: "Needed quantity" },
            { key: "username", description: "URL to scrape followers from" },
        ]
    },
    {
        id: "100", name: "Subscriptions", params: [
            { key: "key", description: "Your API key" },
            { key: "action", description: "add" },
            { key: "service", description: "Service ID" },
            { key: "username", description: "Username" },
            { key: "min", description: "Quantity min" },
            { key: "max", description: "Quantity max" },
            { key: "posts (optional)", description: "Limit number of new posts" },
            { key: "old_posts (optional)", description: "Number of existing posts to parse" },
            { key: "delay", description: "Delay in minutes" },
            { key: "expiry (optional)", description: "Expiry date (d/m/Y)" },
        ]
    },
];

const apiMethods = [
    {
        id: "service-list",
        name: "Service list",
        params: [
            { key: "key", description: "Your API key" },
            { key: "action", description: "services" }
        ],
        response: `[
    {
        "service": 1,
        "name": "Followers",
        "type": "Default",
        "category": "First Category",
        "rate": "0.90",
        "min": "50",
        "max": "10000",
        "refill": true,
        "cancel": true
    },
    {
        "service": 2,
        "name": "Comments",
        "type": "Custom Comments",
        "category": "Second Category",
        "rate": "8",
        "min": "10",
        "max": "1500",
        "refill": false,
        "cancel": true
    }
]` },
    {
        id: "add-order",
        name: "Add order",
        isComplex: true,
        response: `{
    "order": 23501
}` },
    {
        id: "order-status",
        name: "Order status",
        params: [
            { key: "key", description: "Your API key" },
            { key: "action", description: "status" },
            { key: "order", description: "Order ID" }
        ],
        response: `{
    "charge": "0.27819",
    "start_count": "3572",
    "status": "Partial",
    "remains": "157",
    "currency": "USD"
}` },
    {
        id: "multiple-order-status",
        name: "Multiple order status",
        params: [
            { key: "key", description: "Your API key" },
            { key: "action", description: "status" },
            { key: "orders", description: "Order IDs (separated by a comma, up to 100 IDs)" }
        ],
        response: `{
    "1": {
        "charge": "0.27819",
        "start_count": "3572",
        "status": "Partial",
        "remains": "157",
        "currency": "USD"
    },
    "10": {
        "error": "Incorrect order ID"
    },
    "100": {
        "charge": "1.44219",
        "start_count": "234",
        "status": "In progress",
        "remains": "10",
        "currency": "USD"
    }
}` },
    {
        id: "create-refill",
        name: "Create refill",
        params: [
            { key: "key", description: "Your API key" },
            { key: "action", description: "refill" },
            { key: "order", description: "Order ID" }
        ],
        response: `{
    "refill": "1"
}` },
    {
        id: "create-multiple-refill",
        name: "Create multiple refill",
        params: [
            { key: "key", description: "Your API key" },
            { key: "action", description: "refill" },
            { key: "orders", description: "Order IDs (separated by a comma, up to 100 IDs)" }
        ],
        response: `[
    {
        "order": 1,
        "refill": 1
    },
    {
        "order": 2,
        "refill": 2
    },
    {
        "order": 3,
        "refill": {
            "error": "Incorrect order ID"
        }
    }
]` },
    {
        id: "get-refill-status",
        name: "Get refill status",
        params: [
            { key: "key", description: "Your API key" },
            { key: "action", description: "refill_status" },
            { key: "refill", description: "Refill ID" }
        ],
        response: `{
    "status": "Completed"
}` },
    {
        id: "get-multiple-refill-status",
        name: "Get multiple refill status",
        params: [
            { key: "key", description: "Your API key" },
            { key: "action", description: "refill_status" },
            { key: "refills", description: "Refill IDs (separated by a comma, up to 100 IDs)" }
        ],
        response: `[
    {
        "refill": 1,
        "status": "Completed"
    },
    {
        "refill": 2,
        "status": "Rejected"
    },
    {
        "refill": 3,
        "status": {
            "error": "Refill not found"
        }
    }
]` },
    {
        id: "create-cancel",
        name: "Create cancel",
        params: [
            { key: "key", description: "Your API key" },
            { key: "action", description: "cancel" },
            { key: "orders", description: "Order IDs (separated by a comma, up to 100 IDs)" }
        ],
        response: `[
    {
        "order": 9,
        "cancel": {
            "error": "Incorrect order ID"
        }
    },
    {
        "order": 2,
        "cancel": 1
    }
]` },
    {
        id: "user-balance",
        name: "User balance",
        params: [
            { key: "key", description: "Your API key" },
            { key: "action", description: "balance" }
        ],
        response: `{
    "balance": "100.84292",
    "currency": "USD"
}` },
];

export default function ApiDocs() {
    const [activeTab, setActiveTab] = useState(apiMethods[0].id);
    const [selectedOrderType, setSelectedOrderType] = useState(addOrderTypes[0].id);

    const activeMethod = apiMethods.find((m) => m.id === activeTab) || apiMethods[0];
    const activeOrderType = addOrderTypes.find(t => t.id === selectedOrderType) || addOrderTypes[0];

    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Header Section */}
            <section className="pt-40 pb-20 relative overflow-hidden bg-gradient-to-b from-primary/10 to-transparent">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] -z-10" />
                <div className="container-custom relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black mb-6"
                    >
                        Application Programming <span className="text-gradient">Interface</span>
                    </motion.h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-12">
                        Automate your workflow with our robust API. Scale your SMM business efficiently.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {[
                            { label: "HTTP Method", value: "POST", icon: Terminal },
                            { label: "API URL", value: "https://minsmm.net/api/v2", icon: Globe },
                            { label: "Response format", value: "JSON", icon: Code2 },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-card p-10 text-left relative group overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-all" />
                                <item.icon className="w-10 h-10 text-primary mb-6" />
                                <h3 className="text-muted-foreground font-bold uppercase tracking-[0.2em] text-[10px] mb-3">{item.label}</h3>
                                <p className="text-xl font-bold truncate tracking-tight">{item.value}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Docs Content */}
            <section className="pb-32 container-custom">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar */}
                    <div className="lg:w-[320px] flex-shrink-0">
                        <div className="glass-card p-4 sticky top-32 border-white/[0.03]">
                            <nav className="space-y-1">
                                {apiMethods.map((method) => (
                                    <button
                                        key={method.id}
                                        onClick={() => setActiveTab(method.id)}
                                        className={cn(
                                            "w-full text-left px-5 py-4 rounded-2xl font-bold transition-all duration-300 flex items-center justify-between group text-sm",
                                            activeTab === method.id
                                                ? "bg-primary text-white shadow-[0_10px_30px_rgba(var(--color-primary),0.3)]"
                                                : "hover:bg-white/[0.03] text-muted-foreground"
                                        )}
                                    >
                                        {method.name}
                                        <ChevronRight className={cn(
                                            "w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300",
                                            activeTab === method.id ? "opacity-100 rotate-90" : "group-hover:translate-x-1"
                                        )} />
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-grow space-y-12">
                        {/* API Module Card */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                                className="space-y-8"
                            >
                                <div className="glass-card overflow-hidden border-white/[0.03]">
                                    <div className="bg-white/[0.02] px-10 py-8 border-b border-white/[0.03] flex items-center justify-between">
                                        <h2 className="text-3xl font-black tracking-tight">{activeMethod.name}</h2>
                                        <div className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                                            {activeMethod.id}
                                        </div>
                                    </div>

                                    <div className="p-10">
                                        {activeMethod.isComplex && (
                                            <div className="mb-10">
                                                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-4">
                                                    Select Service Type
                                                </label>
                                                <div className="relative group max-w-md">
                                                    <select
                                                        value={selectedOrderType}
                                                        onChange={(e) => setSelectedOrderType(e.target.value)}
                                                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 appearance-none focus:border-primary/50 transition-colors font-bold text-sm"
                                                    >
                                                        {addOrderTypes.map(type => (
                                                            <option key={type.id} value={type.id} className="bg-background">{type.name}</option>
                                                        ))}
                                                    </select>
                                                    <ChevronRight className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 rotate-90 pointer-events-none text-muted-foreground" />
                                                </div>
                                            </div>
                                        )}

                                        <div className="overflow-x-auto">
                                            <table className="w-full text-left">
                                                <thead>
                                                    <tr className="border-b border-white/5 text-muted-foreground text-[10px] font-black uppercase tracking-[0.3em]">
                                                        <th className="pb-6">Parameters</th>
                                                        <th className="pb-6">Description</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-white/5">
                                                    {(activeMethod.isComplex ? activeOrderType.params : activeMethod.params)?.map((param, i) => (
                                                        <tr key={i} className="group hover:bg-white/[0.01] transition-all">
                                                            <td className="py-6 font-mono text-secondary font-bold text-sm">{param.key}</td>
                                                            <td className="py-6 text-muted-foreground text-sm leading-relaxed">{param.description}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                {/* Response Card */}
                                <div className="glass-card overflow-hidden border-white/[0.03]">
                                    <div className="bg-orange-500/10 px-10 py-5 border-b border-white/[0.03] flex items-center gap-3">
                                        <Code2 className="w-4 h-4 text-orange-500" />
                                        <h3 className="text-orange-500 font-black uppercase tracking-[0.2em] text-[10px]">Example response</h3>
                                    </div>
                                    <div className="p-10 bg-[#08080c] relative group">
                                        <pre className="text-sm font-mono text-blue-300/90 overflow-x-auto leading-loose">
                                            {activeMethod.response}
                                        </pre>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
