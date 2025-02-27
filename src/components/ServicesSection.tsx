import Image from "next/image";
import { SERVICES } from "@/constants/data";

type ServicesSectionProps = {
    services: typeof SERVICES;
};

export default function ServicesSection({ services }: ServicesSectionProps) {
    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
                    Lĩnh vực hoạt động
                </h2>
                <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                    DIGIFUND cung cấp giải pháp phát triển phần mềm chuyên
                    nghiệp, từ ứng dụng web, mobile đến các giải pháp tài chính
                    số
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="w-16 h-16 mb-6 bg-primary-100 rounded-lg flex items-center justify-center">
                                <Image
                                    src={service.icon}
                                    alt={service.title}
                                    width={32}
                                    height={32}
                                />
                            </div>
                            <h3 className="font-bold text-xl mb-3 text-gray-900">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
