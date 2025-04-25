const Footer = () => {
    return (
        <div className="footerbox text-center bg-gray-500 shadow-lg md:h-[700px] h-fit">
            <div className="md:flex  my-9">
                <div className=" py-9 px-7 md:w-[30%] w-[100%] h-[600px] text-center md:mx-2 mx-auto my-9">
                    <div className="card1 p-8 md:w-[100%] w-[100%] h-[60%] rounded-lg shadow-lg transition duration-300 ease-in-out">
                        <p className="text-3xl mb-4 text-white font-semibold">IFA-BIM CONSULTANCY</p>
                        <small className="text-white text-lg leading-relaxed w-[100%]">
                            IFA Design and BIM Consultants is a UAE-based architecture and BIM consultancy, currently a growing firm with a strong foundation in BIM-based architecture and digital solutions.
                        </small>
                    </div>
                </div>
                <div className=" py-9 px-7 md:w-[30%] w-[100%] h-[600px] text-center md:mx-2 mx-auto my-9">
                    <div className="card1 p-8 md:w-[100%] w-[100%] h-[60%] rounded-lg shadow-lg transition duration-300 ease-in-out">
                        <p className="text-2xl mb-4 text-white font-semibold">Our Links</p>
                        <small className="text-white text-lg flex flex-col leading-relaxed w-[100%]">
                            <ul>
                                <li className="my-2"><a href="#" className="text-white">. Home</a></li>
                                <li className="my-2"><a href="#" className="text-white">. About</a></li>
                                <li className="my-2"><a href="#" className="text-white">. Portfolio</a></li>
                                <li className="my-2"><a href="#" className="text-white">. Contact Us</a></li>
                            </ul>
                        </small>
                    </div>
                </div>
                <div className=" py-9 px-7 md:w-[30%] w-[100%] h-[600px] text-center md:mx-2 mx-auto my-9">
                    <div className="card1 p-8 md:w-[100%] h-[60%] w-[100%] rounded-lg shadow-lg transition duration-300 ease-in-out">
                        <p className="text-2xl mb-4 text-white font-semibold">Our Services</p>
                        <small className="text-white text-lg leading-relaxed w-[100%]">
                            BIM & Digital Consultancy
                            Architecture & Interior Design
                            CAD Drafting & Quantity Surveying
                            Visualization & Presentation
                        </small>
                    </div>
                </div>
                <div className=" py-9 px-7 md:w-[30%] w-[100%] h-[600px] text-center md:mx-2 mx-auto my-9">
                    <div className="card1 p-8 md:w-[100%] w-[100%] h-[60%] rounded-lg shadow-lg transition duration-300 ease-in-out">
                        <p className="text-2xl mb-4 text-white font-semibold">Contact Us</p>
                        <small className="text-white text-lg leading-relaxed w-[100%]">
                            FOAM2059, Compass Building, Al Shohada Road, Ras Al Khaimah, UAE
                            <p className="mt-6">Info@ifa-dxbim.ae</p>
                            <p className="mt-6">
                                +971-582511954
                            </p>
                        </small>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;