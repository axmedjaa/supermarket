const Footer = () => {
  return (
    <div className="min-h-full bg-[rgb(18,45,64)] mx-auto px-[8%] ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-8 lg:space-y-0 gap-8 mt-12 py-12">
        <div className="flex flex-col gap-6 border  border-gray-400 rounded-4xl py-12 px-8">
           <div className="w-48">
             <img
              src="https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/04/logo-sm.png"
              alt="logo"
            />
           </div>
          <p className="text-xl text-white">
            “Be who you are and say what you feel, because those who mind don't
            matter, and those who matter don't mind.”
          </p>
          <div class="flex space-x-4 text-2xl text-white">
            <a
              href="https://facebook.com"
              target="_blank"
              class="p-1.5 bg-slate-700 rounded-full hover:text-blue-600 text-center"
            >
              <i class="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              class="p-1.5 bg-slate-700 rounded-full hover:text-blue-400 text-center"
            >
              <i class="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              class="p-1.5 bg-slate-700 rounded-full hover:text-pink-500 text-center"
            >
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4 border  border-gray-400 rounded-4xl py-12 px-8">
            <h1 className="text-2xl font-bold text-white">Useful Links</h1>
            <div className="border-1 border-gray-600"></div>
            <div className="flex flex-col gap-2 text-gray-400">
                <a className="flex items-center gap-2 hover:text-green-500">
                    <i class="fas fa-link text-green-500"></i>
                    <h3 className="text-xl font-bold text-gray-300">Help Center</h3>
                </a>
                <a className="flex items-center gap-2 hover:text-green-500">
                    <i class="fas fa-link text-green-500"></i>
                    <h3 className="text-xl font-bold text-gray-300">Terms & Conditions</h3>
                </a>
                <a className="flex items-center gap-2 hover:text-green-500">
                    <i class="fas fa-link text-green-500"></i>
                    <h3 className="text-xl font-bold text-gray-300">Privacy Policy</h3>
                </a>
                <a className="flex items-center gap-2 hover:text-green-500">
                    <i class="fas fa-link text-green-500"></i>
                    <h3 className="text-xl font-bold text-gray-300">Refund Policy</h3>
                </a>
                <a className="flex items-center gap-2 hover:text-green-500">
                     <i class="fas fa-phone text-green-500"></i>
                    <h3 className="text-xl font-bold text-gray-300">+12 534 565 896</h3>
                </a>
                <a className="flex items-center gap-2 hover:text-green-500">
                    <i class="fas fa-envelope text-green-500"></i>
                    <h3 className="text-xl font-bold text-gray-300">info@xtramarket.com</h3>
                </a>
            </div>
        </div>
        <div className="flex flex-col items-center text-center gap-4 border  border-gray-400 rounded-4xl py-12 px-8">
            <h1 className="text-2xl font-bold text-white">Interested in a Great Way <span className="text-green-500">Make Money?</span></h1>
            <p className="text-xl text-gray-400 mt-4">
                A supermarket is a self-service shop offering a wide variety of food, beverages and household products.
            </p>
            <button className="mt-4 px-6 py-3 bg-green-500 capitalize text-xl  hover:bg-white hover:text-black rounded-4xl">become customer</button>
        </div>
      </div>
      <p className="text-center text-gray-400 ">
        With🤍by XtraTheme. Copyright © 2025 Xtra Theme.
      </p>
    </div>
  );
};

export default Footer;
