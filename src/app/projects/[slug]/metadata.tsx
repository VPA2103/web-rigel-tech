import { projects } from "@/app/projects/data";
import { Metadata } from "next";

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Promise<Metadata> {
    try {
        const slug = params.slug;
        const project = projects.find((p) => p.id === slug);

        if (!project) {
            return {
                title: "Không tìm thấy dự án",
            };
        }

        return {
            title: project.title,
            description: project.fullDescription || project.description,
        };
    } catch (error) {
        console.error(error);
        return {
            title: "Đã xảy ra lỗi",
        };
    }
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.id,
    }));
}
