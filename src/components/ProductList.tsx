import Image from "next/image"
import Link from "next/link"

const ProductList = () => {
    return (
        <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80" >
                    <Image
                        src="https://images.pexels.com/photos/10414204/pexels-photo-10414204.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt=""
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                    <Image
                        src="https://images.pexels.com/photos/6800945/pexels-photo-6800945.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt=""
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md"
                    />
                </div>
                <div className="flex justify-between ">
                    <span className="font-medium">
                        Product Name
                    </span>
                    <span className="font-semibold">
                        $48
                    </span>
                </div>
                <div className="text-sm text-gray-500 ">
                    My Description
                </div>
                <button className="rounded-2xl ring-1 ring-alertMsg text-alertMsg w-max py-2 px-4 text-xs hover:bg-alertMsg hover:text-white">Add to Cart</button>
            </Link>
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80" >
                    <Image
                        src="https://images.pexels.com/photos/10414204/pexels-photo-10414204.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt=""
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                    <Image
                        src="https://images.pexels.com/photos/6800945/pexels-photo-6800945.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt=""
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md"
                    />
                </div>
                <div className="flex justify-between ">
                    <span className="font-medium">
                        Product Name
                    </span>
                    <span className="font-semibold">
                        $48
                    </span>
                </div>
                <div className="text-sm text-gray-500 ">
                    My Description
                </div>
                <button className="rounded-2xl ring-1 ring-alertMsg text-alertMsg w-max py-2 px-4 text-xs hover:bg-alertMsg hover:text-white">Add to Cart</button>
            </Link>
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80" >
                    <Image
                        src="https://images.pexels.com/photos/10414204/pexels-photo-10414204.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt=""
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                    <Image
                        src="https://images.pexels.com/photos/6800945/pexels-photo-6800945.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt=""
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md"
                    />
                </div>
                <div className="flex justify-between ">
                    <span className="font-medium">
                        Product Name
                    </span>
                    <span className="font-semibold">
                        $48
                    </span>
                </div>
                <div className="text-sm text-gray-500 ">
                    My Description
                </div>
                <button className="rounded-2xl ring-1 ring-alertMsg text-alertMsg w-max py-2 px-4 text-xs hover:bg-alertMsg hover:text-white">Add to Cart</button>
            </Link>
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80" >
                    <Image
                        src="https://images.pexels.com/photos/10414204/pexels-photo-10414204.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt=""
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                    <Image
                        src="https://images.pexels.com/photos/6800945/pexels-photo-6800945.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt=""
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md"
                    />
                </div>
                <div className="flex justify-between ">
                    <span className="font-medium">
                        Product Name
                    </span>
                    <span className="font-semibold">
                        $48
                    </span>
                </div>
                <div className="text-sm text-gray-500 ">
                    My Description
                </div>
                <button className="rounded-2xl ring-1 ring-alertMsg text-alertMsg w-max py-2 px-4 text-xs hover:bg-alertMsg hover:text-white">Add to Cart</button>
            </Link>
        </div>
    )
}

export default ProductList