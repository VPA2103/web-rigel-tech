import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Thông tin liên hệ | DIGIFUND",
    description:
        "Thông tin liên hệ của DIGIFUND - Công ty Cổ phần Công nghệ DIGIFUND",
};

export default function InfoLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {/* No header rendered here */}
            <main>{children}</main>
            {/* No footer rendered here */}
        </>
    );
}
