import ProductCard from "./ProductCard";

// image
import sofa from "../assets/image/sofa.jpg";
import table from "../assets/image/table1.jpg";
import chair from "../assets/image/chair3.jpg";
import chair1 from '../assets/image/table.jpg'

const NewestProduct = () => {
  return (
    <div className="grid grid-cols-12 gap-2">
      <ProductCard className="col-span-full sm:col-span-6 md:col-span-8 lg:col-span-5" image={sofa} title="sofa" />
      <ProductCard className="col-span-full sc370:col-span-6 md:col-span-4 lg:col-span-2" image={chair} title="chair" />
      <ProductCard className="col-span-full sc370:col-span-6 lg:col-span-3" image={table} title="table" />
      <ProductCard className="col-span-full sm:col-span-6 lg:col-span-2" image={chair1} title="chair" />
    </div>
  );
};

export default NewestProduct;
