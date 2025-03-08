import Link from "next/link";
import Image from "next/image";
import { serviceLinks, companyLinks } from "../../constants/footerLinks";
import { FaMapMarkerAlt } from "react-icons/fa"; // Add this import

export default function Footer() {
    return (
        <footer
            className="bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-12 md:pt-16 lg:pt-20 pb-8"
            itemScope
            itemType="https://schema.org/Organization"
        >
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-8 md:gap-10">
                    {/* Company Info - Full width on mobile, larger on desktop */}
                    <div className="sm:col-span-2 md:col-span-3 lg:col-span-4 space-y-4 md:space-y-6">
                        <div className="space-y-2">
                            <Link href="/" className="inline-block">
                                <div className="flex flex-col items-center">
                                    <Image
                                        src="/logo-nobackground.png"
                                        alt="DIGIFUND Logo"
                                        width={80}
                                        height={80}
                                    />
                                    <span className="text-2xl md:text-3xl font-bold text-[#ffbd59] -mt-1">
                                        DIGIFUND
                                    </span>
                                </div>
                            </Link>
                            <div className="text-left">
                                <span className="text-xs md:text-sm text-gray-400">
                                    CÔNG TY CỔ PHẦN CÔNG NGHỆ DIGIFUND
                                </span>
                            </div>
                        </div>
                        <p
                            className="text-gray-400 leading-relaxed text-sm md:text-base"
                            itemProp="description"
                        >
                            Đơn vị tiên phong trong lĩnh vực phát triển web, ứng
                            dụng di động và các giải pháp công nghệ hiện đại cho
                            doanh nghiệp.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://facebook.com/DIGIFUND"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="hover:text-blue-400"
                            >
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a
                                href="https://twitter.com/DIGIFUND"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Twitter"
                                className="hover:text-blue-400"
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a
                                href="https://linkedin.com/company/DIGIFUND"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="hover:text-blue-400"
                            >
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="sm:col-span-1 md:col-span-1 lg:col-span-2 space-y-3 md:space-y-4">
                        <h4 className="text-base md:text-lg font-semibold text-white">
                            Lĩnh vực
                        </h4>
                        <ul className="space-y-2 md:space-y-3">
                            {serviceLinks.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-sm md:text-base text-gray-400 hover:text-primary-400 transition-colors duration-300"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="sm:col-span-1 md:col-span-1 lg:col-span-2 space-y-3 md:space-y-4">
                        <h4 className="text-base md:text-lg font-semibold text-white">
                            Công ty
                        </h4>
                        <ul className="space-y-2 md:space-y-3">
                            {companyLinks.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-sm md:text-base text-gray-400 hover:text-primary-400 transition-colors duration-300"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="sm:col-span-2 md:col-span-2 lg:col-span-4 space-y-3 md:space-y-4">
                        <h4 className="text-base md:text-lg font-semibold text-white">
                            Liên hệ
                        </h4>
                        <div className="space-y-2 md:space-y-3">
                            <p className="flex items-start text-sm md:text-base text-gray-400">
                                <span className="w-5 mr-2 md:mr-3 flex-shrink-0 mt-0.5">
                                    <FaMapMarkerAlt className="w-4 h-4" />
                                </span>
                                <a
                                    href="https://maps.google.com/?q=156+Nam+Kỳ+Khởi+Nghĩa+Phường+Bến+Nghé+Quận+1+Thành+phố+Hồ+Chí+Minh"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-primary-400 transition-colors duration-300"
                                    itemProp="address"
                                    itemScope
                                    itemType="https://schema.org/PostalAddress"
                                >
                                    <span itemProp="streetAddress">
                                        Số 156 Đường Nam Kỳ Khởi Nghĩa
                                    </span>
                                    , {/* Added space */}
                                    <span itemProp="addressLocality">
                                        Phường Bến Nghé
                                    </span>
                                    , {/* Added space */}
                                    <span itemProp="addressRegion">Quận 1</span>
                                    , {/* Added space */}
                                    <span itemProp="addressCountry">
                                        Thành phố Hồ Chí Minh, Việt Nam
                                    </span>
                                </a>
                            </p>
                            <p className="flex items-center text-sm md:text-base text-gray-400">
                                <span className="w-5 mr-2 md:mr-3 flex-shrink-0">
                                    📞
                                </span>
                                <a
                                    href="tel:0287.3033268"
                                    className="hover:text-primary-400 transition-colors duration-300"
                                    itemProp="telephone"
                                >
                                    02873.033.268
                                </a>
                            </p>
                            <p className="flex items-center text-sm md:text-base text-gray-400">
                                <span className="w-5 mr-2 md:mr-3 flex-shrink-0">
                                    📱
                                </span>
                                <a
                                    href="tel:0938065499"
                                    className="hover:text-primary-400 transition-colors duration-300"
                                    itemProp="telephone"
                                >
                                    Hotline: 0938.065.499
                                </a>
                            </p>
                            <p className="flex items-center text-sm md:text-base text-gray-400">
                                <span className="w-5 mr-2 md:mr-3 flex-shrink-0">
                                    ✉️
                                </span>
                                <a
                                    href="mailto:info@digifund.tech"
                                    className="hover:text-primary-400 transition-colors duration-300"
                                    itemProp="email"
                                >
                                    info@digifund.tech
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-10 md:mt-12 lg:mt-16 pt-6 md:pt-8 border-t border-gray-800">
                    <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                        <p className="text-xs md:text-sm text-gray-400 text-center sm:text-left">
                            &copy; {new Date().getFullYear()}{" "}
                            <span itemProp="name">
                                CÔNG TY CỔ PHẦN CÔNG NGHỆ DIGIFUND
                            </span>
                            . All rights reserved.
                        </p>
                        <div className="flex space-x-4 md:space-x-6">
                            <Link
                                href="/terms-of-use"
                                className="text-xs md:text-sm text-gray-400 hover:text-primary-400"
                            >
                                Điều khoản sử dụng
                            </Link>
                            <Link
                                href="/privacy-policy"
                                className="text-xs md:text-sm text-gray-400 hover:text-primary-400"
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
