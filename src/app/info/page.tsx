import Image from "next/image";
import { Viewport } from "next";

// Define viewport separately - remove duplicate metadata since it's in layout.tsx
export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
};

export default function InfoPage() {
    return (
        <div className="min-h-screen py-16 md:py-24 flex items-center justify-center bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Vietnamese Business Card */}
                    <div className="bg-white rounded-lg shadow-2xl overflow-hidden w-full max-w-md mx-auto">
                        {/* Main Card Content */}
                        <div className="p-8 relative">
                            {/* Company Logo - TOP RIGHT position */}
                            <div className="absolute top-4 right-4 flex flex-col items-center">
                                <Image
                                    src="/logo-nobackground.png"
                                    alt="DIGIFUND Logo"
                                    width={80}
                                    height={80}
                                    className="h-14 w-14 object-contain"
                                />
                                {/* Centered company name under logo */}
                                <h1 className="text-l font-bold text-[#ffbd59]">
                                    DIGIFUND
                                </h1>
                            </div>

                            {/* Header - Director name on LEFT */}
                            <div className="mb-8 mt-2">
                                {/* Director's Name & Position - LEFT */}
                                <div className="max-w-[60%]">
                                    <h2 className="text-xl font-bold text-gray-800 whitespace-nowrap">
                                        Huỳnh Nhựt Trường
                                    </h2>
                                    <p className="text-sm text-primary-600 font-medium">
                                        CEO & Founder
                                    </p>
                                </div>
                            </div>

                            {/* Company full name - now below both sections */}
                            <div className="text-center mb-2">
                                <p className="text-xs text-gray-500">
                                    CÔNG TY CỔ PHẦN CÔNG NGHỆ DIGIFUND
                                </p>
                                <p className="text-xs text-gray-500">
                                    MST: 0318817989
                                </p>
                            </div>

                            {/* Divider */}
                            <div className="h-px w-full bg-gradient-to-r from-transparent via-primary-300 to-transparent mb-4"></div>

                            {/* Contact Information */}
                            <div className="grid grid-cols-1 gap-3">
                                <div className="flex items-center text-sm text-gray-700">
                                    <span className="text-primary-600 mr-3 w-6 text-center">
                                        📞
                                    </span>
                                    <a
                                        href="tel:02873033268"
                                        className="hover:text-primary-600 transition-colors"
                                    >
                                        02873.033.268
                                    </a>
                                </div>
                                <div className="flex items-center text-sm text-gray-700">
                                    <span className="text-primary-600 mr-3 w-6 text-center">
                                        📱
                                    </span>
                                    <a
                                        href="tel:0938065499"
                                        className="hover:text-primary-600 transition-colors"
                                    >
                                        0938.065.499
                                    </a>
                                </div>
                                <div className="flex items-center text-sm text-gray-700">
                                    <span className="text-primary-600 mr-3 w-6 text-center">
                                        📍
                                    </span>
                                    <a
                                        href="https://maps.app.goo.gl/2sGGhNsj73ecWaaU7"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-primary-600 transition-colors"
                                    >
                                        156 Nam Kỳ Khởi Nghĩa, P. Bến Nghé, Quận
                                        1, TP. HCM
                                    </a>
                                </div>
                                <div className="flex items-center text-sm text-gray-700">
                                    <span className="text-primary-600 mr-3 w-6 text-center">
                                        ✉️
                                    </span>
                                    <a
                                        href="mailto:truong.huynh@digifund.tech"
                                        className="hover:text-primary-600 transition-colors"
                                    >
                                        truong.huynh@digifund.tech
                                    </a>
                                </div>
                                <div className="flex items-center text-sm text-gray-700">
                                    <span className="text-primary-600 mr-3 w-6 text-center">
                                        🌐
                                    </span>
                                    <a
                                        href="https://digifund.tech"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-primary-600 transition-colors"
                                    >
                                        digifund.tech
                                    </a>
                                </div>
                            </div>

                            {/* Bottom Accent */}
                            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-500 to-primary-700"></div>

                            {/* Bottom right corner image - 50x50px */}
                            <div className="absolute bottom-2 right-2">
                                <Image
                                    src="/qr-code-info.png"
                                    alt="QR Code"
                                    width={80}
                                    height={80}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* English Business Card - Added below */}
                    <div className="bg-white rounded-lg shadow-2xl overflow-hidden w-full max-w-md mx-auto mt-10">
                        <div className="p-8 relative">
                            {/* Company Logo - TOP RIGHT position */}
                            <div className="absolute top-4 right-4 flex flex-col items-center">
                                <Image
                                    src="/logo-nobackground.png"
                                    alt="DIGIFUND Logo"
                                    width={80}
                                    height={80}
                                    className="h-14 w-14 object-contain"
                                />
                                <h1 className="text-l font-bold text-[#ffbd59]">
                                    DIGIFUND
                                </h1>
                            </div>

                            {/* Header - Director name on LEFT */}
                            <div className="mb-8 mt-2">
                                {/* Director's Name & Position - LEFT */}
                                <div className="max-w-[60%]">
                                    <h2 className="text-xl font-bold text-gray-800 whitespace-nowrap">
                                        Huynh Nhut Truong
                                    </h2>
                                    <p className="text-sm text-primary-600 font-medium">
                                        CEO & Founder
                                    </p>
                                </div>
                            </div>

                            {/* Company full name - now below both sections */}
                            <div className="text-center mb-2">
                                <p className="text-xs text-gray-500">
                                    DIGIFUND TECHNOLOGY JOINT STOCK COMPANY
                                </p>
                                <p className="text-xs text-gray-500">
                                    Tax ID: 0318817989
                                </p>
                            </div>

                            {/* Divider */}
                            <div className="h-px w-full bg-gradient-to-r from-transparent via-primary-300 to-transparent mb-4"></div>

                            {/* Contact Information */}
                            <div className="grid grid-cols-1 gap-3">
                                <div className="flex items-center text-sm text-gray-700">
                                    <span className="text-primary-600 mr-3 w-6 text-center">
                                        📞
                                    </span>
                                    <a
                                        href="tel:02873033268"
                                        className="hover:text-primary-600 transition-colors"
                                    >
                                        02873.033.268
                                    </a>
                                </div>
                                <div className="flex items-center text-sm text-gray-700">
                                    <span className="text-primary-600 mr-3 w-6 text-center">
                                        📱
                                    </span>
                                    <a
                                        href="tel:0938065499"
                                        className="hover:text-primary-600 transition-colors"
                                    >
                                        0938.065.499
                                    </a>
                                </div>
                                <div className="flex items-center text-sm text-gray-700">
                                    <span className="text-primary-600 mr-3 w-6 text-center">
                                        📍
                                    </span>
                                    <a
                                        href="https://maps.app.goo.gl/2sGGhNsj73ecWaaU7"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-primary-600 transition-colors"
                                    >
                                        156 Nam Ky Khoi Nghia St., Ben Nghe
                                        Ward, District 1, HCMC
                                    </a>
                                </div>
                                <div className="flex items-center text-sm text-gray-700">
                                    <span className="text-primary-600 mr-3 w-6 text-center">
                                        ✉️
                                    </span>
                                    <a
                                        href="mailto:truong.huynh@digifund.tech"
                                        className="hover:text-primary-600 transition-colors"
                                    >
                                        truong.huynh@digifund.tech
                                    </a>
                                </div>
                                <div className="flex items-center text-sm text-gray-700">
                                    <span className="text-primary-600 mr-3 w-6 text-center">
                                        🌐
                                    </span>
                                    <a
                                        href="https://digifund.tech"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-primary-600 transition-colors"
                                    >
                                        digifund.tech
                                    </a>
                                </div>
                            </div>

                            {/* Bottom Accent */}
                            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-500 to-primary-700"></div>

                            {/* Bottom right corner image - QR code */}
                            <div className="absolute bottom-2 right-2">
                                <Image
                                    src="/qr-code-info.png"
                                    alt="QR Code"
                                    width={80}
                                    height={80}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
