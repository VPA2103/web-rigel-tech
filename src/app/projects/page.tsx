"use client";

import Link from "next/link";
import { projects } from "@/app/projects/data";

export default function Projects() {
    return (
        <main className="min-h-screen">
            <section className="pt-32 pb-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-primary-600 mb-6">
                            Dự Án Của Chúng Tôi
                        </h1>
                        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                            Những dự án tiêu biểu mà chúng tôi đã thực hiện
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project) => (
                            <Link
                                href={`/projects/${project.id}`}
                                key={project.id}
                                className="block group h-full"
                            >
                                <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                                    <div className="flex flex-col flex-grow">
                                        <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-500 mb-4 flex-grow">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tech.map(
                                                (tech, techIndex) => (
                                                    <span
                                                        key={techIndex}
                                                        className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium"
                                                    >
                                                        {tech}
                                                    </span>
                                                ),
                                            )}
                                        </div>
                                        <div className="mt-auto flex justify-between items-center">
                                            <div className="text-sm text-gray-500">
                                                Năm: {project.year}
                                            </div>
                                            <span className="text-primary-600 group-hover:translate-x-2 transition-transform duration-300">
                                                Xem chi tiết →
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
