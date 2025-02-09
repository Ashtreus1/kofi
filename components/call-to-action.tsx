import Image from 'next/image';

export default function CallToAction() {
    return (
        <div id="store" className="bg-[#1e1e1e] min-h-screen flex flex-col justify-center items-center text-gray-200 mx-10 my-20">
            <div className='flex justify-center items-center gap-10 w-full'>
                <div className="w-1/2 ml-10">
                    <Image
                        src="/pic5.png"
                        width={600}
                        height={600}
                        alt="Picture"
                    />
                </div>
                <div className="flex flex-col justify-center items-center w-1/2 mr-10">
                    <h2 className='font-noto-serif text-4xl font-semibold text-left w-full'>Featured Brew of the Month</h2>
                    <p className='text-sm text-gray-400 text-left mt-3'>
                        Our featured brew this month is the Mongolian hot drip coffee.
                        After only its first week on the menu, it instantly became our best seller.
                        Stop by today to try what our regulars call {"'their favorite cup of coffee. Ever.'"}
                    </p>
                    <div className='flex justify-start mt-5 items-center w-full'>
                        <button className="flex justify-center item-center gap-3 border border-white p-3">
                            Visit our Shop
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className='text-gray-200'>
                                <path fill="currentColor" d="M16.15 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}