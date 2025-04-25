const Services = () => {
    return (
        <div className="md:flex md:ml-[20%] text-center mt-10">
            {/* First Service Block */}
            <div className="services p-6 mx-auto mb-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105 w-full md:w-[30%] mt-4">
                <h1 className="text-3xl font-semibold text-gray-900 mb-6">Design Delivery Support</h1>
                <ul className="list-inside list-disc text-lg text-gray-700 space-y-4">
                    <li>Survey to Bim</li>
                    <li>2D CAD Drafting / 3D BIM Modeling</li>
                    <li>RIBA Plan of Work Stage Design / Delivery Packages</li>
                    <li>Presentations / Reports / Documentation</li>
                    <li>Renders and Marketing Documents</li>
                </ul>
            </div>

            {/* Second Service Block */}
            <div className="services p-6 mx-auto mb-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105 w-full md:w-[30%] mt-4">
                <h1 className="text-3xl font-semibold text-gray-900 mb-6">BIM Documentation Support</h1>
                <ul className="list-inside list-disc text-lg text-gray-700 space-y-4">
                    <li>BIM Templates and Execution Plans</li>
                    <li>Parametric Family Modelling and Content Creation</li>
                    <li>Model Coordination and Clash Detection</li>
                    <li>Shop and Fabrication Drawings</li>
                    <li>CAD / CAM DFMA</li>
                </ul>
            </div>

            {/* Third Service Block */}
            <div className="services p-6 mx-auto mb-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105 w-full md:w-[30%] mt-4">
                <h1 className="text-3xl font-semibold text-gray-900 mb-6">Built Environment Support</h1>
                <ul className="list-inside list-disc text-lg text-gray-700 space-y-4">
                    <li>Digital Twin</li>
                </ul>
            </div>
        </div>

    )
}

export default Services;