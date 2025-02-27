import Image from "next/image";
import Link from "next/link";
import { getLatestNews, getPopularNews } from "./data";

export default async function NewsPage() {
    const latestNews = await getLatestNews();
    const popularNews = await getPopularNews();

    return (
        <main className="min-h-screen">
            <section className="pt-32 pb-20">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-primary-600 mb-12">
                        Tin Tức & Cập Nhật
                    </h1>

                    {/* Latest News */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-semibold text-primary-600 mb-6">
                            Tin Tức Mới Nhất
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {latestNews.map((news, index) => (
                                <Link
                                    href={`/news/${news.id}`}
                                    key={index}
                                    className="h-full"
                                >
                                    <article className="bg-white/10 backdrop-blur-sm rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
                                        <div className="relative h-48">
                                            <Image
                                                src={news.image}
                                                alt={news.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="p-6 flex flex-col flex-1">
                                            <div className="flex items-center gap-4 mb-3">
                                                <span className="text-sm text-primary-600">
                                                    {news.category}
                                                </span>
                                                <span className="text-sm text-white/70">
                                                    {news.date}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-semibold text-white mb-3">
                                                {news.title}
                                            </h3>
                                            <p className="text-white/80 line-clamp-3">
                                                {news.excerpt}
                                            </p>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Popular News */}
                    <div>
                        <h2 className="text-2xl font-semibold text-primary-600 mb-6">
                            Tin Tức Phổ Biến
                        </h2>
                        <div className="grid grid-cols-1 gap-6">
                            {popularNews.map((news, index) => (
                                <Link
                                    href={`/news/${news.id}`}
                                    key={index}
                                    className="block"
                                >
                                    <article className="bg-white/10 backdrop-blur-sm rounded-lg shadow p-4 hover:shadow-lg transition-shadow duration-300">
                                        <div className="flex gap-6">
                                            <div className="relative w-32 h-24 flex-shrink-0">
                                                <Image
                                                    src={news.image}
                                                    alt={news.title}
                                                    fill
                                                    className="object-cover rounded"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                                                    {news.title}
                                                </h3>
                                                <div className="flex items-center gap-4">
                                                    <span className="text-sm text-white/70">
                                                        👁️ {news.views} lượt xem
                                                    </span>
                                                    <span className="text-sm text-white/70">
                                                        📅 {news.date}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
