import Navbar from '@/components/navbar';
import { Icons } from '@/components/constants/icons';

const icons = [
    {
        name: "facebook",
        url: Icons.facebook,
    },
    {
        name: "instagram",
        url: Icons.instagram,
    },
    {
        name: "twitter",
        url: Icons.twitter,
    },
    {
        name: "snapchat",
        url: Icons.snapchat,
    },
]

export default function Hero(){
    return(
        <div className="relative min-h-screen flex flex-col justify-center items-center w-full">
            <div className="absolute top-0 z-10 w-full p-5 text-gray-200">
                <Navbar/>
            </div>
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(/background.jpg)`}}/>
            <div className="absolute inset-0 bg-black opacity-80" />
            <h1 className="relative text-7xl font-noto-serif text-white w-[700px] text-center">
                Wake Up & Smell the Coffee.
            </h1>

            <div className="absolute bottom-10 z-10 w-full p-5 text-gray-200">
                <ul className='flex items-center gap-10 ml-10'>
                    {icons.map((icon) => (
                        <li key={icon.name}>
                            <icon.url/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}