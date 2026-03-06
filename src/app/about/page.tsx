import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="pt-28 pb-20">
            <div className="container mx-auto px-4">
                {/* Company Introduction */}
                <section className="mb-16">
                    <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800 mt-10">
                        Về chúng tôi
                    </h1>
                    <p className="text-lg mb-6">
                        Rigel Tech là công ty công nghệ trẻ với khát vọng trở thành đơn vị tiên phong trong lĩnh vực phát triển phần mềm và chuyển đổi số tại Việt Nam. Chúng tôi luôn đón đầu xu hướng công nghệ mới và không ngừng đổi mới để phát triển các giải pháp số hiệu quả.
                    </p>
                </section>

                {/* Mission & Vision */}
                <section className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-4 text-primary-600">
                            Tầm nhìn
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Rigel Tech hướng tới trở thành công ty công nghệ phần mềm và chuyển đổi số hàng đầu tại Việt Nam. Chúng tôi tiên phong nghiên cứu, sáng tạo để cung cấp các sản phẩm và giải pháp công nghệ chất lượng cao, đáp ứng nhu cầu xã hội, góp phần nâng cao chất lượng cuộc sống người Việt và khẳng định vị thế Việt Nam trên thị trường quốc tế.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-4 text-primary-600">
                            Sứ mệnh
                        </h2>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                            Là công ty công nghệ luôn ứng biến nhanh và không ngừng nâng cao năng lực sáng tạo, chúng tôi hướng tới việc đóng vai trò chủ lực trong quá trình chuyển đổi kinh tế số 4.0 của Việt Nam.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            RIGEL TECH mang trên mình sứ mệnh cung cấp các giải pháp công nghệ, sản phẩm phần mềm, dịch vụ số và các sản phẩm thông minh chất lượng cao trong các lĩnh vực như viễn thông, tài chính – ngân hàng, đào tạo, giải trí và chuyển giao công nghệ, góp phần thúc đẩy quá trình công nghiệp hóa, hiện đại hóa đất nước trong bối cảnh hội nhập kinh tế thế giới.
                        </p>
                    </div>
                </section>

                {/* Core Values */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center">
                        Giá trị cốt lõi
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold mb-4 text-primary-600">
                                Đối với khách hàng
                            </h3>
                            <p className="text-gray-700">
                                Cam kết cung cấp sản phẩm chất lượng và dịch vụ
                                tốt nhất
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold mb-4 text-primary-600">
                                Đối với nhân viên
                            </h3>
                            <p className="text-gray-700">
                                Xây dựng môi trường làm việc chuyên nghiệp, năng
                                động, sáng tạo và nhân văn, tạo điều kiện thu
                                nhập cao và cơ hội phát triển công bằng
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold mb-4 text-primary-600">
                                Đối với xã hội
                            </h3>
                            <p className="text-gray-700">
                                Hài hòa lợi ích doanh nghiệp với lợi ích xã hội,
                                đóng góp tích cực vào các hoạt động hướng về
                                cộng đồng, thể hiện tinh thần trách nhiệm đối
                                với xã hội
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold mb-4 text-primary-600">
                                Đối với công ty
                            </h3>
                            <p className="text-gray-700">
                                Tạo ra giá trị cho công ty luôn luôn sáng tạo
                                mang trí tuệ, kiến thức và công nghệ phục vụ cho
                                phát triển đất nước là ưu tiên hàng đầu
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact CTA */}
                <section className="text-center bg-gradient-to-r from-primary-50 to-primary-100 p-12 rounded-xl shadow-lg border border-primary-200">
                    <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
                        Sẵn sàng bắt đầu dự án của bạn?
                    </h2>
                    <p className="mb-8 text-lg text-gray-700 max-w-2xl mx-auto">
                        Hãy để Rigel Tech đồng hành cùng bạn trong việc xây dựng
                        giải pháp công nghệ hiện đại và phù hợp nhất cho doanh
                        nghiệp
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="/contact"
                            className="bg-primary-600 text-white px-8 py-4 rounded-full hover:bg-primary-700 transition-colors text-lg font-semibold min-w-[200px] inline-block"
                        >
                            Liên hệ tư vấn
                        </Link>
                        {/* <button className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-full hover:bg-primary-50 transition-colors text-lg font-semibold min-w-[200px]">
                            Xem portfolio
                        </button> */}
                    </div>
                </section>
            </div>
        </main>
    );
}
