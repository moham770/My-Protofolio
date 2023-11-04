const Footer = () => {

  const footerLinks = ['About','Projects','Speaking','Uses']
  return (
    <footer>
      <div className="flex justify-between pb-8 px-5 flex-wrap gap-5 items-center ">
        <ul className="flex gap-5 flex-wrap  mx-auto items-center ">
        {footerLinks.map((link,index)=>{
          return   <li key={index}>
            <a href="#" className="opacity-[0.7]  hover:opacity-[1] hoverTransition hover:tracking-[1px] hover:text-blueDark ">{link}</a>
          </li>
        })}
        </ul>
        <p className="opacity-[0.7] text-center  mx-auto">© 2023 Spencer Sharp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
