// images
import chair1 from "../assets/image/chair1.jpg";
import chair2 from "../assets/image/chair4.jpg";
import chair3 from "../assets/image/chair5.jpg";

const SubHeader = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-3">
      <div className="w-full">
        <span className="uppercase text-4xl xl:text-[3.5rem] font-bold text-[#3b3d3e]">
          effortless <br /> living
        </span>
      </div>
      <div className="w-full">
        <p className="text-base xl:text-2xl">
          Transform your home into a sanctuary <br /> of elegance with our
          exceptional <br />
          furniture range.
        </p>
      </div>
      <div className="w-full flex justify-end items-center">
        <img
          src={chair1}
          alt="chair"
          className="w-20 h-20 min-w-[80px] sm:w-32 sm:h-32 lg:w-40 lg:h-40 border-[6px] lg:min-w-[160px] border-white rounded-full -mr-6 z-20"
        />
        <img
          src={chair2}
          alt="chair"
          className="w-20 h-20 min-w-[80px] sm:w-32 sm:h-32 lg:w-40 lg:h-40 border-[6px] lg:min-w-[160px] border-white rounded-full -mr-6 z-10"
        />
        <img
          src={chair3}
          alt="chair"
          className="w-20 h-20 min-w-[80px] sm:w-32 sm:h-32 lg:w-40 lg:h-40 border-[6px] lg:min-w-[160px] border-white rounded-full"
        />
      </div>
    </div>
  );
};

export default SubHeader;
