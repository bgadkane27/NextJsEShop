import Link from "next/link";

export default function Dashboard() {
    return (
        <main className="min-h-screen">
            <h1>Dashboard</h1>
            <Link href="/admin">
                Admin Panel
            </Link>
        </main>
    )
}