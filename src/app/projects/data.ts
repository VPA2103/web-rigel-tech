export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    tech: string[];
    year: string;
    fullDescription: string;
    challenge: string;
    solution: string;
    results: string[];
    gallery: string[];
}

export const projects: Project[] = [
    {
        id: "project-1",
        title: "Credit Fund Mobile App",
        description:
            "Developed a comprehensive mobile application for credit fund services including lending, savings, and money transfer features using React Native and Node.js.",
        image: "/projects/project-1.PNG",
        tech: ["React Native", "Spring Boot", "My SQL", "Redux"],
        year: "2025",
        fullDescription:
            "Ứng dụng di động toàn diện cho quỹ tín dụng, cung cấp các tính năng cho vay, tiết kiệm và chuyển tiền. Hệ thống tích hợp đầy đủ các quy trình từ đăng ký khoản vay, quản lý tiết kiệm đến giao dịch chuyển tiền an toàn.",
        challenge:
            "Xây dựng hệ thống bảo mật cao, đáp ứng các quy định về tài chính, xử lý giao dịch realtime và tích hợp nhiều phương thức thanh toán khác nhau.",
        solution:
            "Triển khai kiến trúc microservices, sử dụng mã hóa end-to-end cho dữ liệu nhạy cảm, và áp dụng các chuẩn bảo mật trong ngành tài chính.",
        results: [
            "Xử lý hơn 10,000 giao dịch mỗi ngày",
            "Giảm 70% thời gian xử lý khoản vay",
            "Tăng 45% số lượng khách hàng mới",
            "Đạt 99.99% uptime hệ thống",
        ],
        gallery: [
            "/projects/project-1.PNG",
            "/projects/project-1.1.PNG",
            "/projects/project-1.2.PNG",
        ],
    },
    {
        id: "project-2",
        title: "Loan Management Dashboard",
        description:
            "Xây dựng hệ thống quản lý cho vay toàn diện với dashboard theo dõi dữ liệu khách hàng, khoản vay và hiệu suất nhân viên.",
        image: "/projects/project-2.png",
        tech: ["NextJs", "Spring Boot", "My SQL", "Material-UI"],
        year: "2025",
        fullDescription:
            "Hệ thống quản lý dành cho quản trị viên và nhân viên, cung cấp công cụ phân tích dữ liệu cho vay, theo dõi khách hàng và đánh giá hiệu suất nhân viên. Dashboard trực quan hóa các chỉ số KPI quan trọng và tự động hóa quy trình phê duyệt khoản vay.",
        challenge:
            "Xử lý và phân tích lượng lớn dữ liệu, tạo báo cáo real-time, và thiết kế giao diện người dùng trực quan cho nhiều vai trò khác nhau.",
        solution:
            "Sử dụng My SQL cho khả năng mở rộng cao, xây dựng API hiệu suất cao với Node.js, và thiết kế UI thân thiện với Material-UI.",
        results: [
            "Giảm 60% thời gian xử lý hồ sơ vay",
            "Tăng 40% hiệu suất nhân viên",
            "Cải thiện 50% độ chính xác trong đánh giá rủi ro",
            "Xử lý trên 5000 hồ sơ vay mỗi tháng",
        ],
        gallery: ["/projects/project-2.png"],
    },
];
