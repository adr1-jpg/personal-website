import React from "react";
import styles from './Header.module.css';
import logo from '../../assets/icons/logo-adri.svg'
import { useForm } from "../../context/DataProvider";
const Header: React.FC = () => {

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
        <div className="sticky top-0 z-50 bg-background flex justify-between items-center px-8 py-1 w-screen">
            <img className="w-14" src={logo}></img>
            <div className="flex flex-row gap-8 font-montaga text-xl">
                <a
                    // className={`${navState.currentState === 'home' ? 'text-accent font-bold' : ''} hover:cursor-pointer scroll-link`}
                    className='hover:cursor-pointer scroll-link'
                    onClick={() => setNavState({ ...navState, currentState: 'home' })} href="#home">home</a>
                <a
                    // className={`${navState.currentState === 'about' ? 'text-accent font-bold' : ''} hover:cursor-pointer scroll-link`}
                    className='hover:cursor-pointer scroll-link'
                    onClick={() => setNavState({ ...navState, currentState: 'about' })} href="#about">about</a>
                <a
                    // className={`${navState.currentState === 'work' ? 'text-accent font-bold' : ''} hover:cursor-pointer scroll-link`}
                    className='hover:cursor-pointer scroll-link'
                    onClick={() => setNavState({ ...navState, currentState: 'work' })} href="#work">work</a>
                <a
                    // className={`${navState.currentState === 'gallery' ? 'text-accent font-bold' : ''} hover:cursor-pointer scroll-link`}
                    className='hover:cursor-pointer scroll-link'
                    onClick={() => setNavState({ ...navState, currentState: 'gallery' })} href="#gallery">gallery</a>
            </div>

        </div>
    )
}

export default Header;