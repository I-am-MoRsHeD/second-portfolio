import { FaCheckCircle } from 'react-icons/fa';

const About = () => {
    return (
        <div id='about' className="mx-12 my-20 style">
            <div className="border-b-2 border-black">
                <h1 className="text-3xl font-bold">About Me</h1>
            </div>
            {/* about me section */}
            <div className='flex justify-center my-10 lg:gap-32 items-center'>
                <div className=' lg:px-0 px-5'>
                    <h3 className='text-xl lg:text-3xl mb-4 border-b border-gray-600 w-44'>Who Am I?</h3>
                    {/* <div className="divider w-1/3"></div> */}
                    <p className=' mb-4'>Hi!I am <span className='text-2xl font-bold'>Mohammed Morshed</span> from Chattogram,Bangladesh.I am a MERN Stack Developer and i can build user friendly websites,based on user comfortablity.I am also a Frontend Developer,obviously skilled in Javascript, React,TailwindCSS,Vanilla CSS and others which needed i can apply into site.</p>
                    <p className=' mb-4'>My persistent and selfmotivate skills and behaviour help me to stay focused on my work and projects until it complete.My positive thinking,solving skills and other interpersonal skills help me to get rid of any trouble situation.  </p>
                    <p className=' mb-4'>I hope this introduction give you a good overview about me as a developer and person,and i am eagerly excited and strongly ready for the upcoming challenge.I am eagerly ready for taking the challenge from your side also and want to blend my passionate skills in your projects!</p>
                    <p className=''>If you have any further questions or would like to discuss potential opportunities, please feel free to reach out. I am excited about the possibility of working together. Have a great day! Thank you.</p>
                </div>
                <img className='w-2/6 h-[500px] hidden lg:block' src="https://i.ibb.co/DgNKGwy/myImage.jpg" alt="" />
            </div>
            {/* Education */}
            <div className='my-20 px-5 lg:px-0'>
                <h1 data-aos="fade-right"
                    data-aos-duration="2000" className="text-3xl style border-b border-gray-600 w-44">Education</h1>
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mt-10">
                    <li data-aos="fade-up"
                        data-aos-duration="2000">
                        <div className="timeline-middle">
                            <FaCheckCircle />
                        </div>
                        <div className="timeline-start md:text-end mb-10">
                            <time className="font-mono italic">2019-running</time>
                            <h1 className="text-2xl font-black">Omargani MES University College</h1>
                            <p className='text-lg mt-2'>Bachelor of Business Administration</p>
                        </div>
                        <hr />
                    </li>
                    <li data-aos="fade-up"
                        data-aos-duration="2000">
                        <hr />
                        <div className="timeline-middle">
                            <FaCheckCircle />
                        </div>
                        <div className="timeline-end mb-10">
                            <time className="font-mono italic">2016-2018</time>
                            <div className="text-2xl font-black">Hathazari University College</div>
                            <p className='text-lg mt-2'>Higher Secondary Certificate(Intermediate)</p>
                        </div>
                        <hr />
                    </li>
                    <li data-aos="fade-up"
                        data-aos-duration="2000">
                        <hr />
                        <div className="timeline-middle">
                            <FaCheckCircle />
                        </div>
                        <div className="timeline-start md:text-end mb-10">
                            <time className="font-mono italic">2011-2016</time>
                            <h1 className="text-2xl font-black">Madarsha Adarsha High School</h1>
                            <p className='text-lg mt-2'>Secondary School Certificate</p>
                        </div>
                        <hr />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default About;