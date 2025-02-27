import Image from "next/image";

const services = [
    {
        title: "Web Development",
        description:
            "Phát triển website chuyên nghiệp, tối ưu hiệu suất và trải nghiệm người dùng",
        icon: "/icons/web-page.png",
        features: ["React / Next.js", "Node.js", "PHP / Laravel", "WordPress"],
    },
    {
        title: "Mobile Development",
        description:
            "Phát triển ứng dụng di động đa nền tảng với công nghệ hiện đại",
        icon: "/icons/phone.png",
        features: [
            "React Native",
            "Flutter",
            "iOS (Swift)",
            "Android (Kotlin)",
        ],
    },
    {
        title: "UI/UX Design",
        description:
            "Thiết kế giao diện người dùng thẩm mỹ và tối ưu trải nghiệm",
        icon: "/icons/page-template.png",
        features: ["Figma", "Adobe XD", "Sketch", "Prototype"],
    },
    {
        title: "Tech Consulting",
        description: "Tư vấn giải pháp công nghệ phù hợp cho doanh nghiệp",
        icon: "/icons/workbench.png",
        features: [
            "Digital Transformation",
            "Cloud Solutions",
            "System Architecture",
            "Tech Strategy",
        ],
    },
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen">
            <section className="pt-32 pb-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-primary-600 mb-6">
                            Dịch Vụ Của Chúng Tôi
                        </h1>
                        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                            Cung cấp giải pháp công nghệ toàn diện cho doanh
                            nghiệp của bạn
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="flex items-start space-x-6">
                                    <div className="w-16 h-16 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
                                        <Image
                                            src={service.icon}
                                            alt={service.title}
                                            width={32}
                                            height={32}
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-500 mb-4">
                                            {service.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {service.features.map(
                                                (feature, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium"
                                                    >
                                                        {feature}
                                                    </span>
                                                ),
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
