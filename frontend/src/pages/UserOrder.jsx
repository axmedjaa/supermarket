import { useEffect, useState } from "react";
import { useAuth } from "../components/UseAuth";
import { toast } from "react-toastify";
import axios from "axios";

const UserOrder = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getOrders = async () => {
      try {
        if (!user) return;
        setLoading(true);
        const res = await axios.get(
          `http://localhost:3000/api/orders/${user._id}`
        );
        setOrders(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    getOrders();
  }, [user]);
  const handleDelete = async (orderId) => {
    try {
      await axios.delete(`http://localhost:3000/api/orders/${orderId}`);
      setOrders(orders.filter((order) => order._id !== orderId));
      toast.success("order deleted successfully");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
   if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        {/* Spinner */}
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
        <p className="ml-4 text-lg font-medium">Loading orders...</p>
      </div>
    );
  }
  return (
    <div className="min-h-screen mx-auto bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">My Orders</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {orders.length > 0 ? (
          orders.map((order) => (
            <div
              key={order._id}
              className=" flex flex-col bg-white p-4 rounded-lg shadow-md"
            >
              <div className="relative mb-2">
                <img
                  src={order.image}
                  alt={order.title}
                  className="w-full h-48 object-cover mb-4"
                />
                <span
                  className={`absolute top-2 right-2 px-3 py-1 text-sm rounded-full font-semibold ${
                    order.status === "pending"
                      ? "bg-yellow-200 text-yellow-700"
                      : order.status === "completed"
                      ? "bg-green-200 text-green-700"
                      : "bg-red-200 text-red-700"
                  }`}
                >
                  {order.status}
                </span>
              </div>
              <h2 className="text-xl font-semibold mb-2">{order.title}</h2>
              <p className="text-slate-500 text-sm mb-2">
              Created: {new Date(order.createdAt).toLocaleString()}
            </p>
              <span className="text-gray-600 text-xl font-semibold">
                price: {order.price}
              </span>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold">
                  Quantity: {order.quantity}
                </span>
                <span className="text-xl font-bold">
                  total:{" "}
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(order.price * order.quantity)}
                </span>
              </div>
              {order.status !== "pending" && (
                <button
                  onClick={() => handleDelete(order._id)}
                  className="bg-rose-500 hover:bg-rose-600 text-white py-2 px-4 rounded mt-4"
                >
                  delete
                </button>
              )}
            </div>
          ))
        ) : (
          <h1 className="text-3xl font-bold mb-6">No orders found</h1>
        )}
      </div>
    </div>
  );
};

export default UserOrder;
