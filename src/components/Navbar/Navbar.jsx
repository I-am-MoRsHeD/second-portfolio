import { Link, NavLink } from "react-router-dom";
import './Navbar.css';
import { useEffect, useState } from "react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleAnchorClick = (e, target) => {
        e.preventDefault();
        const element = document.getElementById(target);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const navlinks = (
        <>
            <li className="">
                <NavLink
                    to="/"
                    // onClick={(e) => handleAnchorClick(e, "home")}
                    className={({ isActive }) =>
                        `${isActive ? "active  " : " text-black"
                        } duration-300 text-base md:text-sm lg:text-lg font-semibold transition navs`
                    }
                >
                    Home
                </NavLink>
            </li>
            <li className="">
                <a
                    onClick={(e) => handleAnchorClick(e, "about")}
                    className=" text-black duration-300 text-base md:text-sm lg:text-lg font-semibold transition navs cursor-pointer"
                >
                    About
                </a>
            </li>
            <li className="">
                <a
                    onClick={(e) => handleAnchorClick(e, "expertise")}
                    className=" text-black duration-300 text-base md:text-sm lg:text-lg font-semibold transition navs cursor-pointer"
                >
                    Expertise
                </a>
            </li>
            <li className="">
                <a
                    onClick={(e) => handleAnchorClick(e, "experience")}
                    className=" text-black duration-300 text-base md:text-sm lg:text-lg font-semibold transition navs cursor-pointer"
                >
                    Experience
                </a>
            </li>
            <li className="">
                <a
                    onClick={(e) => handleAnchorClick(e, "projects")}
                    className=" text-black duration-300 text-base md:text-sm lg:text-lg font-semibold transition navs cursor-pointer"
                >
                    Projects
                </a>
            </li>

            <li className="">
                <a
                    onClick={(e) => handleAnchorClick(e, "contact")}
                    className=" text-black duration-300 text-base md:text-sm lg:text-lg font-semibold transition navs cursor-pointer"
                >
                    Contact Me
                </a>
            </li>
            {/* <li className="">
                <NavLink
                    to="/expertise"
                    className={({ isActive }) =>
                        `${isActive ? "active " : " text-black"
                        } duration-300 text-base lg:text-lg font-semibold  transition navs`
                    }
                >
                    Expertise
                </NavLink>
            </li>
            <li className="">
                <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                        `${isActive ? "active " : " text-black"
                        } duration-300 text-base lg:text-lg font-semibold  transition navs`
                    }
                >
                    Projects
                </NavLink>
            </li>
            <li className="">
                <NavLink
                    to="/experience"
                    className={({ isActive }) =>
                        `${isActive ? "active " : " text-black"
                        } duration-300 text-base lg:text-lg font-semibold  transition navs`
                    }
                >
                    Experience
                </NavLink>
            </li>
            <li className="">
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        `${isActive ? "active " : " text-black"
                        } duration-300 text-base lg:text-lg font-semibold  transition navs`
                    }
                >
                    Contact Me
                </NavLink>
            </li> */}
        </>
    )
    return (
        <div
            className={`max-w-screen z-10 fixed top-0 mx-auto left-0 right-0 ${isScrolled ? "lg:bg-[#F4F6F7] bg-gray-400 shadow-sm shadow-white" : "lg:bg-none bg-gray-300"
                }`}
        >
            <div className="max-w-[1200px] w-full mx-auto">
                <div className="flex flex-row justify-between items-center py-2">
                    <div className="">
                        <div className="dropdown md:hidden">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost text-white lg:hidden"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-7 w-7"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm text-black dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 style"
                            >
                                {navlinks}
                            </ul>
                        </div>
                        <div className="md:ml-0 ml-20">
                            <Link to='/'>
                                <img className="w-40 " src="/images/profile_logo.png" alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="">
                        <ul className="hidden md:flex items-center gap-8 style">{navlinks}</ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;