import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import './Projects.css';

const Projects = () => {
    return (
        <div id="projects" className="mx-3 lg:mx-12 my-20 style">
            <div className="border-b-2 border-black">
                <h1 className="text-3xl font-bold">Projects</h1>
            </div>
            <div className="my-20">
                <h3 className='text-xl lg:text-3xl mb-4 border-b border-gray-600 w-52'>Team Projcet</h3>
                {/* VIP Tailor */}
                <div data-aos="fade-up"
                    data-aos-duration="1000" className="flex flex-col lg:flex-row bg-base-200 mb-5 lg:h-[370px]">
                    <div className='lg:w-9/12 w-full'>
                        <img className='w-8/12 -mt-10 md:-mt-5 lg:-mt-0 mb-14 md:mb-20 lg:mb-0  image shadow-xl shadow-black' src="https://i.ibb.co/1qwGq4F/vip-Tailor.jpg" alt="Movie" />
                    </div>
                    <div className=" lg:w-96 w-full ml-0 py-5 px-5">
                        <h2 className=" text-3xl font-bold style">VIP Tailor</h2>
                        <p className='text-justify'>This is basically a Inventory system website.There are two types of users such as User and Admin.Admin will handle all the system and make one user admin or delete and everything.</p>
                        <p>Demo(Admin):</p>
                        <p>email: habib@gmail.com</p>
                        <p>pass: 123456</p>
                        <div className="card-actions items-center justify-start mt-3">
                            <Link to='https://viptailor.abmgloballtd.com/' target="blank" className='btn btn-outline'>Live Link</Link>
                        </div>
                    </div>
                </div>
                {/* Alamgir super shob */}
                <div data-aos="fade-up"
                    data-aos-duration="1000" className="flex flex-col lg:flex-row bg-base-200 mb-5 lg:h-[390px]">
                    <div className='lg:w-9/12 w-full'>
                        <img className='w-8/12 -mt-10 md:-mt-5 lg:-mt-0 mb-14 md:mb-20 lg:mb-0  image shadow-xl shadow-black' src="https://i.ibb.co/vh1jbby/alamgir-Super.jpg" alt="Movie" />
                    </div>
                    <div className=" lg:w-96 w-full ml-0 py-5 px-5">
                        <h2 className=" text-3xl font-bold style">Super Shop</h2>
                        <p className='text-justify'>This is basically a Inventory system website.But this is kind of different.There have many branch and every branch have different statement.There are two types of users such as User and Admin.Admin will handle all the system and make one user admin or delete and everything.</p>
                        <p>Demo(Admin):</p>
                        <p>email: habib@gmail.com</p>
                        <p>pass: 123456</p>
                        <div className="card-actions items-center justify-start mt-3">
                            <Link to='https://supershop.abmgloballtd.com/' target="blank" className='btn btn-outline'>Live Link</Link>
                        </div>
                    </div>
                </div>
                {/* ChikitshaHub */}
                <div data-aos="fade-up"
                    data-aos-duration="1000" className="flex flex-col lg:flex-row bg-base-200 mb-5 lg:h-[370px]">
                    <div className='lg:w-9/12 w-full'>
                        <img className='w-8/12 -mt-10 md:-mt-5 lg:-mt-0 mb-14 md:mb-20 lg:mb-0  image shadow-xl shadow-black' src="https://i.ibb.co/BKzxRg3/Screenshot-128.png" alt="Movie" />
                    </div>
                    <div className=" lg:w-96 w-full ml-0 py-5 px-5">
                        <h2 className=" text-3xl font-bold style">ChikitshaHub</h2>
                        <p className='text-justify'>ChikitshaHub basically a online platform where one can collaborate with doctor and can get treatment also in video call.But i have not contributed much on this</p>
                        <div className="card-actions items-center justify-start mt-3">
                            <Link to='https://hilarious-wisp-3febc2.netlify.app/' target="blank" className='btn btn-outline'>Live Link</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-10">
                <h3 className='text-xl lg:text-3xl mb-4 border-b border-gray-600 w-44'>My works</h3>
                {/* cooking God */}
                <div data-aos="fade-up"
                    data-aos-duration="1000" className="flex flex-col lg:flex-row bg-base-200 mb-5  lg:h-[370px]">
                    <div className='lg:w-9/12 w-full'>
                        <img className='w-8/12 -mt-10 md:-mt-5 lg:-mt-0 mb-14 md:mb-20 lg:mb-0 image shadow-xl shadow-black' src="https://i.ibb.co/2k71jQv/am12-ss.png" alt="Movie" />
                    </div>
                    <div className=" lg:w-96 w-full ml-0 py-5 px-5">
                        <h2 className=" text-3xl font-bold style">Cooking God</h2>
                        <p className='text-justify'>This websites offers three types of user - Normal Users,Premium Users and Admins.This is a meal distribution site where a normal user can just see the details and review,premium users have permission to Meal request and others and admin will handle the site and user activity.</p>
                        <div className="card-actions items-center justify-start mt-3">
                            <Link to='https://hostel-management-client12.web.app/' target="blank" className='btn btn-outline'>Live Link</Link>
                            <Link to='https://github.com/I-am-MoRsHeD/hostel-management-client12.git' target="blank" className='text-3xl ml-3'><FaGithub /></Link>
                        </div>
                    </div>
                </div>
                {/* Jobs World */}
                <div data-aos="fade-up"
                    data-aos-duration="1000" className="flex flex-col lg:flex-row bg-base-200 mb-5 lg:h-[400px]">
                    <div className='lg:w-9/12 w-full'>
                        <img className='w-8/12 -mt-10 md:-mt-5 lg:-mt-0 mb-14 md:mb-20 lg:mb-0  image shadow-xl shadow-black' src="https://i.ibb.co/nBCSGmW/Screenshot-67.png" alt="Movie" />
                    </div>
                    <div className=" lg:w-96 w-full ml-0 py-5 px-5">
                        <h2 className="card-title text-3xl font-bold style">Jobs World</h2>
                        <p className='text-justify'>This website indicates about job hunting and posting thoughts.There anyone can post a job or jobs and the same person can apply for the job.But no one can apply for the job that he/she added.</p>
                        <div className="card-actions items-center justify-start mt-3">
                            <Link to='https://wondrous-trifle-3074aa.netlify.app/' target="blank" className='btn btn-outline'>Live Link</Link>
                            <Link to='https://github.com/I-am-MoRsHeD/jobs-world-client-am11.git' target="blank" className='text-3xl ml-3'><FaGithub /></Link>
                        </div>
                    </div>
                </div>
                {/* Tech Brand */}
                <div data-aos="fade-up"
                    data-aos-duration="1000" className="flex flex-col lg:flex-row bg-base-200 lg:h-[370px]">
                    <div className='lg:w-9/12 w-full'>
                        <img className='w-8/12 -mt-10 md:-mt-5 lg:-mt-0 mb-14 md:mb-20 lg:mb-0  image shadow-xl shadow-black' src="https://i.ibb.co/47sh7yz/Screenshot-68.png" alt="Movie" />
                    </div>
                    <div className=" lg:w-96 w-full ml-0 py-5 px-5">
                        <h2 className="card-title text-3xl font-bold style">Tech Brand</h2>
                        <p className='text-justify'>On this site,one can add product and can update product details.One can cart product in easy way.But if the user is not logged in,he/she cannot do anything.</p>
                        <div className="card-actions items-center justify-start mt-3">
                            <Link to='https://tech-brand.web.app/' target="blank" className='btn btn-outline'>Live Link</Link>
                            <Link to='https://github.com/I-am-MoRsHeD/Tech-brand-client10.git' target="blank" className='text-3xl ml-3'><FaGithub /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;