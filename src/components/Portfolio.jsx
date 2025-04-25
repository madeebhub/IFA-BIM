const Portfolio = () => {
    return (
        <div className="portfolio md:mx-[3%] bg-black py-10">
            <section className="portfolio flex flex-wrap gap-8">
                {/* Portfolio Item Group 1 */}
                <div className="flex flex-wrap justify-between gap-8">
                    <div className="flex flex-col md:w-[45%] bg-black shadow-2xl rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out border-2 border-gray-700">
                        <Image src={"/image1.jpg"} height={600} width={600} className="object-cover" />
                        <p className="text-white mt-6 text-lg px-6 pb-6 leading-relaxed">
                            This is our project on the biggest mall in Abu Dhabi (UAE). To achieve greater exposure in the Middle East, we are collaborating with several countries.
                        </p>
                    </div>
                    <div className="flex flex-col md:w-[45%] bg-black shadow-xl rounded-lg overflow-hidden hover:scale-105 border-2 border-gray-700 transition-transform duration-300 ease-in-out">
                        <Image src={"/img3.jpg"} height={600} width={600} className="object-cover" />
                        <p className="text-white mt-6 text-lg px-6 pb-6 leading-relaxed">
                            Last year, we developed a landmark architectural project that significantly increased our presence in Europe’s design industry.
                        </p>
                    </div>
                </div>
                {/* Single Image */}
                <div className="flex flex-wrap justify-center mb-10">
                    <div className="flex flex-col md:w-[45%] bg-black shadow-xl rounded-lg overflow-hidden border-2 border-gray-700 hover:scale-105 transition-transform duration-300 ease-in-out">
                        <Image src={"/img4.jpg"} height={600} width={600} className="object-cover" />
                        <p className="text-white mt-6 text-lg px-6 pb-6 leading-relaxed">
                            Each project tells a story—our work at this historical site showcases the perfect balance of preservation and innovation.
                        </p>
                    </div>
                </div>
                {/* Portfolio Item Group 2 */}
                <div className="flex flex-wrap justify-between gap-8">
                    <div className="flex flex-col md:w-[45%] bg-black shadow-xl rounded-lg overflow-hidden hover:scale-105 border-2 border-gray-700 transition-transform duration-300 ease-in-out">
                        <Image src={"/img11.jpg"} height={600} width={600} className="object-cover" />
                        <p className="text-white mt-6 text-lg px-6 pb-6 leading-relaxed">
                            Each space is meticulously crafted to enhance the experience of those who inhabit it, whether at work or at play.
                        </p>
                    </div>
                    <div className="flex flex-col md:w-[45%] bg-black shadow-xl rounded-lg overflow-hidden hover:scale-105 transition-transform border-2 border-gray-700 duration-300 ease-in-out">
                        <Image src={"/img9.jpg"} height={600} width={600} className="object-cover" />
                        <p className="text-white mt-6 text-lg px-6 pb-6 leading-relaxed">
                            This project combines technology with architectural beauty, resulting in functional yet striking structures that define modern design.
                        </p>
                    </div>
                </div>
                {/* Single Image */}
                <div className="flex flex-wrap justify-center mb-10">
                    <div className="flex flex-col md:w-[45%] bg-black shadow-xl rounded-lg overflow-hidden hover:scale-105 border-2 border-gray-700 transition-transform duration-300 ease-in-out">
                        <Image src={"/img15.jpg"} height={600} width={600} className="object-cover" />
                        <p className="text-white mt-6 text-lg px-6 pb-6 leading-relaxed">
                            Our aim is to inspire and create beautiful spaces that not only meet the client’s needs but exceed their expectations.
                        </p>
                    </div>
                </div>
                {/* Portfolio Item Group 3 */}
                <div className="flex flex-wrap justify-between gap-8">
                    <div className="flex flex-col md:w-[45%] bg-black shadow-xl rounded-lg overflow-hidden hover:scale-105 border-2 border-gray-700 transition-transform duration-300 ease-in-out">
                        <Image src={"/img21.jpg"} height={600} width={600} className="object-cover" />
                        <p className="text-white mt-6 text-lg px-6 pb-6 leading-relaxed">
                            Our projects push the boundaries of what’s possible, integrating the latest technologies with sustainable building practices.
                        </p>
                    </div>
                    <div className="flex flex-col md:w-[45%] bg-black shadow-xl rounded-lg overflow-hidden hover:scale-105 border-2 border-gray-700 transition-transform duration-300 ease-in-out">
                        <Image src={"/img12.jpg"} height={600} width={600} className="object-cover" />
                        <p className="text-white mt-6 text-lg px-6 pb-6 leading-relaxed">
                            Inspired by nature, this project merges organic elements with sleek modern design to create an immersive environment.
                        </p>
                    </div>
                </div>
                {/* Single Image */}
                <div className="flex flex-col md:w-[45%] bg-black shadow-xl rounded-lg overflow-hidden hover:scale-105 border-2 border-gray-700 transition-transform duration-300 ease-in-out">
                    <Image src={"/thank.jpg"} height={600} width={600} className="object-cover" />
                    <p className="text-white mt-6 text-lg px-6 pb-6 leading-relaxed">
                        Inspired by nature, this project merges organic elements with sleek modern design to create an immersive environment.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Portfolio;
