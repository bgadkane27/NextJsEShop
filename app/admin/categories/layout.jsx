"use client";

export default function Layout({ children }) {
    return (
        <main className="flex h-screen">
            <section className="flex-1">
                {children}
            </section>
        </main>
    )
}