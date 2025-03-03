"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Hàm đóng menu khi chuyển trang
    const handleNavigate = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-sm">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <Link
                    href="/"
                    className="flex items-center gap-2"
                    onClick={handleNavigate}
                >
                    <Image
                        src="/logo-nobackground.png"
                        alt="DIGIFUND Logo"
                        width={40}
                        height={40}
                        className="object-contain"
                    />
                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
                        DIGIFUND
                    </span>
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2 text-primary-600 hover:text-primary-700 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {!isMenuOpen ? (
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    )}
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8">
                    <Link
                        href="/"
                        className="font-medium text-gray-700 hover:text-primary-600 transition-colors duration-200"
                        onClick={handleNavigate}
                    >
                        Trang chủ
                    </Link>
                    <Link
                        href="/about"
                        className="font-medium text-gray-700 hover:text-primary-600 transition-colors duration-200"
                        onClick={handleNavigate}
                    >
                        Giới thiệu
                    </Link>
                    <Link
                        href="/news"
                        className="font-medium text-gray-700 hover:text-primary-600 transition-colors duration-200"
                        onClick={handleNavigate}
                    >
                        Tin tức
                    </Link>
                    <Link
                        href="/services"
                        className="font-medium text-gray-700 hover:text-primary-600 transition-colors duration-200"
                        onClick={handleNavigate}
                    >
                        Dịch vụ
                    </Link>
                    <Link
                        href="/fields"
                        className="font-medium text-gray-700 hover:text-primary-600 transition-colors duration-200"
                        onClick={handleNavigate}
                    >
                        Lĩnh vực
                    </Link>
                    <Link
                        href="/projects"
                        className="font-medium text-gray-700 hover:text-primary-600 transition-colors duration-200"
                        onClick={handleNavigate}
                    >
                        Dự án
                    </Link>
                    <Link
                        href="/contact"
                        className="font-medium px-6 py-2.5 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors duration-200 shadow-sm hover:shadow-md"
                        onClick={handleNavigate}
                    >
                        Liên hệ
                    </Link>
                </nav>

                {/* Mobile & Tablet Navigation */}
                <nav
                    className={`${
                        isMenuOpen ? "flex" : "hidden"
                    } lg:hidden absolute top-20 left-0 right-0 bg-white flex-col p-4 border-t shadow-lg`}
                >
                    {/* Menu for medium screens (iPad) */}
                    <div className="hidden md:grid md:grid-cols-3 md:gap-4 md:p-4">
                        <Link
                            href="/"
                            className="py-3 px-4 font-medium text-gray-700 hover:text-primary-600 transition-colors duration-200 text-center"
                            onClick={handleNavigate}
                        >
                            Trang chủ
                        </Link>
                        <Link
                            href="/about"
                            className="py-3 px-4 font-medium text-gray-700 hover:text-primary-600 transition-colors duration-200 text-center"
                            onClick={handleNavigate}
                        >
                            Giới thiệu
                        </Link>
                        <Link
                            href="/news"
                            className="py-3 px-4 font-medium text-gray-700 hover:text-primary-600 transition-colors duration-200 text-center"
                            onClick={handleNavigate}
                        >
                            Tin tức
                        </Link>
                        <Link
                            href="/services"
                            className="py-3 px-4 font-medium text-gray-700 hover:text-primary-600 transition-colors duration-200 text-center"
                            onClick={handleNavigate}
                        >
                            Dịch vụ
                        </Link>
                        <Link
                            href="/fields"
                            className="py-3 px-4 font-medium text-gray-700 hover:text-primary-600 transition-colors duration-200 text-center"
                            onClick={handleNavigate}
                        >
                            Lĩnh vực
                        </Link>
                        <Link
                            href="/projects"
                            className="py-3 px-4 font-medium text-gray-700 hover:text-primary-600 transition-colors duration-200 text-center"
                            onClick={handleNavigate}
                        >
                            Dự án
                        </Link>
                        <Link
                            href="/contact"
                            className="md:col-span-3 mx-auto mt-2 text-center font-medium px-6 py-2.5 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors duration-200 shadow-sm hover:shadow-md w-full max-w-xs"
                            onClick={handleNavigate}
                        >
                            Liên hệ
                        </Link>
                    </div>

                    {/* Menu for small screens (Mobile) */}
                    <div className="md:hidden flex flex-col">
                        <Link
                            href="/"
                            className="py-3 px-4 font-medium text-gray-700 hover:text-primary-600 transition-colors duration-200"
                            onClick={handleNavigate}
                        >
                            Trang chủ
                        </Link>
                        <Link
                            href="/about"
                            className="py-3 px-4 font-medium text-gray-700 hover:text-primary-600 transition-colors duration-200"
                            onClick={handleNavigate}
                        >
                            Giới thiệu
                        </Link>
                        <Link
                            href="/news"
                            className="py-3 px-4 font-medium text-gray-700 hover:text-primary-600 transition-colors duration-200"
                            onClick={handleNavigate}
                        >
                            Tin tức
                        </Link>
                        <Link
                            href="/services"
                            className="py-3 px-4 font-medium text-gray-700 hover:text-primary-600 transition-colors duration-200"
                            onClick={handleNavigate}
                        >
                            Dịch vụ
                        </Link>
                        <Link
                            href="/fields"
                            className="py-3 px-4 font-medium text-gray-700 hover:text-primary-600 transition-colors duration-200"
                            onClick={handleNavigate}
                        >
                            Lĩnh vực
                        </Link>
                        <Link
                            href="/projects"
                            className="py-3 px-4 font-medium text-gray-700 hover:text-primary-600 transition-colors duration-200"
                            onClick={handleNavigate}
                        >
                            Dự án
                        </Link>
                        <Link
                            href="/contact"
                            className="mx-4 mt-3 text-center font-medium px-6 py-2.5 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors duration-200 shadow-sm hover:shadow-md"
                            onClick={handleNavigate}
                        >
                            Liên hệ
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}
