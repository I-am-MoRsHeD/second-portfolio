import { useEffect } from "react";
import TypeAnimationPosition from "./TypeAnimationPosition";
import './Banner.css';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { Link } from "react-router-dom";


const Banner = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div id="home" className="banner-container mt-[72px] relative style">
            {/* hidden part */}
            <div className="bg-[url('https://i.ibb.co/zmv81Ww/bg-image2.jpg')] bg-cover h-[90vh] banner1 hover:-translate-x-full">
                <div className="backdrop-brightness-50 h-full w-full flex items-center">
                    <div className="ml-12 text-white">
                        <h4 className="text-3xl font-semibold">Hello there!</h4>
                        <h2 className="text-3xl my-4">This is <span className="text-6xl font-bold text-orange-400">Mohammed Morshed</span> from this side</h2>
                        <p className="text-4xl font-bold mt-6">MERN Stack Developer | Frontend Developer | ReactJs Developer</p>
                    </div>
                </div>
            </div>
            {/* main part */}
            <div className="flex justify-between items-center w-full absolute -top-1 banner2">
                {/* info */}
                <div
                    data-aos="fade-right"
                    data-aos-duration="4000"
                    className="w-2/3  ml-12 ">
                    <h1 className="text-4xl">Hey!</h1>
                    <h3 className="text-4xl">I am a <span className="text-6xl font-bold">Web Developer,</span> </h3>
                    <p className="text-3xl mt-5">can be called as <span className="inline-block"><TypeAnimationPosition /></span> </p>
                    <a href="https://drive.google.com/file/d/1RJpWNr7K2lxfgQAKnP57UUNXYfGqFXAk/view?usp=sharing" className='btn btn-neutral hover:text-black hover:bg-white hover:border-2 mt-5 text-lg lg:text-xl' download>Resume</a>
                    <Link to='mailto:mdmorshed0187@gmail.com'><span className='btn hover:bg-[#2b3440] hover:text-white border-2 border-black mt-5 ml-2 text-lg lg:text-xl'>Say Hello</span></Link>
                </div>
                {/* image */}
                <div
                    data-aos="fade-left"
                    data-aos-duration="4000"
                    className="bg-gray-600 h-[462px] w-[500px] rounded-[50%] mr-12 ">
                    <img className="w-[600px] h-[500px]" src="https://i.ibb.co/ZzRvKxS/portfolio-Pic.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;