import { FC } from "react";
import { BsArrowRight } from "react-icons/bs";

interface Props {
  className: string;
  image: string;
  title: string;
}

const ProductCard: FC<Props> = ({ className, image, title }) => {
  return (
    <div
      className={`h-[280px] relative rounded-2xl p-3 overflow-hidden flex flex-col justify-between ${className}`}
    >
      <img src={image} className="w-full h-full absolute top-0 left-0" />
      <div className="z-10 py-1.5">
        <span className="bg-[#9fa0a4] text-white text-sm px-3 py-2 rounded-lg uppercase">
          {title}
        </span>
      </div>
      <div className="flex justify-end z-10">
        <button className="flex items-center">
          <span className="px-3 py-2 rounded-lg bg-[#3b3d3e] text-white text-sm">
            BUY NOW
          </span>
          <span className="p-2 rounded-lg bg-[#9fa0a4] border border-[#3b3d3e]">
            <BsArrowRight className="w-5 h-5 text-white" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
