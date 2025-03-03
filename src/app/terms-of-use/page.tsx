import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Điều khoản sử dụng | DIGIFUND",
    description: "Điều khoản sử dụng dịch vụ của DIGIFUND",
};

export default function TermsOfUse() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-16 mt-16 md:mt-20">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary-600">
                    Điều khoản sử dụng
                </h1>

                <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-white/70 mb-8">
                        Cập nhật lần cuối:{" "}
                        {new Date().toLocaleDateString("vi-VN")}
                    </p>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4 text-white">
                            1. Giới thiệu
                        </h2>
                        <p className="mb-4 text-white/80">
                            Chào mừng bạn đến với DIGIFUND. Khi bạn sử dụng
                            trang web và dịch vụ của chúng tôi, bạn đồng ý tuân
                            thủ các điều khoản và điều kiện này. Vui lòng đọc kỹ
                            các điều khoản này.
                        </p>
                        <p className="text-white/80">
                            Công ty Cổ phần Công nghệ DIGIFUND có thể sửa đổi
                            các điều khoản này vào bất kỳ lúc nào bằng cách cập
                            nhật trang này. Bạn nên kiểm tra trang này thường
                            xuyên để đảm bảo bạn đã nắm được các thay đổi.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4 text-white">
                            2. Sử dụng dịch vụ
                        </h2>
                        <p className="mb-4 text-white/80">
                            Bạn đồng ý sử dụng dịch vụ của chúng tôi chỉ cho các
                            mục đích hợp pháp và theo cách không vi phạm quyền
                            của bất kỳ bên thứ ba nào. Bạn không được sử dụng
                            dịch vụ của chúng tôi:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-white/80">
                            <li>
                                Theo bất kỳ cách nào trái pháp luật hoặc gian
                                lận, hoặc có mục đích hoặc hiệu quả trái pháp
                                luật hoặc gian lận.
                            </li>
                            <li>
                                Để truyền tải hoặc mua bán bất kỳ tài liệu quảng
                                cáo hoặc khuyến mãi không được yêu cầu, hoặc bất
                                kỳ hình thức tiếp thị tương tự nào khác.
                            </li>
                        </ul>
                        <p className="text-white/80">
                            Chúng tôi có quyền từ chối dịch vụ, chấm dứt tài
                            khoản hoặc loại bỏ hoặc chỉnh sửa nội dung theo
                            quyết định riêng của mình.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4 text-white">
                            3. Quyền sở hữu trí tuệ
                        </h2>
                        <p className="mb-4 text-white/80">
                            Tất cả quyền sở hữu trí tuệ trong và đến các dịch vụ
                            của chúng tôi và tất cả nội dung được cung cấp trên
                            hoặc thông qua các dịch vụ (bao gồm nhưng không giới
                            hạn ở văn bản, đồ họa, logo, biểu tượng, hình ảnh,
                            clip âm thanh, tải xuống kỹ thuật số, tổng hợp dữ
                            liệu) thuộc về DIGIFUND hoặc người cấp phép của
                            chúng tôi.
                        </p>
                        <p className="text-white/80">
                            Bạn có thể in một bản và tải xuống các trích đoạn từ
                            trang web của chúng tôi chỉ cho mục đích sử dụng cá
                            nhân phi thương mại, với điều kiện bạn không sửa đổi
                            bất kỳ tài liệu nào và không sử dụng bất kỳ hình
                            ảnh, hình minh họa, video hoặc âm thanh một cách
                            riêng biệt với bất kỳ văn bản đi kèm nào.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4 text-white">
                            4. Trách nhiệm và bồi thường
                        </h2>
                        <p className="mb-4 text-white/80">
                            Trong phạm vi được pháp luật cho phép, DIGIFUND
                            không chịu trách nhiệm đối với bất kỳ thiệt hại nào
                            phát sinh từ việc sử dụng hoặc không thể sử dụng
                            dịch vụ của chúng tôi.
                        </p>
                        <p className="text-white/80">
                            Bạn đồng ý bảo vệ, bồi thường và giữ cho DIGIFUND và
                            các chi nhánh, giám đốc, nhân viên và đại lý của
                            chúng tôi không bị tổn hại từ bất kỳ khiếu nại,
                            trách nhiệm, thiệt hại, tổn thất và chi phí nào phát
                            sinh từ việc vi phạm các điều khoản này của bạn.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4 text-white">
                            5. Luật áp dụng và giải quyết tranh chấp
                        </h2>
                        <p className="mb-4 text-white/80">
                            Các điều khoản sử dụng này được điều chỉnh bởi luật
                            pháp Việt Nam. Bất kỳ tranh chấp nào phát sinh từ
                            hoặc liên quan đến các điều khoản này sẽ được giải
                            quyết thông qua thương lượng thiện chí giữa các bên.
                        </p>
                        <p className="text-white/80">
                            Nếu không thể giải quyết thông qua thương lượng,
                            tranh chấp sẽ được đưa ra giải quyết tại tòa án có
                            thẩm quyền ở Việt Nam.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">
                            6. Liên hệ
                        </h2>
                        <p className="text-white/80">
                            Nếu bạn có bất kỳ câu hỏi nào về Điều khoản sử dụng
                            của chúng tôi, vui lòng liên hệ với chúng tôi theo
                            địa chỉ email:{" "}
                            <a
                                href="mailto:info@digifund.tech"
                                className="text-primary-600 hover:underline"
                            >
                                info@digifund.tech
                            </a>{" "}
                            hoặc qua điện thoại:{" "}
                            <a
                                href="tel:0938065499"
                                className="text-primary-600 hover:underline"
                            >
                                0938.065.499
                            </a>
                            .
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
