
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

const Products = () => {

    const products = useLoaderData();

    return (
      <div className=" flex flex-col justify-center items-center">
        <h1 className="mt-2 mb-8 text-4xl font-bold">Equipment</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    );
};

export default Products;