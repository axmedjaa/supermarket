import { useEffect, useState } from "react";
import { useAuth } from "./UseAuth";
import axios from "axios";
import { Link } from "react-router";
import { toast } from "react-toastify";

const CartButton2 = ({ product, setAdded, added, quantity }) => {
  const { user, token } = useAuth();
  const [showUpPopup, setShowUpPopup] = useState(false);
   useEffect(() => {
    const checkCart = async () => {
      if (!user) return;
      try {
        const res = await axios.get(`http://localhost:3000/api/carts/${user._id}`);
        const isAdded = res.data.some(item => item.productId === product._id);
        setAdded(isAdded);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };
    checkCart();
  }, [user, product._id]);
  const handleAdd = async () => {
    try {
      if (!token) {
        setShowUpPopup(true);
        return;
      }
      const cartItem ={
          userId: user._id,
          productId: product._id,
          title: product.name,
          image: product.image,
          price: product.price,
          quantity: quantity,
        }
       await axios.post('http://localhost:3000/api/carts',cartItem );
      toast.success("item added to cart successfully");
      setAdded(true);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      console.log(user)
      console.log(product._id)
    }
  };
  const handleRemove = async () => {
      try {
        await axios.delete(`http://localhost:3000/api/carts/${user._id}/${product._id}`)
        setAdded(false)
        toast.success("item removed from cart successfully")
      } catch (error) {
        console.log(error);
      }
  }
  return (
    <div>
      {!added ? (
        <button
          onClick={handleAdd}
          className=" bg-green-600 text-white px-6 py-2 rounded-lg "
        >
          <i className="fa-solid fa-cart-plus"></i>
          <span className="ml-2">Added to cart</span>
        </button>
      ) : (
        <button
          onClick={handleRemove}
          className=" bg-green-600 text-white px-6 py-2 rounded-lg"
        >
         <span className="ml-2">remove from cart</span>
        </button>
      )}
      {
        showUpPopup&&(
            <div className="fixed top-12 left-1/2 -tenlate-x-1/2 bg-white border-1 border-gray-300 p-4 rounded-lg shadow-lg z-50">
                <p className="text-gray-700 text-center mb-2">you need to login to add to cart</p>
                <div className="flex justify-between">
                    <button onClick={()=>setShowUpPopup(false)} className="bg-red-600 text-white px-6 py-2 rounded-lg">cancel</button>
                    <Link to="/signin"><button className="bg-green-600 text-white px-6 py-2 rounded-lg ml-2">login</button></Link>
                </div>
            </div>
        )
      }
    </div>
  );
};

export default CartButton2;
