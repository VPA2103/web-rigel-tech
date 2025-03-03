import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Chính sách bảo mật | DIGIFUND",
    description: "Chính sách bảo mật và quyền riêng tư của DIGIFUND",
};

export default function PrivacyPolicy() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-16 mt-16 md:mt-20">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary-600">
                    Chính sách bảo mật
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
                            DIGIFUND cam kết bảo vệ quyền riêng tư và thông tin
                            cá nhân của khách hàng. Chính sách bảo mật này mô tả
                            cách chúng tôi thu thập, sử dụng, tiết lộ, lưu trữ
                            và bảo vệ thông tin của bạn khi bạn sử dụng trang
                            web và dịch vụ của chúng tôi.
                        </p>
                        <p className="text-white/80">
                            Bằng cách sử dụng dịch vụ của chúng tôi, bạn đồng ý
                            với việc thu thập và sử dụng thông tin theo chính
                            sách này.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4 text-white">
                            2. Thông tin chúng tôi thu thập
                        </h2>
                        <h3 className="text-xl font-medium mb-3 text-white">
                            2.1 Thông tin bạn cung cấp cho chúng tôi
                        </h3>
                        <p className="mb-4 text-white/80">
                            Khi bạn đăng ký tài khoản, liên hệ với chúng tôi
                            hoặc sử dụng dịch vụ của chúng tôi, chúng tôi có thể
                            thu thập các thông tin sau:
                        </p>
                        <ul className="list-disc pl-6 mb-6 text-white/80">
                            <li>
                                Thông tin nhận dạng cá nhân như tên, địa chỉ
                                email, số điện thoại, địa chỉ
                            </li>
                            <li>
                                Thông tin công ty (nếu bạn đại diện cho một tổ
                                chức)
                            </li>
                            <li>
                                Thông tin thanh toán (khi bạn mua sản phẩm hoặc
                                dịch vụ)
                            </li>
                            <li>Nội dung liên lạc giữa bạn và DIGIFUND</li>
                        </ul>

                        <h3 className="text-xl font-medium mb-3 text-white">
                            2.2 Thông tin chúng tôi thu thập tự động
                        </h3>
                        <p className="mb-4 text-white/80">
                            Khi bạn truy cập trang web của chúng tôi, chúng tôi
                            có thể tự động thu thập:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-white/80">
                            <li>
                                Thông tin kỹ thuật (địa chỉ IP, loại và phiên
                                bản trình duyệt, múi giờ, hệ điều hành)
                            </li>
                            <li>
                                Thông tin về chuyến thăm của bạn (URL, thời gian
                                và thời lượng truy cập, trang bạn đã xem)
                            </li>
                            <li>Cookie và công nghệ theo dõi tương tự</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4 text-white">
                            3. Cách chúng tôi sử dụng thông tin
                        </h2>
                        <p className="mb-4 text-white/80">
                            Chúng tôi sử dụng thông tin thu thập được cho các
                            mục đích sau:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-white/80">
                            <li>
                                Cung cấp, duy trì và cải thiện dịch vụ của chúng
                                tôi
                            </li>
                            <li>
                                Xử lý giao dịch và gửi thông báo liên quan đến
                                giao dịch
                            </li>
                            <li>
                                Gửi thông tin kỹ thuật, cập nhật, thông báo bảo
                                mật và hỗ trợ
                            </li>
                            <li>
                                Phản hồi yêu cầu, câu hỏi và phản hồi của bạn
                            </li>
                            <li>
                                Nghiên cứu và phân tích xu hướng để cải thiện
                                trang web và dịch vụ của chúng tôi
                            </li>
                            <li>
                                Bảo vệ quyền, tài sản hoặc sự an toàn của
                                DIGIFUND, người dùng hoặc công chúng
                            </li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4 text-white">
                            4. Chia sẻ và tiết lộ thông tin
                        </h2>
                        <p className="mb-4 text-white/80">
                            Chúng tôi không bán thông tin cá nhân của bạn cho
                            bên thứ ba. Tuy nhiên, chúng tôi có thể chia sẻ
                            thông tin trong các trường hợp sau:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-white/80">
                            <li>
                                Với các nhà cung cấp dịch vụ giúp chúng tôi vận
                                hành dịch vụ (ví dụ: lưu trữ đám mây, xử lý
                                thanh toán)
                            </li>
                            <li>Khi có sự đồng ý của bạn</li>
                            <li>Để tuân thủ nghĩa vụ pháp lý hoặc quy định</li>
                            <li>
                                Để bảo vệ quyền, tài sản hoặc sự an toàn của
                                DIGIFUND, người dùng hoặc công chúng
                            </li>
                            <li>
                                Trong trường hợp sáp nhập, bán hoặc chuyển
                                nhượng toàn bộ hoặc một phần doanh nghiệp
                            </li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4 text-white">
                            5. Bảo mật thông tin
                        </h2>
                        <p className="mb-4 text-white/80">
                            Chúng tôi thực hiện các biện pháp bảo mật phù hợp để
                            bảo vệ thông tin cá nhân của bạn khỏi truy cập, sử
                            dụng hoặc tiết lộ trái phép. Tuy nhiên, không có
                            phương thức truyền tải qua internet hoặc phương thức
                            lưu trữ điện tử nào là an toàn tuyệt đối.
                        </p>
                        <p className="text-white/80">
                            Chúng tôi không thể đảm bảo bảo mật tuyệt đối cho dữ
                            liệu được truyền tải đến hoặc từ trang web của chúng
                            tôi.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4 text-white">
                            6. Cookie và công nghệ tương tự
                        </h2>
                        <p className="mb-4 text-white/80">
                            Chúng tôi sử dụng cookie và các công nghệ theo dõi
                            tương tự để thu thập và lưu trữ thông tin khi bạn
                            truy cập trang web của chúng tôi. Cookie giúp chúng
                            tôi cung cấp tính năng và trải nghiệm người dùng tốt
                            hơn.
                        </p>
                        <p className="text-white/80">
                            Bạn có thể cấu hình trình duyệt của mình để từ chối
                            tất cả hoặc một số cookie, hoặc để cảnh báo bạn khi
                            các trang web đặt hoặc truy cập cookie. Tuy nhiên,
                            nếu bạn tắt hoặc từ chối cookie, một số phần của
                            trang web có thể không thể truy cập được hoặc không
                            hoạt động bình thường.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4 text-white">
                            7. Quyền riêng tư của bạn
                        </h2>
                        <p className="mb-4 text-white/80">
                            Tùy thuộc vào luật pháp hiện hành, bạn có thể có các
                            quyền sau liên quan đến dữ liệu cá nhân của mình:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-white/80">
                            <li>
                                Truy cập và nhận bản sao thông tin cá nhân của
                                bạn
                            </li>
                            <li>
                                Yêu cầu chỉnh sửa hoặc cập nhật thông tin không
                                chính xác
                            </li>
                            <li>Yêu cầu xóa thông tin cá nhân của bạn</li>
                            <li>
                                Phản đối hoặc hạn chế việc xử lý dữ liệu cá nhân
                            </li>
                            <li>Quyền di chuyển dữ liệu</li>
                        </ul>
                        <p className="text-white/80">
                            Để thực hiện các quyền này, vui lòng liên hệ với
                            chúng tôi theo thông tin ở phần cuối chính sách này.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-4 text-white">
                            8. Thay đổi chính sách bảo mật
                        </h2>
                        <p className="text-white/80">
                            Chúng tôi có thể cập nhật chính sách bảo mật này
                            theo thời gian để phản ánh các thay đổi trong thực
                            tiễn bảo mật của chúng tôi hoặc vì lý do pháp lý,
                            hoạt động hoặc kỹ thuật khác. Chúng tôi sẽ thông báo
                            cho bạn về bất kỳ thay đổi quan trọng nào bằng cách
                            đăng thông báo trên trang web của chúng tôi hoặc gửi
                            email trực tiếp cho bạn.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4 text-white">
                            9. Liên hệ với chúng tôi
                        </h2>
                        <p className="text-white/80">
                            Nếu bạn có bất kỳ câu hỏi, thắc mắc hoặc yêu cầu
                            liên quan đến chính sách bảo mật này hoặc cách chúng
                            tôi xử lý thông tin cá nhân của bạn, vui lòng liên
                            hệ với chúng tôi tại:{" "}
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
