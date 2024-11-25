import React from "react";
import styles from './Header.module.css';
import logo from '../../assets/icons/logo-adri.svg'

const Header: React.FC = () => {
    return (
        <div className="sticky top-0 z-50 bg-background flex justify-between items-center px-8 py-1 w-screen">
            <img className="w-14" src={logo}></img>
            <div className="flex flex-row gap-8 font-montaga text-xl">
                  <a>home</a>
                  <a>about</a>
                  <a>work</a>
                  <a>gallery</a>
            </div>
          
        </div>
    )
}

export default Header;