import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const Message = () => {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        const fetchMessages = async () => {
          try {
            const response = await fetch('http://localhost:3000/api/contact');
            const data = await response.json();
            console.log(data);
            setMessages(data);
          } catch (error) {
            console.error('Error fetching messages:', error);
          }
        };
        fetchMessages();
      }, []);
        const handleDelete = async (id) => {
          try {
            await axios.delete(`http://localhost:3000/api/contact/${id}`);
            setMessages(messages.filter((msg) => msg._id !== id));
            toast.success("Message deleted successfully");
          } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
          }
        };
  return (
    <div className='min-h-screen bg-white p-6 '>
        <h1 className='text-4xl font-bold'>Messages</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-6'>
            {messages.map((msg) => (
                <div key={msg._id} className='border p-4 my-4 rounded-lg shadow-md'>
                    <h2 className='text-2xl font-semibold mb-2'>{msg.name}</h2>
                    <p className='text-gray-600'>{msg.message}</p>
                    <p className='text-sm text-gray-500 mt-2'>Email: {msg.email}</p>
                    <button onClick={() => handleDelete(msg._id)} className='bg-red-500 text-white py-2 px-4 rounded-full mt-4 hover:bg-slate-700 hover:text-white'>Delete</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Message