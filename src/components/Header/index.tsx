import React from "react";
import styles from './Header.module.css';
import logo from '../../assets/icons/logo-adri.svg'

const Header: React.FC = () => {
    return (
        <div className="flex justify-between items-center px-6 py-2 w-screen">
            <img className="w-14" src={logo}></img>
            <div className="flex flex-row gap-4 font-montaga text-1xl">
                  <a href="home">home</a>
                  <a>about</a>
                  <a>work</a>
                  <a>gallery</a>
            </div>
          
        </div>
    )
}

export default Header;