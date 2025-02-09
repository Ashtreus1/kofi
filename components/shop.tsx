import Image from 'next/image';

export default function Shop(){

    const products = [
        {
            index: 1,
            url: "/product1.png",
            title: "Blonde Roast",
            description: "A blonde brew with hints of french vanilla and roasted Brazilian hazelnuts"
        },
        {
            index: 2,
            url: "/product2.png",
            title: "Medium Roast",
            description: "A rich, medium blend beans that were harvested in Guatemala"
        },
        {
            index: 3,
            url: "/product3.png",
            title: "Dark Roast",
            description: "Dark, roasted beans from the mountains of Colombia's Cali Farms"
        },
    ]

    return(
        <div id="products" className="min-h-screen flex flex-col justify-center items-center w-full">
            <h2 className="text-2xl font-noto-serif font-semibold text-brown-400">Shop our Products</h2>
            <p className="text-sm mt-3 text-gray-700 w-[500px] text-center">
                Can{"'"}t make it to our coffee shop. That{"'"}s okay. Let us know
                what you{"'"}re craving and we{"'"}ll ship your coffee straight 
                to your home.
            </p>
            <button className="p-5 mt-5 border border-gray-300 w-[300px] text-gray-300">Shop Products</button>
            <div className="flex justify-center items-center gap-10 w-full mt-10">
                {products.map((product) => (
                    <div key={product.index} className="flex flex-col justify-center items-center mx-10">
                        <Image
                            src={product.url}
                            width={250}
                            height={500}
                            alt="Product"
                        />
                        <h3 className='font-noto-serif text-xl font-semibold'>{product.title}</h3>
                        <p className='text-center text-sm text-gray-400'>{product.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}