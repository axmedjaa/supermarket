import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-2xl font-bold">about</h1>
      <div className="flex flex-col justify-center items-center mx-auto mt-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
          <div className="relative flex flex-col gap-4 p-4 ">
            <img
              src="https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/05/about.png"
              alt=""
              className="w-full h-[600px] rounded-lg object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
            />
            <div className="absolute bottom-[-2%] left-[-2%]  bg-[rgb(18,45,64)] text-white p-12 w-82 rounded-4xl shadow-lg">
             <h2 className="text-2xl text-center font-bold leading-10"> We've been delivering a fresh take on grocery shop for more than 35 years</h2>
            </div>
        </div>
        <div className="flex flex-col gap-6 p-4 mt-6">
          <h2 className="text-4xl font-bold mb-6">About Our <span className="text-green-500">Supermarket</span></h2>
          <p className="text-gray-600 text-xl line-clamp-6 leading-1o">A company is a separate legal entity and can incur debt, sue and be sued. The company’s shareholders (the owners) can limit their personal liability and are generally not responsible for company debts. A company is a complex business structure and has high set-up and reporting costs. You can form a company as either a private (also known as proprietary) or public entity. </p>
          <ul className="grid grid-cols-2 gap-4">
            <li className="flex items-center mb-4">
              <div className="bg-green-500 text-white rounded-full w-10 h-10 flex justify-center items-center 
              hover:bg-[rgb(18,45,64)]"><i className="fa-solid fa-check"></i>
              </div>
              <span className="ml-4 text-xl text-gray-600">Prime Location</span>
            </li>
            <li className="flex items-center mb-4">
              <div className="bg-green-500 text-white rounded-full w-10 h-10 flex justify-center items-center 
              hover:bg-[rgb(18,45,64)]"><i className="fa-solid fa-check"></i>
              </div>
              <span className="ml-4 text-xl text-gray-600">Well understood</span>
            </li>
            <li className="flex items-center mb-4">
              <div className="bg-green-500 text-white rounded-full w-10 h-10 flex justify-center items-center 
              hover:bg-[rgb(18,45,64)]"><i className="fa-solid fa-check"></i>
              </div>
              <span className="ml-4 text-xl text-gray-600">Able to raise significant</span>
            </li>
            <li className="flex items-center mb-4">
              <div className="bg-green-500 text-white rounded-full w-10 h-10 flex justify-center items-center 
              hover:bg-[rgb(18,45,64)]"><i className="fa-solid fa-check"></i>
              </div>
              <span className="ml-4 text-xl text-gray-600">Offset against profits</span>
            </li>
            <li className="flex items-center mb-4">
              <div className="bg-green-500 text-white rounded-full w-10 h-10 flex justify-center items-center 
              hover:bg-[rgb(18,45,64)]"><i className="fa-solid fa-check"></i>
              </div>
              <span className="ml-4 text-xl text-gray-600">Easy to sell ownership</span>
            </li>
            <li className="flex items-center mb-4">
              <div className="bg-green-500 text-white rounded-full w-10 h-10 flex justify-center items-center 
              hover:bg-[rgb(18,45,64)]"><i className="fa-solid fa-check"></i>
              </div>
              <span className="ml-4 text-xl text-gray-600">Profits can be reinvested</span>
            </li>
          </ul>
        </div>
        </div>
           <div className="mt-20 w-full">
          <h2 className="text-3xl font-bold text-center mb-10">
            Why Choose <span className="text-green-500">Us?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-6 shadow-md rounded-xl bg-white flex flex-col items-center hover:shadow-xl transition-all">
              <i className="fa-solid fa-leaf text-green-500 text-5xl"></i>
              <h4 className="mt-4 font-bold text-xl">Fresh Products</h4>
              <p className="text-gray-600 text-center mt-2">
                We guarantee daily-fresh groceries sourced with care.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 shadow-md rounded-xl bg-white flex flex-col items-center hover:shadow-xl transition-all">
              <i className="fa-solid fa-truck-fast text-green-500 text-5xl"></i>
              <h4 className="mt-4 font-bold text-xl">Fast Delivery</h4>
              <p className="text-gray-600 text-center mt-2">
                Quick and reliable delivery straight to your home.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 shadow-md rounded-xl bg-white flex flex-col items-center hover:shadow-xl transition-all">
              <i className="fa-solid fa-heart text-green-500 text-5xl"></i>
              <h4 className="mt-4 font-bold text-xl">Customer Focused</h4>
              <p className="text-gray-600 text-center mt-2">
                We prioritize customer satisfaction and comfort.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
