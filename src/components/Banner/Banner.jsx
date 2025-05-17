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
        <div id="home" className="banner-container mt-24">
            {/* hidden part */}
            {/* <div className="bg-[url('https://i.ibb.co/zmv81Ww/bg-image2.jpg')] bg-cover lg:h-[90vh] banner1 hover:-translate-x-full">
                <div className="backdrop-brightness-50 h-full w-full flex items-center">
                    <div className="lg:ml-12 ml-4 text-white">
                        <h4 className="lg:text-3xl md:text-2xl text-lg font-semibold">Hello there!</h4>
                        <h2 className="lg:text-3xl text-xl my-4">This is <span className="lg:text-6xl md:text-5xl text-4xl font-bold text-orange-400">Mohammed Morshed</span> from this side</h2>
                        <p className="lg:text-4xl text-xl font-bold mt-6">MERN Stack Developer | Frontend Developer | ReactJs Developer</p>
                    </div>
                </div>
            </div> */}
            {/* main part */}
            <div className="flex justify-between items-center w-full style">
                {/* info */}
                <div
                    data-aos="fade-right"
                    data-aos-duration="4000"
                    className="w-full lg:w-2/3 ml-2 lg:ml-12 ">
                    <h1 className="lg:text-4xl text-lg">Hey!</h1>
                    <h3 className="lg:text-4xl text-lg">I am a <span className="text-3xl lg:text-6xl font-bold">Web Developer,</span> </h3>
                    <p className="text-xl lg:text-3xl mt-5">can be called as <span className="inline-block"><TypeAnimationPosition /></span> </p>
                    <a href="https://drive.google.com/file/d/1sBJgbcUrMLJ7rHO2ZHrxMaO1ShQrfA7p/view?usp=sharing" className='btn btn-neutral hover:text-black hover:bg-white hover:border-2 mt-5 text-lg lg:text-xl' download>Resume</a>
                    <Link to='mailto:mdmorshed0187@gmail.com'><span className='btn hover:bg-[#2b3440] hover:text-white border-2 border-black mt-5 ml-2 text-lg lg:text-xl'>Say Hello</span></Link>
                </div>
                {/* image */}
                <div
                    data-aos="fade-left"
                    data-aos-duration="4000"
                    className="bg-gray-600 hidden md:block md:h-[415px] lg:h-[462px] w-[500px] rounded-[50%] mr-12 ">
                    <img className="w-[600px] md:h-[450px] lg:h-[500px]" src="https://i.ibb.co/ZzRvKxS/portfolio-Pic.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;