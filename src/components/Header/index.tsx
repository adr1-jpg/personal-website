import React from "react";
import styles from './Header.module.css';
import logo from '../../assets/icons/logo.png';
import { useForm } from "../../context/DataProvider";
import { useNavigate } from "react-router";
import { Link } from 'react-router-dom';
const Header2: React.FC = () => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/personal-website')
    }
    const handleGalleryClick = () => {
        navigate('/gallery')
    }
    const handleWorkClick = () => {
        navigate('/work')
        setNavState({ ...navState, currentState: 'work' })
    }

    const { navState, setNavState } = useForm();
    // scrolling to about me
    document.querySelectorAll('a.scroll-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent the default anchor click behavior

            const targetId = anchor.getAttribute('href')?.substring(1); // Get the target ID
            const targetElement = document.getElementById(targetId as string);
            if (targetElement && targetElement.id === 'about') {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
            else if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 78,
                    behavior: 'smooth'
                });
            }
        });
    });

    return (
        <div id='header' className="h-[80px] sticky top-0 z-50 bg-background flex justify-between items-center px-8 py-2 ">
            <img onClick={handleHomeClick} className="w-12 hover:cursor-pointer" src={logo}></img>
            <div className="hidden lg:block">
                <div className="flex flex-row gap-8 font-montaga text-xl">
                    <a
                        // className={`${navState.currentState === 'home' ? 'text-accent font-bold' : ''} hover:cursor-pointer scroll-link`}
                        className='hover:cursor-pointer scroll-link'
                        onClick={handleHomeClick} href="#"
                        >home</a>
                 {/* <a
                        // className={`${navState.currentState === 'about' ? 'text-accent font-bold' : ''} hover:cursor-pointer scroll-link`}
                        className='hover:cursor-pointer scroll-link'
                        href="#about">about</a> */}
                    <a
                        // className={`${navState.currentState === 'work' ? 'text-accent font-bold' : ''} hover:cursor-pointer scroll-link`}
                        className='hover:cursor-pointer scroll-link'
                        // onClick={handleWorkClick}
                        >
                            work</a>
                    <a
                        // className={`${navState.currentState === 'gallery' ? 'text-accent font-bold' : ''} hover:cursor-pointer scroll-link`}
                        className='hover:cursor-pointer scroll-link'
                        // onClick={handleGalleryClick} 
                        >gallery</a>
                </div>
            </div>


            {/* <div className="block lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-7">
                    <path fill-rule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
                </svg>

            </div> */}

        </div>
    )
}

export default Header2;