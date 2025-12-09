import React from 'react'

const Discount = () => {
  return (
    <div className='min-h-screen bg-gray-150 mx-auto flex items-center p-6 mt-40 sm:mt-20 md:mt-16'>
            <div className='grid grid-cols-1 lg:grid-cols-3 space-x-2  gap-4 w-full p-6'>
                <div className='flex flex-col sm:flex-row-reverse items-center justify-between rounded-lg  bg-rose-600'>
                    <img src="https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/04/bg-2.png" alt="Discount1" className=' w-full h-55 '/>
                    <div className='ml-10 space-y-2'>
                        <h2 className='text-white text-4xl font-bold'>50% Off</h2>
                    <h2 className='text-white text-4xl font-bold'>Success</h2>
                    </div>
                </div>
                <div className='flex  rounded-lg  bg-gray-300'>
                    <img src="https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/04/bg-1.png" alt="Discount2" className=' w-40 h-60'/>
                    <div className='flex flex-col items-center mt-12 mr-10'>
                    <h2 className='text-white text-3xl font-bold'>50% Off</h2>
                    <h2 className='text-4xl font-bold'>All Chips</h2>
                    </div>
                </div>
                <div className='flex flex-col-reverse justify-between  rounded-lg  bg-green-600 lg:row-span-2'>
                    <img src="https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/04/bg-4.png" alt="Discount2" className='w-full h-60 '/>
                <div className='mt-10 px-4 space-y-2 ml-10'>
                    <h2 className='text-4xl font-bold '>50% Off</h2>
                        <h2 className='text-4xl font-bold'>full fresh <br /> vegetable</h2>
                    <button className=' bg-slate-800 text-white rounded-full py-2 px-4 hover:bg-slate-600'>Shop Now</button>
                </div>
                </div>
                <div className='flex flex-col-reverse  sm:flex-row-reverse  items-center sm:justify-between rounded-lg  bg-slate-600 lg:col-span-2'>
                    <img src="https://xtratheme.com/elementor/supermarket/wp-content/uploads/sites/106/2023/04/bg-3.png" alt="Discount2" className=' w-70 h-70 object-cover '/>
                   <div className='flex flex-col  sm:ml-12 gap-2 p-2'>
                     <h2 className='text-white text-4xl font-bold'>50% Off</h2>
                    <h2 className=' text-4xl font-bold'>Sale 58% Off</h2>
                    <h3 className=' text-4xl font-bold'>All Fruit Products</h3>
                    <button className=' bg-slate-800 text-white rounded-full py-2 px-4 hover:bg-slate-600'>Shop Now</button>
                   </div>
                </div>
        </div>
    </div>
  )
}

export default Discount