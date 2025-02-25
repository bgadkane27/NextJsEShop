"use client";

import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { AlignJustify, LogOut } from "lucide-react";
import toast from "react-hot-toast";

export default function Header() {
    return (
        <section className="border-b px-5 py-5 bg-[#707EFF] flex justify-between h-[60px] max-h-[60px]">
            <button>
                <AlignJustify color="white" className="h-4" />
            </button>
            <button 
                    onClick={async () => {
                        try {
                            await toast.promise(signOut(auth), {
                                loading: "Signing out...",
                                success: "Sign out done successfully.",
                                error: "An error occurred during sign out."
                            })
                        } catch (error) {
                            toast.error(error?.message);
                        }
                    }}
                ><LogOut color="white" className="h-4" /></button>
            {/* <h1 className="text-xl font-medium">Dashboard</h1> */}
        </section>
    )
}