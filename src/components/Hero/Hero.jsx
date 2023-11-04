

import { VscVerifiedFilled,VscGithubInverted ,} from 'react-icons/vsc';
import { BsInstagram,BsLinkedin } from 'react-icons/bs';
import { FaFacebookSquare} from 'react-icons/Fa';
import Lottie from 'lottie-react';
import developerAnimation from '../../animation/developer.json'


const Hero = () => {
    return <section className='px-5'>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        <div className="overflow-hidden">
          <div className="flex items-end my-3  ">
            <div className="w-[100px] border-[2px] border-orange-500 rounded-full p-[1.5px] bg-secondaryBorder">
              <img className="w-full" src="./me-modified.png" alt="Mohamed Ayman" />
            </div>
            <VscVerifiedFilled className="text-[20px] mb-1 text-blueDark"/>
          </div>
          <h1
            
             
          className=" my-3 font-bold text-[28px]">Software designer, founder,<br/> and amateur astronaut.</h1>
          <h2 
              
          className=" my-3 leading-6 tracking-[1px] opacity-[0.7]">I’m Mohamed ayman, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms</h2>
          <div


          className="icons flex gap-5 mt-7">

         <a href="https://www.instagram.com/mohamed_ayman_621"  target='_blank' rel="noreferrer"> <BsInstagram  className="dark:text-inherit text-[#ee4b5e] dark:opacity-[0.7] text-[18px] hover:scale-[1.2] transition-all duration-200"/></a>
         <a href="https://github.com/moham770" target='_blank' rel="noreferrer"> <VscGithubInverted className=" dark:text-inherit dark:opacity-[0.7] dark:text-white text-[18px] hover:scale-[1.2] transition-all duration-200  "/></a>
         <a href="https://www.linkedin.com/in/mohamed-ayman07" target='_blank' rel="noreferrer"> <BsLinkedin className=" dark:text-inherit  dark:opacity-[0.7] text-[#1b5d9f] text-[18px] hover:scale-[1.2] transition-all duration-200"/></a>
         <a href="https://www.facebook.com/profile.php?id=100009775930625" target='_blank' rel="noreferrer"> <FaFacebookSquare className="dark:text-inherit dark:opacity-[0.7] text-[#0764fb] text-[18px] hover:scale-[1.2] transition-all duration-200"/></a>

          </div>

        </div>
        <div className="w-full ">
        
    <Lottie  animationData={developerAnimation} className="hidden lg:block  lg:translate-x-[20px] "/>  
        
        
        
        </div>

        

      </div>
    </section>

    
  }
  
  export default Hero
  