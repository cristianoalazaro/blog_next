"use client"

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const ButtonBack = ({ children }: Props) => {
    const router = useRouter();

    return (
        <button 
            className="rounded bg-gradient-to-r from-pink-500 to-yellow-500 px-4 py-2 text-white hover:from-green-400 hover:to-blue-500"
            onClick={() => router.back()}>
            {children}
        </button>
    )
}

export default ButtonBack;