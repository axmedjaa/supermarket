import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useAuth } from "../components/UseAuth";

const Contact = () => {
    const{ user }=useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async(data) => {
    const { name, email, message } = data;
  if (!name || !email || !message) {
    toast.error("Please fill in all fields");
    return;
  }
    if(!user){
        toast.error("You must be logged in to send a message");
        return;
    }
    try {
        console.log(user);
        const response=await axios.post('http://localhost:3000/api/contact',{...data, userId: user._id})
        if(response.status===200){
            toast.success("Message sent successfully");
        }
    } catch (error) {
        toast.error("Failed to send message");
        console.log(error);
    }

  };
  return (
    <div className="min-h-screen bg-white p-6">
      {/* HEADER */}
      <div className="text-center mt-6">
        <h1 className="text-4xl font-bold">
          Contact <span className="text-green-500">Us</span>
        </h1>
        <p className="text-gray-600 mt-2 text-lg">
          We'd love to hear from you. Get in touch with us anytime.
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 max-w-6xl mx-auto">
        {/* CONTACT INFO SECTION */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold">Our Information</h2>

          <div className="flex items-start gap-4">
            <div className="bg-green-500 text-white w-12 h-12 rounded-full flex justify-center items-center text-xl">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Address</h3>
              <p className="text-gray-600">Mogadishu, Somalia</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-green-500 text-white w-12 h-12 rounded-full flex justify-center items-center text-xl">
              <i className="fa-solid fa-phone"></i>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Phone</h3>
              <p className="text-gray-600">+252 61 2345678</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-green-500 text-white w-12 h-12 rounded-full flex justify-center items-center text-xl">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="text-gray-600">support@supermarket.com</p>
            </div>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-4">
            <i className="fa-brands fa-facebook text-3xl text-gray-600 hover:text-green-500 cursor-pointer"></i>
            <i className="fa-brands fa-instagram text-3xl text-gray-600 hover:text-green-500 cursor-pointer"></i>
            <i className="fa-brands fa-twitter text-3xl text-gray-600 hover:text-green-500 cursor-pointer"></i>
          </div>
        </div>

        {/* CONTACT FORM */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-6 bg-gray-100 rounded-xl shadow-md flex flex-col gap-4"
        >
          <h2 className="text-2xl font-semibold mb-2">Send a Message</h2>

          <div className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-500 text-center">
                This field is required
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Email Address"
              className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500 text-center">
                This field is required
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <textarea
              rows="5"
              placeholder="Your Message"
              className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500"
              {...register("message", { required: true })}
            ></textarea>
            {errors.message && (
              <span className="text-red-500 text-center">
                This field is required
              </span>
            )}
          </div>

          <button
            type="submit"
            className="bg-green-500 hover:bg-[rgb(18,45,64)] text-white font-semibold py-3 rounded-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
