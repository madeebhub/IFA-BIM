import Image from "next/image";
const Recentblogs = () => {
    return (
        <section className="reasontouse my-26 bg-blue-100">
            <div className="flex flex-col md:w-full w-full">
                <div className="head flex flex-col my-9">
                    <h1 className="text-black text-4xl my-3 lg:text-6xl font-semibold tracking-wide">
                        Recent Blogs
                    </h1>
                </div>
                <div className="cards md:w-full w-full flex flex-wrap mx-auto justify-center">
                    <div className="card1 md:w-[32%] w-[100%] mx-2 my-4 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 bg-white">
                        <Image src={"/cardimg1.webp"} width={600} height={450} alt="cardimg1" className="rounded-lg" />
                        <div className="card-content mt-4">
                            <h3 className="text-xl font-semibold text-gray-800">Event 1</h3>
                            <p className="text-gray-600 mt-2">I AM ABLE TO ADD TEXT IN IT NOW.</p>
                        </div>
                    </div>
                    <div className="card1 md:w-[32%] w-[100%] mx-2 my-4 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 bg-white">
                        <Image src={"/cardimg2.webp"} width={600} height={450} alt="cardimg2" className="rounded-lg" />
                        <div className="card-content mt-4">
                            <h3 className="text-xl font-semibold text-gray-800">Event 2</h3>
                            <p className="text-gray-600 mt-2">Description for the second event goes here. You can add more information about the event.</p>
                        </div>
                    </div>
                    <div className="card1 md:w-[32%] w-[100%] mx-2 my-4 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 bg-white">
                        <Image src={"/cardimg3.webp"} width={600} height={450} alt="cardimg3" className="rounded-lg" />
                        <div className="card-content mt-4">
                            <h3 className="text-xl font-semibold text-gray-800">Event 3</h3>
                            <p className="text-gray-600 mt-2">Description for the third event goes here. You can add more information about the event.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Recentblogs;