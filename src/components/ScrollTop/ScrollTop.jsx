import { BiSolidUpArrowAlt } from 'react-icons/bi';
import { useEffect, useRef, useState } from 'react';


const ScrollTop = () => {
const [showIcon,setShowIcon] = useState(false)
const icon = useRef()
useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) setShowIcon(true);
      else setShowIcon(false);
    });

  
  }, []);
function scrolltop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
      });
}

  return <>
  {/* {showIcon ? <button ref={icon} onClick={scrolltop} className='fixed transition-all duration-200 bottom-[2rem] right-[3%]  w-[40px] h-[40px] flex items-center justify-center dark:bg-scrollTopIConDarkColor hover:dark:bg-scrollTopIConDarkColorHover rounded-full hoverTransition'>
    <BiSolidUpArrowAlt className=' text-[2rem]  text-white '/>
  </button>:null} 
   */}
 <button ref={icon} onClick={scrolltop} className={`fixed  ${showIcon ? "opacity-[1]": "opacity-[0]"} hoverTransition bottom-[2rem] right-[3%]  w-[40px] h-[40px] flex items-center justify-center border-none bg-scrollTopIConDarkColor hover:bg-scrollTopIConDarkColorHover rounded-full hoverTransition`}>
    <BiSolidUpArrowAlt className=' text-[2rem]  text-white '/>
  </button>
  </>

}

export default ScrollTop
