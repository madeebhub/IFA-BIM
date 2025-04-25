const Form = () => {
    return (
        <section className="formsection my-16">
            <div className="form flex flex-col md:w-[100%] w-[100%] lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
                <div className="para flex md:w-[40%] w-[100%] flex-col space-y-6">
                    <form action="/form.jsx" method="POST" className="space-y-6">
                        <h1 className="text-3xl font-semibold text-center my-6 text-white">Let's Talk!</h1>

                        <div className="cards md:w-[100%] w-[100%] flex flex-wrap mx-auto p-6 bg-white rounded-xl shadow-lg space-y-6">
                            <div className="flex flex-col space-y-3">
                                <label htmlFor="name" className="text-lg font-medium">Full Name</label>
                                <input
                                    type="text"
                                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    name="name"
                                    id="name"
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>

                            <div className="flex flex-col space-y-3">
                                <label htmlFor="contact" className="text-lg font-medium">Contact Number</label>
                                <input
                                    type="text"
                                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    name="contact"
                                    id="contact"
                                    placeholder="Enter your contact number"
                                    required
                                />
                            </div>

                            <div className="flex flex-col space-y-3">
                                <label htmlFor="email" className="text-lg font-medium">Email Address</label>
                                <input
                                    type="email"
                                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    name="email"
                                    id="email"
                                    placeholder="Enter your email address"
                                    required
                                />
                            </div>

                            <div className="flex flex-col space-y-3">
                                <label htmlFor="company" className="text-lg font-medium">Company Name</label>
                                <input
                                    type="text"
                                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    name="company"
                                    id="company"
                                    placeholder="Enter your company name"
                                />
                            </div>

                            <div className="flex flex-col space-y-3">
                                <label htmlFor="desc" className="text-lg font-medium">About Your Business</label>
                                <textarea
                                    name="description"
                                    id="desc"
                                    className="py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    rows="6"
                                    placeholder="Tell us more about your business"
                                />
                            </div>
                        </div>

                        <div className="flex justify-center mt-4">
                            <button
                                type="submit"
                                className="w-full max-w-xs px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg text-xl shadow-lg hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <div className="cards md:w-[56%] w-[100%] bg-white flex flex-col md:flex-row flex-wrap mx-auto p-8 rounded-xl mt-8 lg:mt-0">
                    <h1 className="text-3xl font-semibold text-center md:text-left text-black">Meet Us?</h1>
                    <p className="text-black text-lg mt-4 text-center md:text-left">
                        Send us the below contact details and we'll have one of our experts reach you at the earliest!
                    </p>

                    <div className="cards flex  flex-wrap w-[100%] mt-8 justify-between">
                        {/* USA (Corporate Address) Card */}
                        <div className="cards flex flex-wrap justify-center w-[100%] mt-8">
                            {/* USA (Corpblackress) Card */}
                            <div className="card md:w-[45%] rounded-lg my-4 mx-2 p-6 shadow-lg bg-black hover:bg-black transition duration-300 ease-in-out flex flex-col justify-center items-center text-center">
                                <p className="text-2xl mb-4 text-white font-semibold">USA (Corporate Address)</p>
                                <small className="text-white text-base leading-relaxed">
                                    450 N Park Rd, Suite 300A, Hollywood, FL 33021 <br />
                                    +1(888) 322-9925 <br />
                                    info@gsourcedata.com
                                </small>
                            </div>
                            <div className="card md:w-[45%] rounded-lg my-4 mx-2 p-6 shadow-lg bg-black hover:bg-black transition duration-300 ease-in-out flex flex-col justify-center items-center text-center">
                                <p className="text-2xl mb-4 text-white font-semibold">USA (Corporate Address)</p>
                                <small className="text-white text-base leading-relaxed">
                                    450 N Park Rd, Suite 300A, Hollywood, FL 33021 <br />
                                    +1(888) 322-9925 <br />
                                    info@gsourcedata.com
                                </small>
                            </div>
                            <div className="card md:w-[45%]  rounded-lg my-4 mx-2 p-6 shadow-lg bg-black hover:bg-black transition duration-300 ease-in-out flex flex-col justify-center items-center text-center">
                                <p className="text-2xl mb-4 text-white font-semibold">USA (Corporate Address)</p>
                                <small className="text-white text-base leading-relaxed">
                                    450 N Park Rd, Suite 300A, Hollywood, FL 33021 <br />
                                    +1(888) 322-9925 <br />
                                    info@gsourcedata.com
                                </small>
                            </div>
                            <div className="card md:w-[45%]  rounded-lg my-4 mx-2 p-6 shadow-lg bg-black hover:bg-black transition duration-300 ease-in-out flex flex-col justify-center items-center text-center">
                                <p className="text-2xl mb-4 text-white font-semibold">USA (Corporate Address)</p>
                                <small className="text-white text-base leading-relaxed">
                                    450 N Park Rd, Suite 300A, Hollywood, FL 33021 <br />
                                    +1(888) 322-9925 <br />
                                    info@gsourcedata.com
                                </small>
                            </div>

                            
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Form;
