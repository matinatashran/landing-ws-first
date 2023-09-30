import { BsFillPlayFill } from "react-icons/bs";

// assets
import image1 from "../assets/image/table.jpg";
import image2 from "../assets/image/sofa2.jpg";
import imageBg from "../assets/image/bg.jpg";

const Header = () => {
  return (
    <div className="relative flex flex-col-reverse lg:flex-row gap-2">
      <div className="rounded-2xl w-full lg:w-1/3 h-[60vh] md:h-[70vh] lg:h-[550px] overflow-hidden">
        <img src={image1} alt="sofa" className="w-full h-full" />
      </div>
      <div className="relative rounded-2xl w-full lg:w-2/3 h-[60vh] md:h-[70vh] lg:h-[550px] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>
        <img
          src={image2}
          alt="sofa"
          className="absolute top-0 left-0 w-full h-full"
        />
        <div className="text-white font-montserrat z-30 absolute flex flex-col lg:justify-center gap-5 h-full mt-5 lg:mt-auto ml-5 lg:ml-[9rem]">
          <h1 className="uppercase text-3xl sm:text-[3rem] xl:text-[4.5rem] font-bold leading-[3.5rem] lg:leading-[4.5rem] xl:leading-[6rem]">
            luxurious <br /> comfortness
          </h1>
          <p className="text-base sm:text-xl xl:text-2xl opacity-80">
            Experience the epitome of comfort <br /> and style whith our
            exquisite home <br /> furniture collection
          </p>
        </div>
      </div>
      <div className="absolute top-1/2 right-14 -mt-20 lg:mt-auto w-40 h-40 lg:top-[5rem] lg:left-[33.33%] lg:-ml-[7rem] lg:w-56 lg:h-56 rounded-full bg-white p-2 z-20">
        <div className="relative w-full h-full rounded-full overflow-hidden cursor-pointer">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <img src={imageBg} alt="sofa" className="w-full h-full" />
          <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center">
            <div className="w-1/2 h-1/2 rounded-full border border-white flex justify-center items-center bg-[#819380] opacity-50"></div>
            <BsFillPlayFill className="absolute w-14 h-14 lg:w-16 lg:h-16 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
