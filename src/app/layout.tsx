import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const roboto = Roboto({
    weight: ["400", "500", "700", "900"],
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "DIGIFUND - Công nghệ tài chính số | Giải pháp Fintech hàng đầu",
    description:
        "DIGIFUND - Đối tác tin cậy trong hành trình chuyển đổi số của doanh nghiệp. Cung cấp giải pháp tài chính số, blockchain và AI tiên tiến.",
    keywords:
        "DIGIFUND, fintech, blockchain, AI, digital transformation, financial technology, công nghệ tài chính, chuyển đổi số, tài chính số",
    authors: [{ name: "DIGIFUND", url: "https://digifund.com.vn" }],
    viewport: "width=device-width, initial-scale=1",
    robots: "index, follow",
    alternates: {
        canonical: "https://digifund.com.vn",
    },
    openGraph: {
        type: "website",
        url: "https://digifund.com.vn",
        title: "DIGIFUND - Công nghệ tài chính số | Giải pháp Fintech hàng đầu",
        description:
            "DIGIFUND - Đối tác tin cậy trong hành trình chuyển đổi số của doanh nghiệp",
        siteName: "DIGIFUND",
        images: [{ url: "/images/og-image.jpg" }],
    },
    twitter: {
        card: "summary_large_image",
        site: "@DIGIFUND",
        title: "DIGIFUND - Công nghệ tài chính số | Giải pháp Fintech hàng đầu",
        description: "Giải pháp tài chính số và chuyển đổi số cho doanh nghiệp",
        images: [{ url: "/images/twitter-image.jpg" }],
    },
    icons: {
        icon: "/logo-nobackground.png",
        apple: "/apple-icon.png",
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
                <meta
                    name="google-site-verification"
                    content="your-verification-code"
                />
            </head>
            <body className={`${roboto.className} antialiased`}>
                <Header />
                {children}
                <Footer />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            name: "DIGIFUND",
                            url: "https://digifund.com.vn",
                            logo: "https://digifund.com.vn/logo-nobackground.png",
                            description:
                                "DIGIFUND - Đối tác tin cậy trong hành trình chuyển đổi số của doanh nghiệp.",
                            sameAs: [
                                "https://facebook.com/DIGIFUND",
                                "https://twitter.com/DIGIFUND",
                                "https://linkedin.com/company/DIGIFUND",
                            ],
                        }),
                    }}
                />
            </body>
        </html>
    );
}
