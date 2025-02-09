import { icons } from '@/data/icons';

export default function Footer() {
    return (
        <footer className="bg-[#2e2e2e] flex justify-between items-center p-10 w-full text-gray-200">
            <p className="text-sm text-gray-400">856 N Park Boulevard Springfield, New Jersey 07602</p>

            <ul className='flex items-center gap-10 mr-10'>
                {icons.map((icon) => (
                    <li key={icon.name}>
                        <icon.url />
                    </li>
                ))}
            </ul>
        </footer>
    )
}