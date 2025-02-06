import Link from "next/link"

export default function Header() {
    const menuList = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "Services",
            link: "/about-us"
        },
        {
            name: "Contact",
            link: "/contact-us"
        }
    ]
    return (
        <nav className="px-2 py-3 border-b flex items-center justify-between">
            <Link href='/'>
                <img src="/logo.webp" alt=""
                    className="w-12 h-12" />
            </Link>
            <div className="flex gap-3 font-medium">
                {
                    menuList?.map((item, key) => {
                        return (
                            <Link href={item?.link} key={key}>
                                <button>{item?.name}</button>
                            </Link>
                        )
                    })
                }
            </div>
            <Link href='/login'>
                <button className="border border-blue-600 rounded-md font-semibold px-4 py-2 hover:bg-blue-600">Login</button>
            </Link>
        </nav>
    )
}