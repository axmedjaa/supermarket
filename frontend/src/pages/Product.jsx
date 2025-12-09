import  { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';
import CartButton2 from '../components/CartButton2';
import { useAuth } from '../components/UseAuth';

const Product = () => {
     const [product, setProduct] = useState(null);
     const[quantity,setQuantity]=useState(1);
     const [added, setAdded] = useState(false);
     const{id}=useParams();
     const navigate = useNavigate();
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/products/${id}`
        );
        setProduct(res.data);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };
    getProduct();
  },[id]);
  if (!product) {
    return (
      <div className="min-h-screen flex justify-center items-center text-gray-600">
        Loading product...
      </div>
    );
  }
 const handleCount = (action) => {
  if (action === "increment") {
    setQuantity(prev => prev + 1);
  } else if (action === "decrement" && quantity > 1) {
    setQuantity(prev => prev - 1);
  }
};

  return (
    <div className='min-h-screen bg-gray-100 p-6'>
        <div className="max-w-8xl mx-auto mt-6 capitalize">
            <div className='flex items-center justify-between'>
                <h1 className='text-3xl font-bold mb-4'>{product.name}</h1>
           <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center text-sm font-medium text-green-600 hover:text-white hover:bg-green-600 border border-green-600 px-4 py-2 rounded-md transition duration-200 mb-6"

        >
          <i className="fas fa-arrow-left mr-2"></i>
          Go Back
        </button>
            </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="flex items-center justify-center">
                            <img src={product.image} className='w-full' alt="" />
                        </div>
                        <div className="flex flex-col gap-4">
                            <h1 className='text-2xl font-bold'>{product.name}</h1>
                              <div className="text-yellow-400 w-auto">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                          </div>
                            <h3>${product.price}</h3>
                            <p className='text-lg'>{product.description}</p>
                            {
                              !added && <div className='flex items-center gap-4'>
                                <button onClick={()=>handleCount('decrement')} className='bg-gray-100 px-4 rounded-lg border-1 border-gray-300 cursor-pointer text-2xl font-bold text-green-400 hover:text-green-600 '>-</button>
                                <span className='text-lg px-6 rounded-lg border-1 border-gray-300 '>{quantity}</span>
                                <button onClick={()=>handleCount('increment')} className='bg-gray-100 hover:text-green-600 text-green-400 px-4 rounded-lg border-1 border-gray-300 cursor-pointer text-lg'>+</button>
                            </div>
                            }
                             <CartButton2 product={product} added={added} setAdded={setAdded} quantity={quantity}/>    
                             <div className='flex  flex-col gap-2 p-4 rounded-lg'>
                                <div className='text-gray-500 flex gap-6'><span className='font-bold text-lg text-black'>Stock:</span> {product.stock===0?"Out of stock":product.stock}</div>
                                <div className='text-gray-500 flex gap-6'><span className='font-bold text-lg text-black'>Tags:</span> {product.tags}</div>
                                <div className='text-gray-500 flex gap-6'><span className='font-bold text-lg text-black'>Categorys:</span> {product.category}</div>
                             </div>
                             <div>
                                <li className='flex gp2 items-center'>
                                <i className="fas fa-check"></i>
                                    <p>Free shipping on all orders over $100</p>
                                </li>
                                <li className='flex gp2 items-center'>
                                  <i className="fas fa-check"></i>
                                    <p>14 days easy refund & returns</p>
                                </li>
                                <li className='flex gp2 items-center'>
                                   <i className="fas fa-check border-1 border-gray-500 rounded-full"></i>
                                    <p>Product taxes and customs duties included</p>
                                </li>
                             </div>
                        </div>
                    </div>
        </div>
    </div>
  )
}

export default Product