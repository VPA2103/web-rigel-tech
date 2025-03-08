"use client";
import { useRouter, useParams } from "next/navigation";
import { useEffect } from "react";

export default function MemberRedirect() {
    const router = useRouter();
    const params = useParams();

    useEffect(() => {
        if (params.id) {
            router.push(`/info?id=${params.id}`);
        }
    }, [params.id, router]);

    return null;
}
