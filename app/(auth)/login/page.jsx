"use client"

import { Button } from "@heroui/react";
import Link from "next/link";

export default function LoginPage() {
    return (
        <main className="w-full min-h-screen flex items-center justify-center">
            <section className="flex flex-col gap-2 bg-white rounded-xl p-4">
                <div className="flex flex-col items-center justify-center gap-4">
                    <img src="/logo.webp" alt="logo"
                        className="h-12"
                    />
                    <span className="text-xl font-medium text-blue-600">The Best E-Commerce Platform</span>
                </div>
                <div className="min-w-[400px]">
                    {/* <h1>Login with Email</h1> */}
                    <form className="flex flex-col gap-4">
                        <input type="email" name="user-email" id="user-email" placeholder="Enter an email"
                            className="w-full h-10 border-b-2 px-2 focus-visible:outline-none focus:border-b-blue-600"
                        />
                        <input type="password" name="user-password" id="user-password" placeholder="Enter a password"
                            className="w-full h-10 border-b-2 px-2 focus-visible:outline-none focus:border-b-blue-600"
                        />
                        <div className="flex justify-between">
                            <Link href="/forgot-password">
                                <button className="text-blue-600 text-sm font-medium hover:bg-blue-100 px-2 rounded-xl">
                                    New user? Sign up</button>
                            </Link>
                            <Link href="/forgot-password">
                                <button className="text-blue-600 text-sm font-medium hover:bg-blue-100 px-2 rounded-xl">
                                    Forgot password?</button>
                            </Link>
                        </div>
                        <Button color="primary" className="text-md">Sign in</Button>
                    </form>
                </div>
                <hr />
                <Button color="primary" variant="faded" className="mt-2">Continue with Google</Button>
            </section>
        </main>
    )

}