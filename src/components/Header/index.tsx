import React from "react";
import logo from "../../assets/icons/logo.png";

import { useNavigate } from "react-router";
import "./header.css";
import { Navigation20Regular } from "@fluentui/react-icons";
import {
  Button,
  Menu,
  MenuList,
  MenuPopover,
  MenuTrigger,
  MenuItem,
} from "@fluentui/react-components";
import { useState } from "react";
const Header2: React.FC = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };
  const handleAboutClick = () => {
    navigate("/about");
  };
  const handleGalleryClick = () => {
    navigate("/gallery");
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // scrolling to about me
  document.querySelectorAll("a.scroll-link").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent the default anchor click behavior

      const targetId = anchor.getAttribute("href")?.substring(1); // Get the target ID
      const targetElement = document.getElementById(targetId as string);
      if (targetElement && targetElement.id === "about") {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      } else if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 78,
          behavior: "smooth",
        });
      }
    });
  });

  React.useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header");
      if (window.scrollY > 0) {
        header?.classList.add("bg-color");
      } else {
        header?.classList.remove("bg-color");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="header"
      className="min-h-[60px] sticky top-0 z-50 flex justify-between items-center top-padding"
    >
      <img
        onClick={handleHomeClick}
        className="w-[35px] hover:cursor-pointer"
        src={logo}
        alt="logo"
      ></img>
      <div className="hidden lg:block">
        <div className="flex flex-row gap-8 font-openSans text-[16px]">
          <a
            // className={`${navState.currentState === 'home' ? 'text-accent font-bold' : ''} hover:cursor-pointer scroll-link`}
            className="hover:cursor-pointer scroll-link"
            onClick={handleHomeClick}
            href="/"
          >
            Home
          </a>

          <a
            // className={`${navState.currentState === 'work' ? 'text-accent font-bold' : ''} hover:cursor-pointer scroll-link`}
            className="hover:cursor-pointer scroll-link"
            onClick={handleAboutClick}
            href="/about"
          >
            About me
          </a>
          <a
            // className={`${navState.currentState === 'gallery' ? 'text-accent font-bold' : ''} hover:cursor-pointer scroll-link`}
            className="hover:cursor-pointer scroll-link"
            onClick={handleGalleryClick}
            href="/gallery"
          >
            Photos
          </a>
        </div>
      </div>

      <div className="block lg:hidden">
        <Menu
          open={isMenuOpen}
          onOpenChange={(e, data) => setIsMenuOpen(data.open)}
        >
          <MenuTrigger>
            <Button
              icon={<Navigation20Regular />}
              appearance="transparent"
              style={{ fontSize: "1em", color: "#222326", background: "none" }}
            />
          </MenuTrigger>
          <MenuPopover>
            <MenuList>
              <MenuItem onClick={handleHomeClick} className="font-lora">
                Home
              </MenuItem>
              <MenuItem onClick={handleAboutClick} className="font-lora">
                About me
              </MenuItem>
              <MenuItem onClick={handleGalleryClick} className="font-lora">
                Photos
              </MenuItem>
            </MenuList>
          </MenuPopover>
        </Menu>
      </div>
    </div>
  );
};

export default Header2;
