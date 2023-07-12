import { getAuth } from 'firebase/auth'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'

export default function Profile() {
    const auth = getAuth()
    const navigate = useNavigate()
    const [formData,setFormData] = useState({name:auth.currentUser.displayName,email:auth.currentUser.email})
    const {name,email} = formData
    const onLogout = () =>{
        auth.signOut()
        navigate('/')
    }

    return (
        <>
            <section className='max-w-6xl flex flex-col justify-center items-center'>
                <h1 className='font-bold text-center text-3xl mt-6'>My Profile</h1>
                <div className='w-full px-3 mt-6 md:w-[50%]'>
                    <form>
                        <input disabled type="text" id='name-input' value={name} className='w-full px-4 py-2 border-gray-300 text-gray-700 rounded bg-white transition ease-in-out mb-6'/>
                        <input disabled type="email" id='email-input' value={email} className='w-full px-4 py-2 border-gray-300 text-gray-700 rounded bg-white transition ease-in-out mb-6'/>
                    </form>
                    <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
                        <p className='flex items-center'>Do you want to change your name?
                            <span className='text-red-600 hover:text-red-800 transition ease-in-out duration-200 ml-1 cursor-pointer'>Edit</span>
                        </p>
                        <p onClick={onLogout} className='text-blue-600 hover:text-blue-800 transition ease-in-out cursor-pointer'>Sign out</p>
                    </div>
                </div>
            </section>
        </>
    )
}
