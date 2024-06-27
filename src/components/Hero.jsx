import Avtar from "../assets/avtar.jpg"
import { FaTwitterSquare, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center mt-16 xl:flex-row xl:justify-around xl:mx-48 xl:mt-32 ">
        <div className="mb-3">
            <img className="w-[200px] h-[200px] rounded-full object-center xl:w-[380px] xl:h-[300px] xl:object-cover " src={Avtar} alt="profile picture"/>
         
        </div>
        <div>
            <h1 className="font-Rubik text-5xl font-bold xl:text-7xl xl:mb-5">Ankit <br/> Jindal</h1>
            <h2 className="font-mono text-xl font-bold mt-3 xl:text-2xl ">FRONTEND DEVELOPER</h2>
            <span className="flex gap-2 font-mono items-center justify-center my-5 text-3xl xl:text-4xl">
                <a className="cursor-pointer" href="#twitter"> <FaTwitterSquare/> </a>
                <a className="cursor-pointer" href="https://github.com/ankitji0811"> <FaGithub/></a>
                <a className="cursor-pointer" href="https://www.linkedin.com/in/ankit-jindal-65b957232/"> <FaLinkedin/></a>
            </span>
            <p className="font-mono text-xl text-gray-500 w-[280px] mb-6 xl:text-2xl">With a passion for developing Modern React web pages for Businesses.</p>

            <a className="font-mono bg-blue-600 px-4 py-2 text-xl rounded-xl text-white shadow-lg xl:py-3 xl:text-2xl xl:px-4 xl:mt-7" href="" download>
                Resume
            </a>
        </div>
    </div>
  )
}

export default Hero