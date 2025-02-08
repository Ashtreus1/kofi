export default function Navbar() {
    const navItems = [
        {
            name: "Home",
            url: "/",
        },
        {
            name: "Products",
            url: "#products",
        },
        {
            name: "Our Store",
            url: "#store",
        },
        {
            name: "About",
            url: "#about",
        },
        {
            name: "Contact",
            url: "#contact",
        },
    ]
    return (
        <div className="fixed top-0 w-full p-5 text-gray-200">
            <div className="flex justify-around items-center w-full">
                <h1 className="text-3xl font-noto-serif">KoFi Roasters</h1>
                <ul className="flex items-center gap-14">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <a href={item.url} className="text-sm uppercase font-semibold">{item.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}