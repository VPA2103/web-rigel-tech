import Image from "next/image";

export default function AboutSection() {
    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r text-blue-500">
                    Về RIGEL TECH
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-gray-900">
                                Sáng tạo & Chuyên môn
                            </h3>
                            <p className="text-lg leading-relaxed text-gray-800">
                                RIGEL TECH là công ty công nghệ với đội ngũ kỹ sư phần mềm giàu nhiệt huyết và sáng tạo. Chúng tôi chuyên phát triển các giải pháp web hiện đại và ứng dụng di động thông minh, giúp doanh nghiệp bắt kịp xu hướng công nghệ mới.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <div className="text-primary-600 font-bold text-3xl mb-2">
                                    15+
                                </div>
                                <div className="text-gray-800">
                                    Chuyên gia công nghệ
                                </div>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <div className="text-primary-600 font-bold text-3xl mb-2">
                                    20+
                                </div>
                                <div className="text-gray-800">
                                    Dự án đang phát triển
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="/about-bg.png"
                            alt="About Us"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
