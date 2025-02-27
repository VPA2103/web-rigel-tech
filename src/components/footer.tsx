import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-20 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    {/* Company Info */}
                    <div className="md:col-span-4 space-y-6">
                        <Link href="/" className="inline-block">
                            <div className="flex items-center gap-3">
                                <Image
                                    src="/logo-nobackground.png"
                                    alt="DIGIFUND Logo"
                                    width={40}
                                    height={40}
                                />
                                <div className="flex flex-col">
                                    <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-600">
                                        DIGIFUND
                                    </span>
                                    <span className="text-sm text-gray-400">
                                        CÔNG TY CỔ PHẦN CÔNG NGHỆ DIGIFUND
                                    </span>
                                </div>
                            </div>
                        </Link>
                        <p className="text-gray-400 leading-relaxed">
                            Đơn vị tiên phong trong lĩnh vực phát triển web, ứng
                            dụng di động và các giải pháp công nghệ hiện đại cho
                            doanh nghiệp.
                        </p>
                        <div className="flex space-x-4">
                            {["facebook", "linkedin", "twitter", "youtube"].map(
                                (social) => (
                                    <Link
                                        key={social}
                                        href={`https://${social}.com/digifund`}
                                        className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary-600 flex items-center justify-center transition-colors duration-300"
                                    >
                                        <span className="sr-only">
                                            {social}
                                        </span>
                                        <i className={`fab fa-${social}`}></i>
                                    </Link>
                                ),
                            )}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-2 space-y-4">
                        <h4 className="text-lg font-semibold text-white">
                            Dịch vụ
                        </h4>
                        <ul className="space-y-3">
                            {[
                                "Web Development",
                                "Mobile Apps",
                                "Fintech Solutions",
                                "E-commerce",
                                "UI/UX Design",
                                "Tech Consulting",
                            ].map((item) => (
                                <li key={item}>
                                    <Link
                                        href="#"
                                        className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="md:col-span-2 space-y-4">
                        <h4 className="text-lg font-semibold text-white">
                            Công ty
                        </h4>
                        <ul className="space-y-3">
                            {[
                                "Về chúng tôi",
                                "Tin tức",
                                "Tuyển dụng",
                                "Liên hệ",
                            ].map((item) => (
                                <li key={item}>
                                    <Link
                                        href="#"
                                        className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="md:col-span-4 space-y-4">
                        <h4 className="text-lg font-semibold text-white">
                            Liên hệ
                        </h4>
                        <div className="space-y-3">
                            <p className="flex items-center text-gray-400">
                                <span className="w-5 mr-3">📍</span>
                                Số 156 Đường Nam Kỳ Khởi Nghĩa, Phường Bến Nghé,
                                Quận 1, Thành phố Hồ Chí Minh, Việt Nam
                            </p>
                            <p className="flex items-center text-gray-400">
                                <span className="w-5 mr-3">📞</span>
                                (84-28) 1234 5678
                            </p>
                            <p className="flex items-center text-gray-400">
                                <span className="w-5 mr-3">✉️</span>
                                contact@digifund.vn
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-400 text-sm">
                            &copy; 2024 CÔNG TY CỔ PHẦN CÔNG NGHỆ DIGIFUND. All
                            rights reserved.
                        </p>
                        <div className="flex space-x-6">
                            <Link
                                href="#"
                                className="text-gray-400 hover:text-primary-400 text-sm"
                            >
                                Điều khoản sử dụng
                            </Link>
                            <Link
                                href="#"
                                className="text-gray-400 hover:text-primary-400 text-sm"
                            >
                                Chính sách bảo mật
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
