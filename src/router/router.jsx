import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Expertise from "../components/Expertise/Expertise";
import Projects from "../components/Projects/Projects";
import Experience from "../components/Experience/Experience";
import Contact from "../components/Contact/Contact";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: '/expertise',
                element: <Expertise />
            },
            {
                path: '/projects',
                element: <Projects />
            },
            {
                path: '/experience',
                element: <Experience />
            },
            {
                path: '/contact',
                element: <Contact />
            },

        ]
    }
])