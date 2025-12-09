import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';

const Create = () => {
     const allTags = ["Food", "Drink", "Snack", "Dessert"];
     const{id}=useParams()
     const{register,handleSubmit ,setValue,formState:{errors}}=useForm()
     const[errorsMsg,setErrorMsg]=useState('')
     const navigate=useNavigate()
     useEffect(()=>{
        const getProduct=async()=>{
             if(id){
             try {
                const response=await axios.get(`/api/products/${id}`)
                setValue("name",response.data.name)
                setValue("price",response.data.price)
                setValue("description",response.data.description)
                setValue("image",response.data.image)
                setValue("category",response.data.category)
                setValue("stock",response.data.stock)
                setValue("tags",response.data.tags)
                console.log(response)
             } catch (error) {
                console.log(error)
             }
         }
        }
        getProduct()
     },[id,setValue])
     const onSubmit=async(data)=>{
       try {
        if(id){
          const res =await axios.put(`/api/products/${id}`,data)
          toast.success("item updated successfully")
          console.log(res)
          navigate('/dashboard/manage')
       }else{
        const res =await axios.post('http://localhost:3000/api/products',data)
        toast.success("item added successfully")
        console.log(res)
       }
       } catch (error) {
         console.log(error)
         setErrorMsg(error.response.data.message)  
         toast.error(error.response.data.message)       
       }
     }
  return (
    <div className='min-h-screen bg-slate-700 p-6'>
        <div className='max-w-7xl  mx-auto bg-gray-200 p-6 rounded-lg flex flex-col gap-2'>
            <h1 className='text-4xl font-bold '>{id?"update item":"create item"}</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
                <div className='mb-2'>
                    <label className='block' htmlFor="name">name:</label>
                    <input className='p-2 rounded-lg w-full border-1 border-gray-700' type="text" id='name' placeholder='enter item name' {...register('name',{required:"name is required",minLength:{value:3,message:"name must be at least 3 characters"}})} />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className='mb-2'>
                    <label className='block' htmlFor="price">price:</label>
                    <input className='p-2 rounded-lg w-full border-1 border-gray-700' type="number" step="any" id='price' placeholder='enter item price' {...register('price',{required:"price is required"})} />
                    {errors.price && <p className='text-red-500'>{errors.price.message}</p>}
                </div>
                <div className='mb-2'>
                    <label className='block' htmlFor="description">description:</label>
                    <input className='p-2 rounded-lg w-full border-1 border-gray-700' type="text" id='description' placeholder='enter item description' {...register('description')} />
                    {errors.description && <p className='text-red-500'>{errors.description.message}</p>}
                </div>
                <div className='mb-2'>
                    <label className='block' htmlFor="image">image:</label>
                    <input className='p-2 rounded-lg w-full border-1 border-gray-700' type="text" id='image' placeholder='enter item image' {...register('image',{required:"image is required"})} />
                    {errors.image && <p className='text-red-500'>{errors.image.message}</p>}
                </div>
                <div className='mb-2'>
                    <label htmlFor="stock">stock:</label>
                    <input className='p-2 rounded-lg w-full border-1 border-gray-700' type="number" id='stock' placeholder='enter item stock' {...register('stock',{required:"stock is required"})} />
                    {errors.stock && <p className='text-red-500'>{errors.stock.message}</p>}
                </div>
                <div className='mb-2'>
                    <label className='block' htmlFor="category">category:</label>
                    <input className='p-2 rounded-lg w-full border-1 border-gray-700' type="text" id='category' placeholder='enter item category' {...register('category',{required:"category is required"})} />
                    {errors.category && <p className='text-red-500'>{errors.category.message}</p>}
                </div>
                <div className='mb-2'>
                    {allTags.map((tag) => (
                       <label className='mr-2' htmlFor={tag} key={tag}>
                           <input className='mr-2' type="checkbox" id={tag} value={tag}
                           {...register('tags',{required:"tags is required"})}
                           />
                           {tag}
                       </label>
                    ))}
                    {errors.tags && <p className='text-red-500'>{errors.tags.message}</p>}
                </div>
                <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                    {id ? "update item" : "create item"}
                </button>
                {errorsMsg && <p className='text-red-500 text-center'>{errorsMsg}</p>}
            </form>
        </div>
    </div>
  )
}

export default Create