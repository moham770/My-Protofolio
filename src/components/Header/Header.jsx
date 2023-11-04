import { useEffect, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { useRef } from "react";
import { IoSunnyOutline } from "react-icons/io5";

const headerLinks = [
  { link: "About" },
  { link: "Articles" },
  { link: "Projects" },
  { link: "Speaking" },
  { link: "Contact" },
];

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "light" ? false : true
  );
  const layer = useRef();

  useEffect(() => {
    const closeOnOutsideClick = (e) => {
      if (showModal && e.target === layer.current) {
        setShowModal(false);
      }
    };
    if (showModal) {
      document.addEventListener("click", closeOnOutsideClick);
    }
    return () => {
      document.removeEventListener("click", closeOnOutsideClick);
    };
  }, [showModal]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <header>
      <nav className="flex items-center justify-between px-5 pt-3">
        <button
          className="block sm:hidden hover:opacity-[0.8] text-[30px]  opacity-[0.5] rounded-full w-[42px] h-[42px] dark:bg-iconbgDark flex items-center justify-center border-[0.001px]  border-opacity-[0.3]  hover:dark:border-borderIconHoverDark border-borderIconHoverDark transition-all duration-200"
          onClick={() => {
            setShowModal(true);
          }}>
          <MdMenu />
        </button>
        <div />
        <ul className="sm:flex hidden gap-8 tracking-[1px] bg-[#fdfdfd] dark:shadow-lg shadow-md dark:bg-navbgDark px-[1rem] py-[0.7rem] rounded-[50px]">
          {headerLinks.map((link, i) => {
            return (
              <li key={i}>
                <a
                  className="hover:text-blueDark transition-colors duration-200 opacity-90"
                  href="#">
                  {link.link}
                </a>
              </li>
            );
          })}
        </ul>
        <button
          onClick={() => {
            setIsDarkMode((oldState) => !oldState);
          }}
          className="dark:bg-iconbgDark  bg-iconbg text-[26px]
          text-orange-600 dark:text-[rgba(255,255,255,0.5)] 
                             hover:dark:text-[rgba(255,255,255,0.8)]
               w-[40px]  h-[40px] rounded-full   border-[0.1px]
                  flex items-center justify-center
                active:scale-[0.9]  transition-all duration-200
                border-orange-300 hover:border-orange-500 
                   dark:hover:border-orange-5000
                  border-opacity-[0.2]
                  hover:border-opacity-[0.5]
                  shadow-inner
              
                    ">
          {isDarkMode ? <IoMoonOutline /> : <IoSunnyOutline />}
        </button>
      </nav>

      {showModal ? (
        <div
          ref={layer}
          className="fixed inset-0 bg-layoutNavDark z-10 backdrop-blur">
          <div className="w-[80%] mt-8 animate-scaleForNav rounded-2xl mx-auto px-[2rem] py-[1rem] bg-containerColorLight dark:bg-containerColorDark">
            <ul>
              <li className="ms-auto text-right">
                <button
                  onClick={() => {
                    setShowModal(false);
                  }}>
                  <MdClose className=" hover:text-[crimson] font-bold text-[20px]  hover:rotate-[180deg] transition-all duration-200 " />{" "}
                </button>
              </li>
              {headerLinks.map((link,i)=><li key={i} className="border-b-secondaryBorder border-b-2 pb-[1.1rem] pt-[0.5rem]">
                <a className="hover:text-blueDark  transition-colors duration-200 opacity-90 " href="#"> {link.link}</a>
              </li>
              )}
            </ul>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
