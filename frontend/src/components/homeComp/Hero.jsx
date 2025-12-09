import React from "react";

const Hero = () => {
  return (
    <div
      className="min-h-screen mx-auto  p-6 bg-green-50 relative"
      //     backgroundImage:
      //         "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VwZXJtYXJrZXR8ZW58MHx8MHx8fDA%3D&w=1000&q=80')",
      //   }}
    >
      <div className="grid w-full grid-cols-1 lg:grid-cols-2 space-y-4 md:ml-20">
        <div className="flex flex-col items-start justify-center h-full px-4 py-20 rounded-lg gap-2">
          <h1 className="text-3xl lg:text-5xl font-bold text-green-500 shadow-lg shadow-green-300">
            XtraSupermarket
          </h1>
          <h3 className="text-4xl lg:text-5xl font-bold mt-2">Fresher than Ever</h3>
          <p className="text-2xl text-gray-600  mt-2">
            A supermarket is a self-service shop offering a wide variety <br />{" "}
            of food, beverages and household products, organized <br /> into
            sections.
          </p>
          <div className="flex justify-between items-center gap-2">
            <button className="bg-slate-700 text-white py-3 px-6 hover:bg-green-500 rounded-full shadow-md border border-green-200 hover:text-white transition-all duration-300">
              25% Off Festival
            </button>
            <button className="bg-white text-green-600 font-semibold py-3 px-6 rounded-full shadow-md border border-green-200 hover:bg-green-500 hover:text-white transition-all duration-300">
              Discover Shop
            </button>
          </div>
        </div>
          <img
            src="https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/04/model-1.png"
            alt="Supermarket"
            className="w-full h-auto rounded-lg "
          />
      </div>
      <div className="w-[80%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  px-4 py-6 bg-white  shadow-lg rounded-lg lg:rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
        <div className="flex items-center gap-4">
            <img src="https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/04/icon-1.png" alt="" />
            <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">Free Shipping</h3>
                <p className="text-gray-600">On orders over $50</p>
            </div>
        </div>
        <div className="flex items-center gap-4">
            <img src="https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/04/icon-2.png" alt="" />
            <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">return for free</h3>
                <p className="text-gray-600">Returns are free 3 days</p>
            </div>
        </div>
        <div className="flex items-center gap-4">
            <img src="https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/04/icon-3.png" alt="" />
            <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">Secure Payment</h3>
                <p className="text-gray-600">Your payments 100% safe</p>
            </div>
        </div>
        <div className="flex items-center gap-4">
            <img src="https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/04/icon-4.png" alt="" />
            <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">24/7 Support</h3>
                <p className="text-gray-600">Contact us anytime you want</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
