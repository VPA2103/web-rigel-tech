"use client";

import { projects } from "@/app/projects/data";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";

export default function ProjectDetail() {
    const params = useParams();
    const slug = params.slug as string;
    const project = projects.find((p) => p.id === slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen">
            <section className="pt-32 pb-20">
                <div className="container mx-auto px-4">
                    <Link
                        href="/projects"
                        className="inline-flex items-center text-primary-600 mb-8 hover:-translate-x-2 transition-transform duration-300"
                    >
                        ← Quay lại
                    </Link>

                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl font-bold text-primary-600 mb-4">
                            {project.title}
                        </h1>

                        <div className="flex flex-wrap gap-2 mb-8">
                            {project.tech.map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                {project.fullDescription}
                            </p>

                            <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary-600">
                                Thách thức
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                {project.challenge}
                            </p>

                            <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary-600">
                                Giải pháp
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                {project.solution}
                            </p>

                            <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary-600">
                                Kết quả
                            </h2>
                            <ul className="list-disc pl-6 space-y-2">
                                {project.results.map((result, index) => (
                                    <li
                                        key={index}
                                        className="text-gray-600 dark:text-gray-300"
                                    >
                                        {result}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-12">
                                <h2 className="text-2xl font-semibold mb-6 text-primary-600">
                                    Hình ảnh dự án
                                </h2>

                                {project.gallery.length === 1 ? (
                                    // Single image - centered with max-width
                                    <div className="flex justify-center">
                                        <div className="max-w-2xl w-full">
                                            <div className="relative rounded-lg overflow-hidden">
                                                <Image
                                                    src={project.gallery[0]}
                                                    alt={`${project.title} gallery`}
                                                    width={800}
                                                    height={500}
                                                    className="w-full h-auto"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    // Multiple images - grid layout
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {project.gallery.map((image, index) => (
                                            <div
                                                key={index}
                                                className="relative w-full rounded-lg overflow-hidden"
                                            >
                                                <Image
                                                    src={image}
                                                    alt={`${
                                                        project.title
                                                    } gallery ${index + 1}`}
                                                    width={600}
                                                    height={400}
                                                    className="w-full h-auto"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
