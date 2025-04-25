const About = () => {
    return (
        <section className="aboutus my-16">
            <div className="about flex flex-col text-center md:w-[100%] w-[100%] lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
                <div className="para flex md:w-[40%] w-[100%] flex-col space-y-5">
                    <h1 className="text-white text-4xl lg:text-6xl font-semibold tracking-wide">
                        About Us
                    </h1>
                    <small className="md:text-base text-white">
                        Started in 2009, Gsource offers a unique combination of end-to-end customized Engineering Design and Drawing Solutions. We're at the forefront of advanced technologies, like AI, machine learning, drone photogrammetry, LiDAR data processing, product design simulations, digital mockups, engineering designs, BIM, VDC & digital twins, while catering to clients across industries like construction, fabrication, architectural, structural, electrical, general contractors, civil, geospatial & manufacturing.
                    </small>
                    <div className="my-7">
                        <button className="py-3 px-8 text-black text-lg rounded-4xl bg-white transition duration-300 ease-in-out hover:text-white hover:bg-purple-600">
                            Explore Gsource Technologies
                        </button>
                    </div>
                </div>
                <div className="cards md:w-[56%] w-[100%] flex flex-wrap mx-auto bg-white p-6 rounded-xl">
                    <div className="card1 md:w-[45%] w-[100%] rounded-lg my-4 mx-2 p-8 shadow-lg bg-white transition duration-300 ease-in-out">
                        <p className="text-2xl mb-4 text-black font-semibold">Engineering Design & Drawing Projects</p>
                        <small className="text-gray-600 text-base leading-relaxed">From the tiny to massive, our team handles it all.</small>
                    </div>
                    <div className="card1 md:w-[45%] w-[100%] mx-2 my-4 rounded-lg p-8 shadow-lg bg-white transition duration-300 ease-in-out">
                        <p className="text-2xl mb-4 text-black font-semibold">Prototyping</p>
                        <small className="text-gray-600 text-base leading-relaxed">From the tiny to massive, our team handles it all.</small>
                    </div>
                    <div className="card1 md:w-[45%] w-[100%] mx-2 p-8 my-4 rounded-lg shadow-lg bg-white transition duration-300 ease-in-out">
                        <p className="text-2xl mb-4 text-black font-semibold">Design Support</p>
                        <small className="text-gray-600 text-base leading-relaxed">From the tiny to massive, our team handles it all.</small>
                    </div>
                    <div className="card1 md:w-[45%] w-[100%] mx-2 p-8 my-4 rounded-lg shadow-lg bg-white transition duration-300 ease-in-out">
                        <p className="text-2xl mb-4 text-black font-semibold">BIM & VDC</p>
                        <small className="text-gray-600 text-base leading-relaxed">From the tiny to massive, our team handles it all.</small>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;