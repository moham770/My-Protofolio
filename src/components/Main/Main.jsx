import { VscGithubInverted } from "react-icons/vsc";
import { AiOutlineLink, AiOutlineArrowRight } from "react-icons/ai";
import { useState } from "react";
import { myProjects } from "./data";
import { AnimatePresence, motion } from "framer-motion";

const Main = () => {
  const [activeLink, setActiveLink] = useState("All Projects");
  console.log(activeLink);
  const arraylinks = [
    { key: "All Projects" },
    { key: "React & BS" },
    { key: "React & MUI" },
    { key: "React & tw" },
    { key: "javaScript" },
    { key: "Bootstrap" },
  ];

  const [projectsArr, setProjectsArr] = useState(myProjects);
  return (
    <section className="px-5">
      <div className="flex content-start   gap-5 md:gap-20 md:flex-row flex-col  md:items-start ">
        <ul className=" flex md:flex-col justify-center  gap-2 px-1  flex-wrap items-center mx-auto  ">
          {arraylinks.map((link, index) => (
            <li key={index} className="my-2">
              <button
                onClick={() => {
                  const categoryToFilter = link.key
                  if (categoryToFilter === "All Projects") {
                    setProjectsArr(myProjects);
                  } else {
                    const filteredProjects = myProjects.filter((item) =>
                      // item.category.includes(categoryToFilter)
                      item.category.find((category) => category === categoryToFilter)
                    );
                    setProjectsArr(filteredProjects);
                  }
                  setActiveLink(link.key);
                }}
                className={`dark:bg-bgMainButtonsDark bg-bgMainButonNotActiveLightMode text-white ${
                  activeLink === link.key ? "active" : null
                } mainLinks px-2 py-[10px] text-capitalize text-[14px] sm:text-[1rem] hover:opacity-[1] rounded-[5px] w-[110px] sm:w-[120px] md:w-[150px]`}>
                {link.key}
              </button>
            </li>
          ))}
        </ul>
        <div className="cards  ">
          <div className="grid grid-cols-1 gap-5  md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence>
            {projectsArr.map((item) => {
              return (
                <motion.article
                layout
        initial={{ transform: "scale(0)" }}
        animate={{ transform: "scale(1)" }}
        transition={{
          type: 'spring',
          damping: 12, // Experiment with values between 5 to 20
          stiffness: 150,// Experiment with values between 50 to 300
          duration:0.5 
        }}
                  key={item.id}
                  // className=" h-full border-[1px] opacity-[0.9] hover:scale-[1.01]  hover:opacity-[1] border-blueDarkNormal hover:border-blueDark  cursor-pointer rounded-[10px] overflow-hidden col-span-3 sm:col-span-1   hover:rotate(1deg) transition-all duration-200 "
                  className="h-full border-[1px] opacity-[0.9] hover:opacity-[1] border-blueDarkNormal hover:border-blueDark cursor-pointer rounded-[10px] overflow-hidden col-span-3 sm:col-span-1  transition-all duration-200"

                  >
                  <div className="image">
                    <img src={item.imgPath} className="w-full" alt={item.title} />
                  </div>
                  <div className="box px-2 mt-2 h-full bg-white  dark:bg-secondaryBorder">
                    <h1 className="font-semibold text-capitalize ">{item.title}</h1>
                    <p className="my-3 opacity-[0.7]">{item.description}</p>
                    <div className="icons flex items-center justify-between">
                      <div className="flex items-center gap-2 ">
                        <AiOutlineLink
                          onClick={() => {
                            window.open(item.demo);
                          }}
                          className="text-[20px] cursor-pointer hover:scale-[1.1] hoverTransition  opacity-[0.5] hover:opacity-[1]"
                        />
                        <VscGithubInverted
                          onClick={() => {
                            window.open(item.repo);
                          }}
                          className="text-[20px] hover:scale-[1.1] hoverTransition cursor-pointer opacity-[0.5] hover:opacity-[1]"
                        />
                      </div>
                      <span className="flex items-center text-blueDark gap-1">
                        more <AiOutlineArrowRight className="" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
