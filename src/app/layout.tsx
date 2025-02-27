import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geist = Geist({
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "DIGIFUND - Công nghệ tài chính số",
    description:
        "DIGIFUND - Đối tác tin cậy trong hành trình chuyển đổi số của doanh nghiệp",
    keywords:
        "fintech, blockchain, AI, digital transformation, financial technology",
    authors: [{ name: "DIGIFUND" }],
    viewport: "width=device-width, initial-scale=1",
    icons: {
        icon: "/logo-nobackground.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="vi">
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
                />
            </head>
            <body className={`${geist.className} antialiased`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
