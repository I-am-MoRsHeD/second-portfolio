

const Experience = () => {
    return (
        <div id="experience" className="mx-3 lg:mx-12 style">
            <div className="border-b-2 border-black">
                <h1 className="text-3xl font-bold">My Experience</h1>
            </div>
            {/* main content */}
            <div className="lg:my-10 h-full flex gap-3 md:gap-20 lg:gap-40 justify-center items-center">
                <div className="space-y-2 w-1/2 border-r-2 border-gray-500">
                    <h3 className="md:text-2xl mb-2">August 2024 - May 2025</h3>
                    <p className="text-base text-blue-500 underline">Spands SPS</p>
                    <h3 className="text-sm md:text-base">Junior Frontend Developer</h3>
                </div>
                <div className="w-1/2">
                    <p className="text-sm md:text-base">
                        It is a UK based startup company and i have worked on multiple projects like Diasporex,Eventick,QuizNPop etc. <a href="https://diasporex.io/" className="text-blue-500 underline">Diasporex</a> is the main project of the company and it is a money transfer website.
                        After joining Spands SPS,i have gathered a lot of experience on commercial environment and have learnt many things.I have been working in a beautiful environment and a team also which is good enough for me to learn more things.Overall,it was a good and wornderful journey wtih this company.
                    </p>
                </div>
            </div>
            <div className="lg:my-10 h-full flex gap-3 md:gap-20 lg:gap-40 justify-center items-center">
                <div className="space-y-2 w-1/2 border-r-2 border-gray-500">
                    <h3 className="md:text-2xl mb-2">February 2024 - Jun 2024</h3>
                    <a href="https://abmgloballtd.com/" className="text-base text-blue-500 underline">ABM Global Limited</a>
                    <h3 className="text-sm md:text-base">MERN Stack Developer</h3>
                </div>
                <div className="w-1/2">
                    <p className="text-sm md:text-base">
                        It was a little startup company and we have worked on different POS projects.It is my first every company to get commercial experience.
                        After joining this company,i have gathered experience on commercial side and have learnt many things.I got a team which we were only three developers to make projects,test this project and deploy.After all,it was a good journey with this company.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Experience;