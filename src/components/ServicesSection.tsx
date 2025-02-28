import Image from "next/image";
import Link from "next/link";

interface ServiceProps {
    title: string;
    subtitle: string;
    description: string;
    icon: string;
}

export default function ServicesSection({
    services,
    showAll = false,
}: {
    services: ServiceProps[];
    showAll?: boolean;
}) {
    // Show only first 4 services if showAll is false
    const displayServices = showAll ? services : services.slice(0, 4);

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-600 mb-6">
                        Dịch Vụ Của Chúng Tôi
                    </h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        Giải pháp công nghệ toàn diện với quy trình chuyên
                        nghiệp
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {displayServices.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="flex items-start space-x-6">
                                <div className="w-14 h-14 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
                                    <Image
                                        src={service.icon}
                                        alt={service.title}
                                        width={28}
                                        height={28}
                                    />
                                </div>
                                <div>
                                    <div className="mb-3">
                                        <h3 className="text-xl font-semibold text-gray-800">
                                            {service.title}
                                        </h3>
                                        <p className="text-sm text-primary-600">
                                            {service.subtitle}
                                        </p>
                                    </div>
                                    <p className="text-gray-500 line-clamp-3">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {!showAll && (
                    <div className="text-center mt-12">
                        <Link
                            href="/services"
                            className="inline-block px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-300"
                        >
                            Xem tất cả dịch vụ
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}
