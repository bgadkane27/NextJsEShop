"use client";

import AuthContextProvider, { useAuth } from "@/contexts/AuthContext";
import AdminLayout from "./components/AdminLayout";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { CircularProgress } from "@heroui/react";

export default function Layout({ children }) {
    return (
        <AuthContextProvider>
            <AdminChecking>{children}</AdminChecking>
        </AuthContextProvider>
    )
}

function AdminChecking({ children }) {
    const { user, isLoading } = useAuth();
    const router = useRouter();
    useEffect(() => {
        if(!user && !isLoading){
            router.push("/login");
        }
     }, [user, isLoading])

    if(isLoading){
        return(
            <div className="flex items-center justify-center w-full h-screen">
                <CircularProgress />
            </div>
        )
    }
    if(!user){
        return(
            <div className="flex items-center justify-center w-full h-screen">
                <h1>Please Login First!</h1>
            </div>
        )
    }
    return <AdminLayout>{children}</AdminLayout>;
}