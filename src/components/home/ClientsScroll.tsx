"use client";

import Image from "next/image";
import { CLIENT_LOGOS } from "@/constants/images";

export default function ClientsScroll() {
    return (
        <div className="relative w-full overflow-hidden">
            <div className="inline-flex animate-smooth-scroll">
                {/* First group of logos */}
                <div className="flex">
                    {CLIENT_LOGOS.map((client) => (
                        <div
                            key={client.id}
                            className="flex-none mx-8 w-[120px]"
                        >
                            <Image
                                src={client.src}
                                alt={client.alt}
                                width={120}
                                height={60}
                                className="grayscale hover:grayscale-0 transition-all"
                            />
                        </div>
                    ))}
                </div>
                {/* Second group of logos (duplicate) */}
                <div className="flex">
                    {CLIENT_LOGOS.map((client) => (
                        <div
                            key={`${client.id}-duplicate`}
                            className="flex-none mx-8 w-[120px]"
                        >
                            <Image
                                src={client.src}
                                alt={client.alt}
                                width={120}
                                height={60}
                                className="grayscale hover:grayscale-0 transition-all"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
