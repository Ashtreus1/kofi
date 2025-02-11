import { ShinyButton } from './ui/magicui/shiny-button';
import Navbar from '@/components/navbar';

import Link from 'next/link';
import { icons } from '@/data/icons';

export default function Hero() {
    return (
        <div className="relative min-h-screen flex flex-col justify-center items-center w-full">
            <div className="absolute top-0 z-10 w-full p-5 text-gray-200">
                <Navbar />
            </div>
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(/background.jpg)` }} />
            <div className="absolute inset-0 bg-black opacity-80" />

            <p className='relative text-md text-[#8ee38e] uppercase tracking-wider'>Over with 12k followers looking for us</p>
            <h1 className="relative text-7xl font-noto-serif text-white w-[550px] text-center">
                More than just a coffee
            </h1>
            <ShinyButton
                className='w-[300px] bg-transparent mt-3 p-5 font-semibold border border-white'
            >
                Place an order
            </ShinyButton>

            <div className="absolute bottom-10 z-10 w-full p-5 text-gray-200">
                <ul className='flex items-center gap-10 ml-10'>
                    {icons.map((icon) => (
                        <Link href={icon.href} key={icon.name}>
                            <li key={icon.name} className='cursor-pointer hover:text-green-500 transition-colors'>
                                <icon.url />
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    )
}