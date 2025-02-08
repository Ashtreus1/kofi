import Image from 'next/image';

export default function OtherInfo2() {
    return (
        <div className="relative min-h-screen flex justify-center items-center gap-10 w-full">
            <div className='flex flex-col justify-center items-center w-1/2'>
                <div className='flex items-center w-full gap-3'>
                    <div className="w-[60px] h-1 bg-gray-400" />
                    <h1 className='uppercase text-brown-500 text-lg'>How we stay sharp</h1>
                </div>
                <div className="mt-10">
                    <h2 className="text-2xl font-noto-serif font-semibold text-brown-400 w-[400px]">
                        Transparency and education are key for us.
                    </h2>
                    <p className='text-sm mt-5 text-gray-700 w-[400px]'>
                        Our bar and ingredients are open to view to the public,
                        our roaster is behind glass doors for the public to see the 
                        roasting process, and our staff even brands our marketing 
                        materials in the front of the house. Everything we do is open
                        and transparent. We also host monthly latter art courses for our
                        local baristas to teach the skillsets they perfected behind our
                        coffee bars. Check out our blog for more information on our events
                        calendar for upcoming courses.
                    </p>
                </div>
            </div>
            <div className="w-1/2 mt-[-400px] mr-20">
                <Image
                    src="/pic6.png"
                    width={650}
                    height={650}
                    alt="about" />
            </div>
        </div>
    )
}