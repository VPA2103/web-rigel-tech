import { getNewsBySlug } from "../data";
import { Metadata } from "next";

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Promise<Metadata> {
    try {
        const slug = params.slug;
        const news = getNewsBySlug(slug);

        if (!news) {
            return {
                title: "Không tìm thấy bài viết",
            };
        }

        return {
            title: news.title,
            description: news.excerpt,
        };
    } catch (error) {
        console.error(error);
        return {
            title: "Đã xảy ra lỗi",
        };
    }
}
