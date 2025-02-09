import Image from 'next/image';

export default function About() {

    const some_abouts = [
        {
            index: 1,
            title: "Mongolian Beans",
            description: "the featured brew"
        },
        {
            index: 2,
            title: "New Locations",
            description: "the quest for growth"
        },
        {
            index: 3,
            title: "Perune How Brew",
            description: "tasty new flavors"
        }
    ]

    return (
        <div id="about" className="relative min-h-screen flex flex-col justify-center items-center w-full">
            <div className="absolute top-[-30px] w-full flex">
                {some_abouts.map((item) => (
                    <div
                        key={item.index}
                        className={
                            item.index !== 3
                                ? "flex bg-[#1e1e1e] w-[300px] h-[200px] border-r-2 border-[#2e2e2e]"
                                : "flex bg-[#1e1e1e] w-[300px] h-[200px]"
                        }>
                        <div className="flex flex-col justify-center items-center w-full">
                            <h3 className="text-white font-semibold text-center text-md uppercase">{item.title}</h3>
                            <p className="text-gray-400 font-noto-serif text-sm">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center items-center gap-10 w-full">
                <div className='flex flex-col justify-center items-center w-1/2'>
                    <div className='flex items-center w-full gap-3'>
                        <div className="w-[60px] h-1 bg-gray-400" />
                        <h1 className='uppercase text-brown-500 text-lg'>About Our Coffee House</h1>
                    </div>
                    <div className="mt-10">
                        <h2 className="text-2xl font-noto-serif font-semibold text-brown-400 w-[400px]">
                            We{"'"}re the Number One Coffee House in the City
                        </h2>
                        <p className='text-sm mt-5 text-gray-700 w-[400px]'>
                            The locals didn{"'"}t name us best coffee house in town
                            for three years ina a row without its merits. We brew the
                            best beans South American farmers can offer. Our drinks have
                            evolved above and beyond our already outstading selection of
                            traditional brews, cappuccinos, and lattes - and into a robust
                            combination of tradition meets new school flavor combinations.
                        </p>
                    </div>
                </div>
                <div className="w-1/2">
                    <Image
                        src="/pic7.jpg"
                        width={600}
                        height={650}
                        alt="about" />
                </div>
            </div>
        </div>
    )
}