import axios from 'axios';
import React, { useEffect } from 'react'
import { Link } from 'react-router';
import { toast } from 'react-toastify';

const Manage = () => {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
    fetchData();
  },[])
  const handleDelete = async(id) => {
    try {
      const response=await axios.delete(`/api/products/${id}`)
      setData(data.filter(item=>item._id!==id))
      alert(response.data)
      console.log(response.data)
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }
  return (
    <div className='min-h-screen bg-slate-700'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6'>
        {
          data.map((item)=>(
            <div className='p-4 bg-gray-200 flex flex-col gap-2 rounded-lg' key={item._id}>
              <img src={item.image} alt="" className='w-full' />
              <h1 className='font-bold'>{item.name}</h1>
              <p className='text-sm text-gray-600'>{item.description}</p>
             <div className='flex justify-between'>
               <p>{item.price}</p>
              <p>{item.tags}</p>
             </div>
              <div className='flex justify-between gap-2'>
                <Link to={`/dashboard/create/${item._id}`}  className='bg-red-500 p-2 rounded-lg'>update</Link>
                <button onClick={()=>handleDelete(item._id)} className='bg-blue-500 px-6 py-2 rounded-lg'>delete</button>

              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Manage