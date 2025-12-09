import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import { useAuth } from './components/UseAuth'
import { toast } from 'react-toastify'
const Signin = () => {
    const[error,setError]=useState('')
    const[success,setSuccess]=useState('')
    const{register,handleSubmit}=useForm()
    const navigate=useNavigate()
    const{login}=useAuth()
    const onSubmit=async(data)=>{
        try {
            const response=await axios.post('http://localhost:3000/api/auth/signin',data)
            setSuccess("success")
            const token=response.data.token
            login(token)
            navigate('/')
            toast.success("signed in successfully")
        } catch (error) {
            console.log(error)
            setError(error.response.data.message)
            toast.error(error.response.data.message)
        }
    }
  return (
    <div className='min-h-screen flex  justify-center mx-auto mt-36'>
        <div className='w-md h-full flex flex-col gap-2 items-center p-6 bg-gray-200 rounded-lg'>
            <h1>register</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-full'>
                <div className='mb-2'>
                    <label className='block' htmlFor="email">email:</label>
                    <input className='p-2 rounded-lg w-full' type="email" id='email' placeholder='enter your email' {...register('email',{required:true})} />
                </div>
                <div className='mb-2'>
                    <label className='block' htmlFor="password">password:</label>
                    <input className='p-2 rounded-lg w-full' type="password" id='password' placeholder='enter your password' {...register('password',{required:true,minLength:6})} />
                </div>
                <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>signin</button>
                {error && <p className='text-red-500'>{error}</p>}
                {success && <p className='text-green-500'>{success}</p>}
            </form>
            <p className='text-sm text-gray-700'>don't have an account?
                <Link className='text-blue-500' to="/register"> signin</Link></p>
        </div>
    </div>
  )
}

export default Signin