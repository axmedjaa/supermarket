import { useEffect, useState } from "react";
import { Link } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";
import CartButton from "../CartButton";
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get("http://192.168.1.5:3000/api/products");

        setProducts(response.data);
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    };
    getProducts();
  }, []);
  return (
    <div className="flex flex-col mx-auto px-[6%] ">
      <div className="flex justify-between items-center ">
        <h1 className="text-2xl sm:text-4xl font-bold">
          Best Seller <span className="text-green-500">Products</span>
        </h1>
        <Link to="/products" className="bg-green-500 py-2 px-2 sm:px-4 rounded-full text-center">
          View All Products
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 mb-20">
        {
            products.slice(0,8).map((product)=>(
                <div  className="relative group flex flex-col  justify-center p-6 border-3 border-gray-100 rounded-xl hover:shadow-lg transition-shadow duration-300 hover:scale-110" key={product._id}>
                <Link to={`/product/${product._id}`} className="flex flex-col items-center justify-center">
                    <img src={product.image} alt={product.name} className="w-full h-60 object-cover mb-2" />
                    <h2 className="text-2xl font-semibold mt-2">{product.name}</h2>
                    <p className="text-gray-600 mt-1">{product.category}</p>
                    <div className="flex justify-between items-center mt-4">
                        <div className="text-yellow-400 w-auto">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                    <p className="font-bold text-lg">${product.price}</p>
                    </div>
                </Link>
                 <div className="absolute -bottom-5 right-[20%]  flex items-center">
                <CartButton product={product}/>
              </div>
                  </div>
            ))
        }
      </div>
    </div>
  );
};

export default Products;
