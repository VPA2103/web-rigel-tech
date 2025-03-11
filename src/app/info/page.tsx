"use client";
import { Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa"; // Add this import

// Remove viewport export since it's now in layout.tsx

const formatPhoneNumber = (phone: string, isEnglish: boolean) => {
    if (!phone) return "";

    if (isEnglish) {
        // Convert 0xxxxxxxxx to +84 xxx xxx xxx
        return (
            "+84 " +
            phone.substring(1).replace(/(\d{3})(\d{3})(\d{3})/, "$1 $2 $3")
        );
    }
    // Vietnamese format 0xxx.xxx.xxx
    return phone.replace(/(\d{4})(\d{3})(\d{3})/, "$1.$2.$3");
};

// Define a type for our team member data
type TeamMember = {
    id: string;
    name: {
        vi: string;
        en: string;
    };
    position: {
        vi: string;
        en: string;
    };
    phone?: string;
    mobile: string;
    email: string;
    qrCode: string;
};

// Array of team members data
const teamMembers: TeamMember[] = [
    {
        id: "1",
        name: {
            vi: "Huỳnh Nhựt Trường",
            en: "Huynh Nhut Truong",
        },
        position: {
            vi: "Giám Đốc Điều Hành - Nhà Sáng Lập",
            en: "CEO - Founder",
        },
        phone: "02873033268",
        mobile: "0938065499",
        email: "truong.huynh@digifund.tech",
        qrCode: "/qr-code-truong.png",
    },
    {
        id: "2",
        name: {
            vi: "Thiều Quang Thiên",
            en: "Thieu Quang Thien",
        },
        position: {
            vi: "Cố Vấn Tài Chính - Đồng Sáng Lập",
            en: "Financial Advisor - Co-Founder",
        },
        mobile: "0909671618",
        email: "thien.thieu@digifund.tech",
        qrCode: "/qr-code-thien.png",
    },
    {
        id: "3",
        name: {
            vi: "Phạm Minh Quang",
            en: "Pham Minh Quang",
        },
        position: {
            vi: "Quản Lý Mobile App",
            en: "Mobile App Manager",
        },
        mobile: "0921999393",
        email: "quang.pham@digifund.tech",
        qrCode: "/qr-code-quang.png",
    },
    {
        id: "4",
        name: {
            vi: "Nguyễn Văn Tuấn",
            en: "Nguyen Van Tuan",
        },
        position: {
            vi: "Leader",
            en: "Leader",
        },
        mobile: "0835666356",
        email: "tuan.nguyen@digifund.tech",
        qrCode: "/qr-code-tuan.png",
    },
    {
        id: "5",
        name: {
            vi: "Nguyễn Thanh Hậu",
            en: "Nguyen Thanh Hau",
        },
        position: {
            vi: "Quản Lý DevOps",
            en: "DevOps Manager",
        },
        mobile: "0914696665",
        email: "hau.nguyen@digifund.tech",
        qrCode: "/qr-code-hau.png",
    },
    {
        id: "6",
        name: {
            vi: "Nguyễn Tiến Đạt",
            en: "Nguyen Tien Dat",
        },
        position: {
            vi: "Trợ Lý Giám Đốc",
            en: "Assistant Director",
        },
        mobile: "0988666888",
        email: "dat.nguyen@digifund.tech",
        qrCode: "/qr-code-dat.png",
    },
];

// Client component for business card display
function BusinessCardClient() {
    const searchParams = useSearchParams();
    const [member, setMember] = useState<TeamMember | null>(null);

    useEffect(() => {
        const id = searchParams.get("id");
        // Find member by ID or default to first team member
        const foundMember = id
            ? teamMembers.find((m) => m.id === id)
            : teamMembers[0];

        setMember(foundMember || teamMembers[0]);
    }, [searchParams]);

    if (!member)
        return <div className="text-white text-center">Loading...</div>;

    return (
        <div className="max-w-4xl mx-auto">
            {/* Vietnamese Business Card */}
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden w-full max-w-md mx-auto">
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
                        <h1 className="text-l font-bold text-[#ffbd59] -mt-2">
                            DIGIFUND
                        </h1>
                    </div>

                    {/* Header - Director name on LEFT */}
                    <div className="mb-8 mt-2">
                        <div className="max-w-[70%]">
                            <h2 className="text-xl font-bold text-gray-800 whitespace-nowrap">
                                {member.name.vi}
                            </h2>
                            <p className="text-[12px] sm:text-[14px] text-primary-600 font-medium">
                                {member.position.vi}
                            </p>
                        </div>
                    </div>

                    {/* Company full name - now below both sections */}
                    <div className="text-center mb-2">
                        <p className="text-xs text-gray-500">
                            CÔNG TY CỔ PHẦN CÔNG NGHỆ DIGIFUND
                        </p>
                        <p className="text-xs text-gray-500">MST: 0318817989</p>
                    </div>

                    {/* Divider */}
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-primary-300 to-transparent mb-4"></div>

                    {/* Contact Information */}
                    <div className="grid grid-cols-1 gap-3">
                        {member.phone && (
                            <div className="flex items-center text-sm text-gray-700">
                                <span className="text-primary-600 mr-3 w-6 text-center">
                                    📞
                                </span>
                                <a
                                    href={`tel:${member.phone}`}
                                    className="hover:text-primary-600 transition-colors"
                                >
                                    {formatPhoneNumber(member.phone, false)}
                                </a>
                            </div>
                        )}
                        <div className="flex items-center text-sm text-gray-700">
                            <span className="text-primary-600 mr-3 w-6 text-center">
                                📱
                            </span>
                            <a
                                href={`tel:${member.mobile}`}
                                className="hover:text-primary-600 transition-colors"
                            >
                                {formatPhoneNumber(member.mobile, false)}
                            </a>
                        </div>
                        <div className="flex items-start text-sm text-gray-700">
                            <span className="text-primary-600 mr-3 w-6 text-center">
                                <FaMapMarkerAlt className="w-6 h-5 mx-auto" />
                            </span>
                            <a
                                href="https://maps.app.goo.gl/2sGGhNsj73ecWaaU7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary-600 transition-colors"
                            >
                                Số 156 Đường Nam Kỳ Khởi Nghĩa, Phường Bến Nghé,
                                Quận 1, Thành phố Hồ Chí Minh
                            </a>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                            <span className="text-primary-600 mr-3 w-6 text-center">
                                ✉️
                            </span>
                            <a
                                href={`mailto:${member.email}`}
                                className="hover:text-primary-600 transition-colors"
                            >
                                {member.email}
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
                            src={member.qrCode}
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
                        <h1 className="text-l font-bold text-[#ffbd59] -mt-2">
                            DIGIFUND
                        </h1>
                    </div>

                    {/* Header - Director name on LEFT */}
                    <div className="mb-8 mt-2">
                        <div className="max-w-[70%]">
                            <h2 className="text-xl font-bold text-gray-800 whitespace-nowrap">
                                {member.name.en}
                            </h2>
                            <p className="text-[12px] sm:text-[14px] text-primary-600 font-medium">
                                {member.position.en}
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
                        {member.phone && (
                            <div className="flex items-center text-sm text-gray-700">
                                <span className="text-primary-600 mr-3 w-6 text-center">
                                    📞
                                </span>
                                <a
                                    href={`tel:${member.phone}`}
                                    className="hover:text-primary-600 transition-colors"
                                >
                                    {formatPhoneNumber(member.phone, true)}
                                </a>
                            </div>
                        )}
                        <div className="flex items-center text-sm text-gray-700">
                            <span className="text-primary-600 mr-3 w-6 text-center">
                                📱
                            </span>
                            <a
                                href={`tel:${member.mobile}`}
                                className="hover:text-primary-600 transition-colors"
                            >
                                {formatPhoneNumber(member.mobile, true)}
                            </a>
                        </div>
                        <div className="flex items-start text-sm text-gray-700">
                            <span className="text-primary-600 mr-3 w-6 text-center">
                                <FaMapMarkerAlt className="w-6 h-5 mx-auto" />
                            </span>
                            <a
                                href="https://maps.app.goo.gl/2sGGhNsj73ecWaaU7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary-600 transition-colors"
                            >
                                156 Nam Ky Khoi Nghia Street, Ben Nghe Ward,
                                District 1, Ho Chi Minh City
                            </a>
                        </div>
                        <div className="flex items-center text-sm text-gray-700">
                            <span className="text-primary-600 mr-3 w-6 text-center">
                                ✉️
                            </span>
                            <a
                                href={`mailto:${member.email}`}
                                className="hover:text-primary-600 transition-colors"
                            >
                                {member.email}
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
                            src={member.qrCode}
                            alt="QR Code"
                            width={80}
                            height={80}
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

// Export the main page component
export default function InfoPage() {
    return (
        <div className="min-h-screen py-16 md:py-24 flex items-center justify-center bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900">
            <div className="container mx-auto px-4">
                <Suspense
                    fallback={
                        <div className="text-white text-center">Loading...</div>
                    }
                >
                    <BusinessCardClient />
                </Suspense>
            </div>
        </div>
    );
}
