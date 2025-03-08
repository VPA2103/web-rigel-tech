"use client";

import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { usePathname } from "next/navigation";

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const showHeaderFooter = !pathname.startsWith("/info");

    return (
        <>
            {showHeaderFooter && <Header />}
            {children}
            {showHeaderFooter && <Footer />}
        </>
    );
}
