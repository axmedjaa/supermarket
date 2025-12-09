import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const Order = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get("/api/orders");
        setOrders(res.data);
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      }
    };
    fetchOrders();
  }, []);
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/orders/${id}`);
      setOrders(orders.filter((order) => order._id !== id));
      toast.success("order deleted successfully");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  const handleStatus = async (id, status) => {
    try {
      await axios.put(`/api/orders/${id}`, { status });
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === id ? { ...order, status } : order
        )
      );
      toast.success(`order marked as ${status}`);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="min-h-screen mx-auto bg-gray-100 ">
      <h1 className="text-3xl font-bold mb-6">Orders</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {orders.length > 0 ? (
          orders.map((order) => (
            <div
              key={order._id}
              className="flex flex-col bg-white p-4 rounded-lg shadow-md"
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
              <h2 className="text-lg font-semibold mb-2">{order.title}</h2>
              <p className="text-slate-500 text-sm mb-2">
              Created: {new Date(order.createdAt).toLocaleString()}
            </p>
              <span>Quantity: {order.quantity}</span>
              <div className="flex place-items-center justify-between">
                <span>Price: {order.price}</span>
                <span className="text-xl font-bold">
                  total:{" "}
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(order.price * order.quantity)}
                </span>
              </div>
              <div className="mt-2 border-t pt-2 text-sm text-gray-700">
                <p>
                  <span className="font-semibold">User:</span>{" "}
                  {order.userId?.name}
                </p>
                <p className="text-gray-500 text-sm">{order.userId?.email}</p>
              </div>
              <div className="flex items-center justify-between mt-2">
                <button
                  onClick={() => handleStatus(order._id, "complete")}
                  className="bg-green-500 text-white px-4 md:px-1 lg:px-2 py-2 rounded"
                >
                  Complete
                </button>
                <button
                  onClick={() => handleStatus(order._id, "cancel")}
                  className="bg-yellow-500 text-white px-4 md:px-1 lg:px-2 py-2 rounded ml-2"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleDelete(order._id)}
                  className="bg-red-500 text-white px-4 md:px-1 lg:px-2 py-2 rounded ml-2"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No orders found.</p>
        )}
      </div>
    </div>
  );
};

export default Order;
