"use client";

import Link from "next/link";
import { Boxes, Component, Layers2, LayoutDashboard, LogOut, ShieldCheck, ShoppingCart, Sparkles, Target, UsersRound } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "@heroui/react";
import { signOut } from "firebase/auth";
import toast from "react-hot-toast";
import { auth } from "@/app/lib/firebase";

export default function Sidebar() {

    const menuList = [
        {
            name: "Dashboard",
            link: "/admin",
            icon: <LayoutDashboard className="w-5 h-5" />
        },
        {
            name: "Products",
            link: "/admin/products",
            icon: <Component className="w-5 h-5" />
        },
        {
            name: "Categories",
            link: "/admin/categories",
            icon: <Layers2 className="w-5 h-5" />
        },
        {
            name: "Brands",
            link: "/admin/brands",
            icon: <Target className="w-5 h-5" />
        },
        {
            name: "Orders",
            link: "/admin/orders",
            icon: <ShoppingCart className="w-5 h-5" />
        },
        {
            name: "Customers",
            link: "/admin/customers",
            icon: <UsersRound className="w-5 h-5" />
        },
        {
            name: "Reviews",
            link: "/admin/reviews",
            icon: <Sparkles className="w-5 h-5" />
        },
        {
            name: "Collections",
            link: "/admin/collections",
            icon: <Boxes className="w-5 h-5" />
        },
        {
            name: "Admins",
            link: "/admin/admins",
            icon: <ShieldCheck className="w-5 h-5" />
        }
    ]

    return (
        <section className="flex flex-col gap-5 py-4 w-1/5 border-r overflow-hidden justify-stretch">
            <div className="flex items-center gap-2 px-4 py-2">
                <img src="/logo.webp" alt="" className="w-10 h-10" />
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">Bruno</span>
            </div>
            <ul className="flex-1 flex flex-col gap-3 px-3">
                {
                    menuList?.map((item, key) => {
                        return (
                            <Tab item={item} key={key} />
                        )
                    })
                }
            </ul>
             <div className="flex px-4">
                <Button color="primary"
                    onPress={async() => { 
                        try{
                            await toast.promise(signOut(auth), {
                                loading: "Logging out...",
                                success: "Logged out successfully.",
                                error: (e) => e?.message
                            })
                        }catch(error){
                            toast.error(error?.message);
                        }
                    }}
                ><LogOut className="w-5 h-5" /> Logout</Button>
             </div>
        </section>
    )
}

function Tab({ item }) {
    const pathname = usePathname();
    const isSelected = pathname === item?.link;
    return (
        <Link href={item?.link}>
            <li className={`flex items-center gap-2 font-medium px-1 py-1 rounded ease-in-out transition-all duration-400
                ${isSelected ? "bg-pink-400 text-white" : "text-black"}`
            } >{item?.icon}{item?.name}</li>
        </Link>
    )
}