"use client";

import { motion } from "framer-motion";
import {
    Zap,
    ShieldCheck,
    Headset,
    CreditCard,
    Cpu,
    Globe
} from "lucide-react";

const features = [
    {
        title: "Tốc Độ Siêu Nhanh",
        description: "Hệ thống tự động hóa hoàn toàn, đơn hàng được xử lý ngay lập tức sau khi thanh toán.",
        icon: Zap,
        color: "text-primary",
    },
    {
        title: "An Toàn Tuyệt Đối",
        description: "Chúng tôi cam kết bảo mật thông tin khách hàng và an toàn cho tài khoản mạng xã hội của bạn.",
        icon: ShieldCheck,
        color: "text-secondary",
    },
    {
        title: "Hỗ Trợ 24/7",
        description: "Đội ngũ kỹ thuật hỗ trợ chuyên nghiệp, tận tâm giải đáp mọi thắc mắc của khách hàng.",
        icon: Headset,
        color: "text-accent",
    },
    {
        title: "Nạp Tiền Đa Dạng",
        description: "Hỗ trợ nhiều phương thức thanh toán: Ngân hàng, Ví điện tử, Thẻ cào với chiết khấu cao.",
        icon: CreditCard,
        color: "text-green-400",
    },
    {
        title: "API Hiện Đại",
        description: "Cung cấp API mạnh mẽ cho các đại lý muốn kết nối và phát triển hệ thống riêng.",
        icon: Cpu,
        color: "text-blue-400",
    },
    {
        title: "Dịch Vụ Đa Quốc Gia",
        description: "Hỗ trợ dịch vụ cho tất cả các nền tảng mạng xã hội phổ biến trên toàn cầu.",
        icon: Globe,
        color: "text-purple-400",
    },
];

export default function Features() {
    return (
        <section id="features" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Tại Sao Nên Chọn <span className="text-primary">MINSMM</span>?</h2>
                    <p className="text-muted-foreground text-lg">
                        Chúng tôi tự hào là đơn vị cung cấp dịch vụ SMM hàng đầu với nền tảng công nghệ hiện đại và dịch vụ khách hàng xuất sắc.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-8 rounded-[2.5rem] group"
                        >
                            <div className={`w-14 h-14 rounded-2xl glass flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <feature.icon className={`w-8 h-8 ${feature.color}`} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
