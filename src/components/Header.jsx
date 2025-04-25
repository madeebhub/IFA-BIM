import Link from "next/link";
const Header = () => {
    return (
        <header className="sticky top-0 z-10">
            <div className="headerbox bg-gray-500 text-white text-xl flex justify-between items-center W-[100%] py-6 px-8 shadow-xl rounded-b-xl">
                <div className="left flex items-center">
                    {/* Logo Section */}
                    <div className="logo mr-8 ml-2">
                        <h1 className="text-white ml-4 mr-6 cursor-pointer text-3xl font-extrabold tracking-wide">IFA Design And BIM Consultancy</h1>
                    </div>

                    {/* Navigation Menu */}
                    <div className="navs hidden md:flex space-x-8">
                        <Link href={"/"}><button className="text-white hover:text-black transition duration-300 ease-in-out">Home</button></Link>
                        <Link href={"/services.jsx"}><button className="text-white hover:text-black transition duration-300 ease-in-out">Services</button></Link>
                        <button className="text-white hover:text-black transition duration-300 ease-in-out">About Us</button>
                        <button className="text-white hover:text-black transition duration-300 ease-in-out">Media</button>
                        <button className="text-white hover:text-black transition duration-300 ease-in-out">Portfolio</button>
                        <button className="text-white hover:text-black transition duration-300 ease-in-out">Contact Us</button>
                    </div>
                </div>

                {/* Right Section - Discuss a Project Button */}
                <div className="right">
                    <button className="py-3 md:block hidden px-8 text-lg bg-white rounded-full text-black hover:bg-black hover:text-white transition duration-300 ease-in-out transform hover:scale-105">
                        Discuss a Project
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
