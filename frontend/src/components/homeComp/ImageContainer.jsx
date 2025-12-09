const ImageContainer = () => {
  return (
    <div className="min-h-screen mx-auto p-[6%] mt-">
        <div className="h-fullsm:h-[450px] rounded-xl shadow-lg grid grid-cols-1 lg:grid-cols-2"
        style={{ backgroundImage: `url('https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/05/box-bg.jpg')`, backgroundSize: 'cover', height: 'full' }}
        >
            <div className="flex flex-col justify-center sm:ml-16 p-6">
                <h1 className="text-4xl font-bold text-white mb-2">XtraSupermarket</h1>
                <h2 className="text-6xl font-bold text-white mb-2">faster on mobile</h2>
                <p className="text-xl leading-10 text-white mb-2">a supermarket is a self-service shop offering a wide variety of food, beverages and household products, organized into sections</p>
                <div className="flex gap-4 mt-4">
                    <button className="bg-green-500 text-white py-2 px-4 rounded-full mt-4 hover:bg-slate-700 hover:text-white">Download App</button>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-full mt-4 hover:bg-slate-700 hover:text-white">Learn More</button>
                </div>
            </div>
            <img src="https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/05/mobile.png" alt=""
            className="w-full h-[450px] object-container"  
            />
        </div>
    </div>
  )
}

export default ImageContainer