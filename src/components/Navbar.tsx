import { BsArrowRight } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-[#3a393e] p-2 rounded-2xl">
      <div className="">
        <span className="border border-white rounded-lg text-white font-potta font-bold py-1 text-lg sm:text-2xl">FMART</span>
      </div>
      <button className="flex items-center">
        <span className="px-3 sm:px-5 py-2 sm:py-4 rounded-lg bg-[#819380] text-white text-sm font-semibold">
          PRE ORDER
        </span>
        <span className="p-2 sm:p-4 rounded-lg bg-[#4a524a] border border-[#819380]">
          <BsArrowRight className="w-5 h-5 text-[#819380]" />
        </span>
      </button>
    </div>
  );
};

export default Navbar;
