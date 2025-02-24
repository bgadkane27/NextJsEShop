"use client";

import { AlignJustify } from "lucide-react";

export default function Header() {
    return (
        <section className="border-b px-5 py-4 bg-[#707EFF]">
            <button>
                <AlignJustify color="white" className="h-5" />
            </button>
            {/* <h1 className="text-xl font-medium">Dashboard</h1> */}
        </section>
    )
}