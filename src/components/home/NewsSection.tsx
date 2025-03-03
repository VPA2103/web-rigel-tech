import Image from "next/image";
import Link from "next/link";
import { getLatestNews } from "@/app/news/data";

export default function NewsSection() {
    const popularNews = getLatestNews();

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
                    Tin tức nổi bật
                </h2>
                <p className="text-white/80 text-center mb-12 max-w-2xl mx-auto">
                    Cập nhật những tin tức mới nhất về công nghệ và tài chính số
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {popularNews.map((news) => (
                        <Link
                            href={`/news/${news.id}`}
                            key={news.id}
                            className="h-full"
                        >
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                                <div className="relative h-48">
                                    <Image
                                        src={news.image}
                                        alt={news.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="text-sm text-primary-600 mb-2">
                                        {news.date}
                                    </div>
                                    <h3 className="font-bold text-xl mb-3 text-white">
                                        {news.title}
                                    </h3>
                                    <p className="text-white/80 line-clamp-3 flex-1">
                                        {news.excerpt}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
