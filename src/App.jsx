import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { motion, optimizedAppearDataAttribute } from "motion/react"
import logo from "./resources/icons/weblogo.png"
import giticon from "./resources/icons/whiteGithub.png"
import mailicon from "./resources/icons/whiteMail.png"
import linkedinicon from "./resources/icons/whiteLinkedin.png"
import connecticon from "./resources/icons/whiteConnect.png"
import background from "./resources/images/black_background.png"
import first from "./resources/images/first project.png"
import second from "./resources/images/secondProject.png"
import project from './resources/icons/project-management.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* header */}
      <header className="bg-black py-2 ">
        <div className="flex justify-between py-3 px-4 border-b  border-white ">
          <div className=" rounded-2xl ">
            <img src={logo} alt="" className='w-[55px] h-[28px] rounded-[5px]'/>
          </div>

          <div className="flex px-3">
            <div className="w-[60px] ">
              <a href="#projects" className="flex text-white font-semibold  ">
                <img
                  src={project}
                  alt=""
                  className="w-[15px] h-[20px] "
                />
                <p className="ml-2 hover:text-red-500 duration-150">Projects</p>
              </a>
            </div>

            <div className="w-[60px] ml-10 sm:ml-16">
              <a
                href="#footer"
                className="flex text-white font-semibold items-center "
              >
                <img src={connecticon} alt="" className="w-[16px] h-[16px] " />
                <p className="ml-1 hover:text-red-500 duration-150">Connect</p>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* body */}

      <motion.div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
        }}
        className="flex flex-col items-center"
      >

        {/* info */}

        <div className="flex flex-col items-center  ">
          <div className="text-white py-10">

            {/* name */}

            <motion.p
              animate={{
                y: [-200, 0],
               
                transition: {
                  duration: 1.2,
                  ease: "anticipate",
                },
              }}
              className="text-[15px]  sm:text-lg font-semibold mb-[-5px] sm:mb-[-12px] pl-1"
            >
              Hii I'am ,
            </motion.p>
            <motion.div
              className="flex text items-center content-center "
              animate={{
                x: [-200, 0],
                transition: {
                  duration: 0.5,
                  ease: "easeInOut",
                },
              }}
            >
              <motion.span className="text-[50px] mt-[-5px] sm:text-[65px] hover:scale-80 font-bold text-gray-400 hover:text-red-500 hover:rotate-15 transition  duration-199">
                R
              </motion.span>
              <span className="text-[50px] mt-[-5px] sm:text-[65px] hover:scale-80 font-bold text-gray-400 hover:text-red-500 hover:rotate-15 transition duration-199">
                i
              </span>
              <span className="text-[50px] mt-[-5px] sm:text-[65px] hover:scale-80 font-bold text-gray-400 hover:text-red-500 hover:rotate-15 transition duration-199">
                t
              </span>
              <span className="text-[50px] mt-[-5px] sm:text-[65px] hover:scale-80 font-bold text-gray-400 hover:text-red-500 hover:rotate-15 transition duration-199">
                i
              </span>
              <span className="text-[50px] mt-[-5px] sm:text-[65px] hover:scale-80 font-bold text-gray-400 hover:text-red-500 hover:rotate-15 transition duration-199">
                k
              </span>
              <span className="text-[50px] mt-[-5px] sm:text-[65px] hover:scale-80 font-bold text-gray-400 hover:text-red-500 hover:rotate-15 transition duration-199 ml-2">
                V
              </span>
              <span className="text-[50px] mt-[-5px] sm:text-[65px] hover:scale-80 font-bold text-gray-400 hover:text-red-500 hover:rotate-15 transition duration-199">
                e
              </span>
              <span className="text-[50px] mt-[-5px] sm:text-[65px] hover:scale-80 font-bold text-gray-400 hover:text-red-500 hover:rotate-15 transition duration-199">
                r
              </span>
              <span className="text-[50px] mt-[-5px] sm:text-[65px] hover:scale-80 font-bold text-gray-400 hover:text-red-500 hover:rotate-15 transition duration-199">
                m
              </span>
              <span className="text-[50px] mt-[-5px] sm:text-[65px] hover:scale-80 font-bold text-gray-400 hover:text-red-500 hover:rotate-15 transition duration-199">
                a
              </span>
            </motion.div>
            <motion.h1
              animate={{
                x: [200, 0],
                scale: [0.8, 1.1],
                transition: {
                  duration: 0.5,
                  ease: "easeInOut",
                },
              }}
              className="text-[15px] sm:text-xl mt-[-5px] font-semibold pl-2 text-center"
            >
              I am{" "}
              <motion.span className="text-xl text-red-500 duration-75 font-bold animate-pulse py-2">
                {"<Web Developer/>"}
              </motion.span>
            </motion.h1>
          </div>
        </div>

        <div className="sm:w-[50%] w-[80%]">
          <p className="text-white">
            Hi, I'm Ritik Verma! 👋 I'm a web developer passionate about
            building dynamic, responsive, and user-friendly websites. I love
            exploring new web technologies and crafting digital experiences that
            are both functional and visually appealing. Always eager to learn
            and improve, I strive to create clean, efficient, and modern web
            solutions..
          </p>
        </div>

        {/* {seperation line} */}

        <div className="text-white mt-[100px] flex pt-5 text-[27px] font-bold w-[100%] sm:text-3xl border-t  border-gray-800 justify-center items-center">
          <h1 className="flex flex-col text-red-500 pl-2 ">
            Projects
            <motion.p
              animate={{
                x: [1, 140],
                scaleX: [1, 2],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
              }}
              className="mt-[-15px] text-white hidden sm:block"
            >
              -
            </motion.p>
            <img src="" alt="" />
          </h1>
        </div>

        {/* projects */}

        <div
          className="flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-[100px] mt-10"
          id="projects"
        >
          {/* {first project} */}
          <div className=" sm:w-[400px] w-[90%]  border-b border-t border-gray-500 shadow-200 text-white p-2 font-semibold py-3">
            <h1 className="text-xl font-bold mt-[-5px] text-center mb-2  ">
              DISP.in
            </h1>
            <p className="font-normal leadind-snug mb-2">
              It was a simple project i created and it helped me to learn how to
              use html , css and javascript.
            </p>
            <img
              src={first}
              alt=""
              className="w-[60%] object-cover border-2 rounded-lg border-gray-600 justify-center mx-auto"
            />
            <a
              href="https://github.com/ritik125V/PROJECT-A"
              className="flex items-center mb-2 mt-2"
            >
              <img src={giticon} alt="" className="mr-1 w-[22px] h-[25px] " />
              <p>Source Code</p>
            </a>
          </div>

          {/* {second project} */}
          <div className=" sm:w-[400px] w-[90%]  border-b border-t border-gray-500 shadow-200 text-white p-2 font-semibold py-3">
            <h1 className="text-xl font-bold mt-[5px] text-center mb-2  ">
              Potfolio Website
            </h1>
            <p className="font-normal leadind-snug mb-2">
              This is my portfolio website which i created new tech like reactjs
              , tailwind css and more.
            </p>
            <img
              src={second}
              alt=""
              className="w-[60%]  object-cover border-2 rounded-lg border-gray-600 justify-center mx-auto"
            />
            <a
              href="https://github.com/ritik125V/Potfolio"
              className="flex items-center mb-2 mt-2"
            >
              <img src={giticon} alt="" className="mr-1 w-[22px] h-[25px] " />
              <p>Source Code</p>
            </a>
          </div>
        </div>
      </motion.div>

      {/* footer */}
      <footer className="bg-black py-12  " id="footer">
        <div className="flex justify-center flex-col items-center text-white">
          <h1 className="text-xl font-bold sm:mt-10">Connect with me </h1>
          <div className="flex gap-20 py-10 font-semibold">
            <a
              href=""
              className="flex hover:bg-red-500 duration-150 rounded-md p-1 items-center"
            >
              <img
                src={linkedinicon}
                alt=""
                className="mr-1 w-[22px] h-[25px]"
              />
              Linkedin
            </a>
            <a
              href="https://github.com/ritik125V"
              className="flex hover:bg-red-500 duration-150 rounded-md p-1"
            >
              <img src={giticon} alt="" className="w-[20px] h-[22px]" />
              Github
            </a>
            <a
              href=""
              className="flex hover:bg-red-500 duration-150 rounded-md p-1 items-center "
            >
              <img src={mailicon} alt="" className="w-[20px] h-[18px] pr-1" />
              Mail
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App
