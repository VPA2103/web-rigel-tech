import Image from "next/image";
import { SERVICES } from "@/constants/data";

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
                            Giải pháp công nghệ toàn diện với quy trình chuyên
                            nghiệp
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {SERVICES.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
                            >
                                <div className="flex flex-col h-full">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
                                            <Image
                                                src={service.icon}
                                                alt={service.title}
                                                width={24}
                                                height={24}
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800">
                                                {service.title}
                                            </h3>
                                            <p className="text-sm text-primary-600 font-medium">
                                                {service.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-gray-500 text-sm flex-grow">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
