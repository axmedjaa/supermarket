const Category = () => {
  return (
    <div className="flex flex-col mx-auto items-center px-[6%]">
        <h1 className="text-4xl font-bold">Discover our <span className="text-green-500 ">Categories</span></h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-10 mb-20">
            <div className="flex flex-col items-center justify-center p-6 border-3 border-gray-100 rounded-xl hover:shadow-lg transition-shadow duration-300 ease-in-out hover:scale-110 ">
                <img src="https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/05/s1.png" alt="cat1" />
                <h2 className="text-2xl font-semibold mt-2">Fishes & Raw Meats</h2>
            </div>
            <div className="flex flex-col items-center justify-center p-6 border-3 border-gray-100 rounded-xl hover:shadow-lg transition-shadow duration-300 ease-in-out hover:scale-110">
                <img src="https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/05/s1.png" alt="cat1" />
                <h2 className="text-2xl font-semibold mt-2">Fruits & Vegetables</h2>
            </div>
            <div className="flex flex-col items-center justify-center p-6 border-3 border-gray-100 rounded-xl hover:shadow-lg transition-shadow duration-300 ease-in-out hover:scale-110">
                <img src="https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/05/s1.png" alt="cat1" />
                <h2 className="text-2xl font-semibold mt-2">Breads & Sweats</h2>
            </div>
            <div className="flex flex-col items-center justify-center p-6 border-3 border-gray-100 rounded-xl hover:shadow-lg transition-shadow duration-300 ease-in-out hover:scale-110">
                <img src="https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/05/s1.png" alt="cat1" />
                <h2 className="text-2xl font-semibold mt-2">Milks & Proteins</h2>
            </div>
            <div className="flex flex-col items-center justify-center p-6 border-3 border-gray-100 rounded-xl hover:shadow-lg transition-shadow duration-300 ease-in-out hover:scale-110">
                <img src="https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/05/s1.png" alt="cat1" />
                <h2 className="text-2xl font-semibold mt-2">Cleaning Materials</h2>
            </div>
            <div className="flex flex-col items-center justify-center p-6 border-3 border-gray-100 rounded-xl hover:shadow-lg transition-shadow duration-300 ease-in-out hover:scale-110">
                <img src="https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/05/s1.png" alt="cat1" />
                <h2 className="text-2xl font-semibold mt-2">Ready to use Foods</h2>
            </div>
    
        </div>
    </div>
  )
}

export default Category