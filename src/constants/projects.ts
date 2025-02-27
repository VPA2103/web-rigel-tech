export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    tech: string[];
    year: string;
    fullDescription: string;
    challenge: string;
    solution: string;
    results: string[];
    gallery: string[];
}

export const projects: Project[] = [
    {
        id: "ecommerce-platform",
        title: "E-commerce Platform",
        description:
            "Built a full-featured e-commerce platform using Next.js...",
        image: "/projects/ecommerce.jpg",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
        year: "2023",
        fullDescription:
            "A comprehensive e-commerce solution built for modern retail needs...",
        challenge:
            "The client needed a scalable e-commerce platform that could handle high traffic...",
        solution:
            "We implemented a microservices architecture using Next.js and Node.js...",
        results: [
            "50% increase in conversion rate",
            "30% improvement in page load time",
            "99.9% uptime achievement",
        ],
        gallery: [
            "/projects/ecommerce/gallery1.jpg",
            "/projects/ecommerce/gallery2.jpg",
            "/projects/ecommerce/gallery3.jpg",
        ],
    },
    // ...Add other projects
];
