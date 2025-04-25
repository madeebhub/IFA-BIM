import Image from "next/image";
import Topover from "./Topover";
import Card1 from "./Card1";
import About from "./About";
import Gsource from "./Gsource";
import Client from "./Client";
import Eventcard from "./Eventcard";
import Form from "./Form";
import Recentblogs from "./Recentblogs";
const Body = () => {
    return (
        <div className="md:ml-[20%] my-8 px-4 sm:px-6 lg:px-8">
            <Topover />
            <div className="mt-8">
                <Card1 />
            </div>
            <div className="mt-12">
                <About />
            </div>
            <div className="mt-12">
                <Gsource />
            </div>
            <div className="mt-12">
                <Client />
            </div>
            <div className="mt-12">
                <Eventcard />
            </div>
            <div className="mt-12">
                <Form />
            </div>
            <div className="mt-12 mb-8">
                <Recentblogs />
            </div>
        </div>
    )
}

export default Body;
