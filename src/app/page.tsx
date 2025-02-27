import { SERVICES } from "@/constants/data";
import BannerSlider from "@/components/BannerSlider";
import ClientsScroll from "@/components/ClientsScroll";
import AboutSection from "@/components/AboutSection";
import NewsSection from "@/components/NewsSection";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
    return (
        <main className="pt-20">
            {/* Banner Section */}
            
            <section className="relative h-[600px]">
                <BannerSlider />
            </section>

            {/* About Section */}
            <AboutSection />

            {/* News Section */}
            <NewsSection/>

            {/* Services Section */}
            <ServicesSection services={SERVICES} />

            {/* Clients Section */}
            <section className="py-20 overflow-hidden">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
                        Khách hàng tiêu biểu
                    </h2>
                    <ClientsScroll />
                </div>
            </section>
        </main>
    );
}
