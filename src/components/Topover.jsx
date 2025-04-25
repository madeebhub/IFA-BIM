import Image from "next/image";
const Topover = () => {
    return (
        <section className="topoverview py-16 ">
                <div className="overview flex flex-col md:w-[100%] w-[80%] mx-auto lg:flex-row justify-center lg:justify-between items-center lg:items-center space-y-8 lg:space-y-0">
                    {/* Text Section */}
                    <div className="para flex flex-col w-[100%] md:w-[50%] text-justify space-y-5">
                        <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-extrabold text-left md:text-center lg:text-left leading-tight">
                            Architectural Design And Engineering Design
                        </h1>
                        <small className="text-md lg:text-xl text-white">
                            Gsource is an architectural design & engineering drawing firm serving over 360+ active clients throughout North America. Based out of Hollywood, Florida, with over 14 years of experience working with home builders, general contractors, architects & engineers in the construction industry. We provide architecture modelling, BIM, structural engineering & civil engineering services across a wide range of industries. Gsource delivers about 450-550 drawing deliverables daily, with a 99.3% client retention rate, ensuring seamless, timely, and accurate service offerings.
                        </small>
                        <div className="my-7">
                            <button className="py-3 px-8 text-lg bg-white rounded-full text-black hover:bg-purple-600 hover:text-white transition duration-300 ease-in-out transform hover:scale-105">
                                Discuss a Project
                            </button>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="img w-full md:w-[50%] flex justify-center items-center">
                        <div className="rounded-2xl overflow-hidden p-3 shadow-lg bg-white transform hover:scale-105 transition duration-300 ease-in-out w-full md:max-w-[550px]">
                            <Image src={"/homeimg.webp"} width={650} height={650} alt="Architecture Image" className="object-cover w-full h-full" />
                        </div>
                    </div>
                </div>
            </section>
    )
}
export default Topover;