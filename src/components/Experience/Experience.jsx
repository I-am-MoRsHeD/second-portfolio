

const Experience = () => {
    return (
        <div id="experience" className="mx-12 style h-80">
            <div className="border-b-2 border-black">
                <h1 className="text-3xl font-bold">My Experience</h1>
            </div>
            {/* main content */}
            <div className="my-10 h-full flex gap-40 justify-center items-center">
                <div className="space-y-2 w-1/2 border-r-2 border-gray-500">
                    <h3 className="text-2xl mb-2">February 2024 - Present</h3>
                    <a href="https://abmgloballtd.com/" className="text-base text-blue-500 underline">ABM Global Limited</a>
                    <h3 className="text-base">MERN Stack Developer</h3>
                </div>
                <div className="w-1/2">
                    <p>
                        After joining ABM,i have gathered a lot of experience on commercial side and have learnt many things.I have got a beautiful environment and a team also which is good enough for me to learn more things.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Experience;