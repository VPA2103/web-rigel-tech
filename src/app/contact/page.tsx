"use client";
import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <main className="min-h-screen">
            <section className="pt-32 pb-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-primary-600 mb-6">
                            Liên Hệ Với Chúng Tôi
                        </h1>
                        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                            Hãy để lại thông tin, chúng tôi sẽ liên hệ với bạn
                            sớm nhất
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8">
                                <h3 className="text-xl font-semibold text-primary-600 mb-6">
                                    Thông Tin Liên Hệ
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-4">
                                        <span className="text-2xl">📍</span>
                                        <div>
                                            <h4 className="font-medium text-gray-800">
                                                Địa chỉ
                                            </h4>
                                            <p className="text-gray-500">
                                                156 Nam Kỳ Khởi Nghĩa, P. Bến
                                                Nghé, Q.1, TP.HCM
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <span className="text-2xl">📞</span>
                                        <div>
                                            <h4 className="font-medium text-gray-800">
                                                Điện thoại
                                            </h4>
                                            <p className="text-gray-500">
                                                (84-28) 1234 5678
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <span className="text-2xl">✉️</span>
                                        <div>
                                            <h4 className="font-medium text-gray-800">
                                                Email
                                            </h4>
                                            <p className="text-gray-500">
                                                contact@digifund.vn
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8">
                                <h3 className="text-xl font-semibold text-primary-600 mb-6">
                                    Giờ làm việc
                                </h3>
                                <div className="space-y-2">
                                    <p className="flex justify-between">
                                        <span className="text-gray-500">
                                            Thứ 2 - Thứ 6:
                                        </span>
                                        <span className="text-gray-800">
                                            8:00 - 17:00
                                        </span>
                                    </p>
                                    <p className="flex justify-between">
                                        <span className="text-gray-500">
                                            Thứ 7:
                                        </span>
                                        <span className="text-gray-800">
                                            8:00 - 17:00
                                        </span>
                                    </p>
                                    <p className="flex justify-between">
                                        <span className="text-gray-500">
                                            Chủ nhật:
                                        </span>
                                        <span className="text-gray-800">
                                            Nghỉ
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8">
                            <h3 className="text-xl font-semibold text-primary-600 mb-6">
                                Gửi tin nhắn cho chúng tôi
                            </h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Họ và tên
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                        required
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                name: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                        required
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                email: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Số điện thoại
                                    </label>
                                    <input
                                        type="tel"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                        value={formData.phone}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                phone: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Tiêu đề
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                        required
                                        value={formData.subject}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                subject: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Nội dung
                                    </label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                        required
                                        value={formData.message}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                message: e.target.value,
                                            })
                                        }
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-3 px-6 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
                                >
                                    Gửi tin nhắn
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
