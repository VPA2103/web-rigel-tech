import { FIELDS, SERVICES } from "@/constants/data";
import BannerSlider from "@/components/home/BannerSlider";
import ClientsScroll from "@/components/home/ClientsScroll";
import AboutSection from "@/components/home/AboutSection";
import NewsSection from "@/components/home/NewsSection";
import FieldsSection from "@/components/home/FieldsSection";
import ServicesSection from "@/components/home/ServicesSection";

export default function Home() {
    return (
        <main className="pt-20">
            {/* Banner Section */}
            <section className="relative h-[600px]">
                <BannerSlider />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center max-w-4xl px-4 py-6 rounded-lg bg-black bg-opacity-40 backdrop-blur-sm">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-shadow">
                            DIGIFUND - Công nghệ tài chính số hàng đầu Việt Nam
                        </h1>
                        <p className="text-xl text-white text-shadow-sm">
                            Đối tác tin cậy trong hành trình chuyển đổi số của
                            doanh nghiệp
                        </p>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <AboutSection />

            {/* News Section */}
            <NewsSection />

            {/* Fields Section */}
            <FieldsSection fields={FIELDS} />

            {/* Services Section */}
            <ServicesSection services={SERVICES} />

            {/* Clients Section */}
            <section className="py-20 overflow-hidden" id="clients">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
                        Khách hàng tiêu biểu của DIGIFUND
                    </h2>
                    <ClientsScroll />
                </div>
            </section>
        </main>
    );
}
