import Image from 'next/image';

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
    ]
    return (
        <div className="relative fixed top-0 w-full p-5 text-gray-200">
            <div className="flex justify-around items-center w-full">
                <div className='flex items-center gap-3'>
                    <Image
                        src="/icons/kura-icon.jpg"
                        width={60}
                        height={60}
                        alt="Kura Cafe icons"
                        className='rounded-full'
                    />
                    <h1 className="text-2xl font-noto-serif">Kura Cafe</h1>
                </div>
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