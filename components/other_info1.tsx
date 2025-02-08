import Image from 'next/image';

export default function OtherInfo1() {

    const pictures = [
        {
            index: 1,
            url: "/pic1.png"
        },
        {
            index: 2,
            url: "/pic2.png"
        },
        {
            index: 3,
            url: "/pic3.png"
        },
        {
            index: 4,
            url: "/pic4.png"
        },
    ];

    return (
        <div className="relative">
            <div className="bg-[#1e1e1e] min-h-screen flex flex-col w-11/12 my-10 p-20">
                <h2 className="font-noto-serif text-3xl text-gray-200">It{"'"}s all in the Details.</h2>
                <p className="text-sm mt-3 text-gray-400 w-[650px]">
                    We leave no detail to waste. We create micromoments of entertainment at our coffee shop
                    that go above and beyond our brews. Don{"'"}t believe us? Just check what our Instagram
                    followers are saying.
                </p>
            </div>
            <div className="w-1/2 absolute top-[200px] right-[400px]">
                <div className="flex items-center gap-10">
                    {pictures.map((picture) => (
                        <Image
                            key={picture.index}
                            src={picture.url}
                            width={300}
                            height={300}
                            alt="Pictures"
                        />
                    ))}
                </div>
            </div>
            <div className='w-1/2 absolute bottom-[180px] right-[100px]'>
                <div className='flex justify-end items-center gap-5 mt-10'>
                    <div className='border border-2 border-gray-300 w-20 h-16 flex justify-center items-center hover:cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className='text-gray-200'>
                            <path fill="currentColor" d="m7.85 13l2.85 2.85q.3.3.288.7t-.288.7q-.3.3-.712.313t-.713-.288L4.7 12.7q-.3-.3-.3-.7t.3-.7l4.575-4.575q.3-.3.713-.287t.712.312q.275.3.288.7t-.288.7L7.85 11H19q.425 0 .713.288T20 12t-.288.713T19 13z"></path>
                        </svg>
                    </div>
                    <div className='border border-2 border-gray-300 w-20 h-16 flex justify-center items-center hover:cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className='text-gray-200'>
                            <path fill="currentColor" d="M16.15 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}