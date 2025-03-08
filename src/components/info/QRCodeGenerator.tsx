"use client";

import { useEffect, useState } from "react";

interface QRCodeGeneratorProps {
    size?: number;
}

export default function QRCodeGenerator({ size = 200 }: QRCodeGeneratorProps) {
    const [qrCodeUrl, setQrCodeUrl] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        // Create vCard data for the QR code
        const vCardData = `BEGIN:VCARD
VERSION:3.0
N:;DIGIFUND;;;
FN:CÔNG TY CỔ PHẦN CÔNG NGHỆ DIGIFUND
ORG:CÔNG TY CỔ PHẦN CÔNG NGHỆ DIGIFUND
TITLE:Fintech Solutions Provider
ADR;TYPE=WORK:;;156 Nam Kỳ Khởi Nghĩa, Phường Bến Nghé;Quận 1;TP. HCM;;Việt Nam
TEL;TYPE=WORK,VOICE:02873033268
TEL;TYPE=CELL,VOICE:0938065499
EMAIL;TYPE=PREF,INTERNET:info@digifund.tech
URL:https://digifund.tech
END:VCARD`;

        // Encode the vCard data for QR code URL
        const encodedVCard = encodeURIComponent(vCardData);

        // Using Google Chart API to generate QR code
        const qrUrl = `https://chart.googleapis.com/chart?cht=qr&chs=${size}x${size}&chl=${encodedVCard}&choe=UTF-8`;

        setQrCodeUrl(qrUrl);
        setIsLoading(false);
    }, [size]);

    return (
        <div className="inline-block bg-white p-4 rounded-lg shadow-lg">
            {isLoading ? (
                <div className="w-40 h-40 mx-auto bg-gray-200 animate-pulse flex items-center justify-center">
                    <p className="text-gray-500 text-sm">Loading...</p>
                </div>
            ) : (
                <div className="mx-auto w-40 h-40 flex items-center justify-center">
                    {/* Using standard img element instead of Next.js Image for external URL */}
                    <img
                        src={qrCodeUrl}
                        alt="DIGIFUND Contact QR Code"
                        className="max-w-full max-h-full object-contain"
                        width={size}
                        height={size}
                    />
                </div>
            )}
            <p className="mt-2 text-sm text-gray-600">Quét để lưu thông tin</p>
        </div>
    );
}
