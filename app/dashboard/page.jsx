"use client";

import Link from "next/link";
export default function Dashboard() {
    return (
        <main className="min-h-screen">
            <h1>Dashboard</h1>
            <div className="flex py-5">
                <Link href="/admin">
                    Redirect to Admin Panel
                </Link>
            </div>
        </main>
    )
}