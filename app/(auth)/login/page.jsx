"use client"

import { useAuth } from "@/contexts/AuthContext";
import { auth } from "@/lib/firebase";
import { Button } from "@heroui/react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { LogIn } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function LoginPage() {
    const { user } = useAuth();
    const router = useRouter();
    useEffect(() => {
        if(user){
            router.push("/dashboard");
        }
    },[user]);
    return (
        <main className="w-full min-h-screen flex items-center justify-center bg-gray-100">
            <section className="flex flex-col gap-2 bg-white rounded-xl p-4">
                <div className="flex flex-col items-center justify-center gap-4 p-4">
                    <img src="/logo.webp" alt="logo"
                        className="h-12"
                    />
                    <span className="text-xl font-medium text-blue-600 ">The Best E-Commerce Platform</span>
                </div>
                <div className="md:min-w-[400px] w-full">
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
                                    New? Sign up</button>
                            </Link>
                            <Link href="/forgot-password">
                                <button className="text-blue-600 text-sm font-medium hover:bg-blue-100 px-2 rounded-xl">
                                    Forgot password?</button>
                            </Link>
                        </div>
                        <Button color="primary" className="text-md"><LogIn className="w-5 h-4" />Sign in</Button>
                    </form>
                </div>
                <hr />
                {/* <Button color="primary" variant="faded" className="mt-2">Continue with Google</Button> */}
                <SignInWithGoogleComponent />
            </section>
        </main>
    )

}

function SignInWithGoogleComponent(){
    const [isLoading, setIsLoading] = useState(false);
    const handleLogin = async()=>{
        setIsLoading(true);
        try {
          const result  = await signInWithPopup(auth, new GoogleAuthProvider());
          const user = result.user; 
            toast.success(`Authenticated as ${user.email}`);
        } catch (error) {
            toast.error("An error occured during sign in.");
        }
        setIsLoading(false);
    }
    return <Button 
    color="primary" 
    variant="faded" 
    className="mt-1"
    onPress={handleLogin}
    isLoading={isLoading}
    isDisabled={isLoading}
    ><img src="/google-logo.svg" alt="Google Logo" className="h-5"/>Continue with Google</Button>
}