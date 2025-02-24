"use client";

import Header from "./Header";
import Sidebar from "./Sidebar";

export default function AdminLayout({ children }) {
    return (
        <main className="flex h-screen">
            <Sidebar />
            <section className="flex-1 flex flex-col">
                <Header />
                <section className="flex-1">
                    {children}
                </section>
            </section>
        </main>
    )
}