import { SlEnvolope } from "react-icons/sl";
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import doneAnomation from '../../animation/done.json'
import ContactAnimation from '../../animation/contact.json'

const ContactUs = () => {

  const [state, handleSubmit] = useForm("xbjvbyvk");
  if (state.succeeded) {
    return<div className="flex items-center gap-1">
    <Lottie loop={false} animationData={doneAnomation} className="w-[40px] h-[40px]"/>  
    <p>Thanks for messageing</p>
    </div> 
}
  return (
    <section className="px-5">
      <div className="flex gap-4 font-semibold items-center">
        <SlEnvolope className="text-[29px] " />
        <h2 className="text-[34px] ">Contact us</h2>
      </div>
      <p className="opacity-[0.7]  mb-5">
        Contact us for more information and Get notified when I publish
        something new.
      </p>

      <div className="grid items-center grid-cols-1 md:grid-cols-2">
        {/* form */} {/* left side */}
        <form onSubmit={handleSubmit} className=" py-3 flex flex-col gap-5">
          {/* input email  */}
          <div className="flex sm:flex-row  items-center  gap-2  ">
            <label htmlFor="email" className="opacity-[0.8]">
              Email Address:
            </label>
            <input
            autoComplete="off"
              required
              type="email"
              id="email"
              name="email"
              placeholder="Email Adress..."
              className="ps-2 py-2 flex-grow-[0.5]    rounded-[5px] h-[30px]  inputColor "
            />
            <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
          </div>
          {/* textare */}
          <div className="flex sm:flex-row   items-center gap-2  ">
            <label htmlFor="message" className="opacity-[0.8]">
              Your message:
            </label>
            <textarea
              required
              name="message"
              id="message"
              placeholder="Message..."
              className="ps-2 py-2 flex-grow-[0.5] min-h-[100px] rounded-[5px]  inputColor"></textarea>
               <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
          </div>

          <div className="">
            <button
             disabled={state.submitting}
              type="submit"
              className="bg-bgButtonFormDark text-white hover:scale-[0.95] disabled:cursor-not-allowed disabled:opacity-[0.4] hoverTransition px-8 py-2 rounded-[5px] ms-2">
            {state.submitting ?"Submitting...":"Submit"}  
            </button>
          </div>
        </form>
        <div className="">

        <Lottie className="h-[355px] hidden md:block"  animationData={ContactAnimation} />

        </div>
      </div>
    </section>
  );
};

export default ContactUs;
