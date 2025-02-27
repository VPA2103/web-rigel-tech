"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { getNewsBySlug } from "../data";
import { useParams } from "next/navigation";

export default function NewsDetail() {
    // Use the useParams hook to access the dynamic parameters
    const params = useParams();
    const slug = params.slug as string;
    const news = getNewsBySlug(slug);

    if (!news) {
        return (
            <main className="min-h-screen pt-32">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl text-primary-600">
                        Không tìm thấy bài viết
                    </h1>
                    <Link
                        href="/news"
                        className="text-primary-600 hover:text-primary-700"
                    >
                        ← Quay lại trang tin tức
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen">
            <article className="pt-32 pb-20">
                <div className="container mx-auto px-4 max-w-4xl">
                    {/* Breadcrumb */}
                    <div className="mb-8">
                        <Link
                            href="/news"
                            className="text-primary-600 hover:text-primary-700 flex items-center gap-2"
                        >
                            ← Quay lại Tin tức
                        </Link>
                    </div>

                    {/* Article Header */}
                    <header className="mb-8">
                        <h1 className="text-4xl font-bold text-primary-800 mb-4">
                            {news.title}
                        </h1>
                        <div className="flex items-center gap-4 text-primary-600">
                            <span>📅 {news.date}</span>
                            <span>👤 {news.author}</span>
                            <span>📂 {news.category}</span>
                            {news.views && (
                                <span>👁️ {news.views} lượt xem</span>
                            )}
                        </div>
                    </header>

                    {/* Featured Image */}
                    <div className="relative h-[400px] mb-8">
                        <Image
                            src={news.image}
                            alt={news.title}
                            fill
                            className="object-cover rounded-xl"
                            priority
                        />
                    </div>

                    {/* Article Content */}
                    <div
                        className="prose prose-lg max-w-none prose-headings:text-white prose-p:text-white/90 prose-a:text-primary-600 hover:prose-a:text-primary-700"
                        dangerouslySetInnerHTML={{ __html: news.content }}
                    />
                </div>
            </article>
        </main>
    );
}

// Add a separate metadata.tsx file for metadata
