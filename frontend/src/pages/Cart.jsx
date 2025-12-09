import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../components/UseAuth";
import { Link } from "react-router";
import { toast } from "react-toastify";
const Cart = () => {
  const [carts, setCarts] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    const getCart = async () => {
      try {
        if (!user) return;
        const res = await axios.get(
          `http://localhost:3000/api/carts/${user._id}`
        );
        setCarts(res.data);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };
    getCart();
  }, [user]);
  const handleRemove = async (productId) => {
    try {
      await axios.delete(
        `/api/carts/${user._id}/${productId}`
      );
      alert("item removed from cart successfully");
      setCarts(carts.filter((c) => c.productId !== productId));
    } catch (error) {
      console.log(error);
    }
  };
  const handleQuantity = async (cardId, productId, delta) => {
    const cartItem = carts.find((c) => c.productId === productId);
    if (!cartItem) return;
    const newQuantity = Math.max(1, cartItem.quantity + delta);
    setCarts(
      carts.map((c) =>
        c.productId === productId ? { ...c, quantity: newQuantity } : c
      )
    );
    try {
        await axios.put(`/api/carts/${cardId}`,{quantity:newQuantity});
    } catch (error) {
      console.log(error);
    }
  };
  const handleOrder = async () => {
    try {
      if(carts.length === 0) {
        toast.error("Cart is empty");
        return;
      }
      await axios.post(`/api/orders`,carts);
      toast.success("order placed successfully");
      const res = await axios.delete(`/api/carts/${user._id}`);
     if(res.status === 200) {
      setCarts([]);
    } else {
      toast.error("Failed to clear cart");
    }
    } catch (error) {
         toast.error(error.response?.data?.message || "Something went wrong!");
    }
  }

  const total = carts.reduce((acc, c) => acc + c.price * c.quantity, 0);
  return (
    <div className="min-h-screen bg-gray-200 p-6 mx-auto">
      <h1 className="text-2xl font-bold mb-4">shoping cart</h1>
      <div className="flex flex-col">
        {user && (
          <div className="hidden sm:grid grid-cols-6 w-full justify-between items-center p-4 bg-white">
            <h2 className="text-sm md:text-2xl font-bold">remove</h2>
            <h2 className="text-sm md:text-2xl font-bold">picture</h2>
            <h2 className="text-sm md:text-2xl font-bold">product</h2>
            <h2 className="text-sm md:text-2xl font-bold">Price</h2>
            <h2 className="text-sm md:text-2xl font-bold">Quantity</h2>
            <h2 className="text-sm md:text-2xl font-bold">subtotal</h2>
          </div>
        )}
        {user ? (
          carts.map((cart) => (
            <div
              key={cart._id}
              className="grid grid-cols-4 sm:grid-cols-6 w-full justify-between items-center p-4 bg-white mb-4 space-y-3"
            >
              <span
                onClick={() => handleRemove(cart.productId)}
                className="text-red-400 text-2xl font-bold sm:text-center"
              >
                x
              </span>
              <img className="w-16 sm:24" src={cart.image} alt={cart.title} />
              <h2 className="text-lg sm:text-2xl font-bold">{cart.title}</h2>
              <span className="text-lg md:text-2xl font-bold">
                ${cart.price}
              </span>
              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={() => handleQuantity(cart._id, cart.productId, -1)}
                  className="bg-gray-100 px-3 py-1 rounded"
                >
                  -
                </button>
                <span className="text-lg font-medium">{cart.quantity}</span>
                <button
                  onClick={() => handleQuantity(cart._id, cart.productId, 1)}
                  className="bg-gray-100 px-3 py-1 rounded"
                >
                  +
                </button>
              </div>
              <span className="text-lg md:text-2xl font-bold text-center ml-10 sm:ml-0">
                ${(cart.price * cart.quantity).toFixed(2)}
              </span>
            </div>
          ))
        ) : (
          <div className="min-h-screen flex justify-center items-center text-gray-600 mb-16">
            <Link
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center"
              to="/signin"
            >
              login to view cart
            </Link>
            ;
          </div>
        )}
      </div>
      {user  && (
        <div className="mt-6 flex justify-end items-center space-x-6">
          <span className="text-2xl font-bold">Total: ${total.toFixed(2)}</span>
          <button onClick={handleOrder} className="bg-green-600 text-white px-6 py-2 rounded-lg">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
