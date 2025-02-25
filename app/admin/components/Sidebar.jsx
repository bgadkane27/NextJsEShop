"use client";

import Link from "next/link";
import { Boxes, Component, Layers2, LayoutDashboard, LogOut, ShieldCheck, ShoppingCart, Sparkles, Target, UsersRound } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "@heroui/react";
import { signOut } from "firebase/auth";
import toast from "react-hot-toast";
import { auth } from "@/lib/firebase";

export default function Sidebar() {

    const menuList = [
        {
            name: "Dashboard",
            link: "/admin",
            icon: <LayoutDashboard className="h-4" />
        },
        {
            name: "Products",
            link: "/admin/products", 
            icon: <Component className="h-4" />
        },
        {
            name: "Categories",
            link: "/admin/categories",
            icon: <Layers2 className="h-4" />
        },
        {
            name: "Brands",
            link: "/admin/brands",
            icon: <Target className="h-4" />
        },
        {
            name: "Orders",
            link: "/admin/orders",
            icon: <ShoppingCart className="h-4" />
        },
        {
            name: "Customers",
            link: "/admin/customers",
            icon: <UsersRound className="h-4" />
        },
        {
            name: "Reviews",
            link: "/admin/reviews",
            icon: <Sparkles className="h-4" />
        },
        {
            name: "Collections",
            link: "/admin/collections",
            icon: <Boxes className="h-4" />
        },
        {
            name: "Admins",
            link: "/admin/admins",
            icon: <ShieldCheck className="h-4" />
        }
    ]

    return (
        <section className="flex flex-col w-1/5 border-r overflow-hidden justify-stretch">
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-600 h-[60px] max-h-[60px]">
                <img src="/logo.webp" alt="" className="w-10 h-10" />
                {/* <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">Bruno</span> */}
                <span className="text-xl font-bold text-white">Bruno</span>
            </div>
            <ul className="flex-1 flex flex-col pt-4 overflow-y-auto bg-gray-100">
                {
                    menuList?.map((item, key) => {
                        return (
                            <Tab item={item} key={key} />
                        )
                    })
                }
            </ul>
            {/* <div className="flex px-4">
                <Button color="primary"
                    onPress={async () => {
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
                ><LogOut className="w-5 h-5" />Sign out</Button>
            </div> */}
        </section>
    )
}

function Tab({ item }) {
    const pathname = usePathname();
    const isSelected = pathname === item?.link;
    return (
        <Link href={item?.link}>
            <li className={`flex items-center gap-2 font-normal px-8 py-2
            ease-in-out transition-all duration-400 hover:bg-blue-100
                ${isSelected ? "bg-blue-400 text-white" : "text-black"}`
            } >{item?.icon}{item?.name}</li>
        </Link>
    )
}