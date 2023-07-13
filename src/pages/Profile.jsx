import { getAuth, updateProfile } from 'firebase/auth'
import { doc, updateDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { db } from '../firebase'

export default function Profile() {
    const auth = getAuth()
    const navigate = useNavigate()
    const [changeDetails, setChangeDetails] = useState(false)
    const [formData,setFormData] = useState({name:auth.currentUser.displayName,email:auth.currentUser.email})
    const {name,email} = formData
    const onLogout = () =>{
        auth.signOut()
        navigate('/')
    }
    const onChange = (e)=>{
        setFormData({...formData,[e.target.id]:e.target.value})
    }
    const onSubmit = async()=>{
        try {
            if (auth.currentUser.displayName !== name) {
                await updateProfile(auth.currentUser,{displayName:name})
                const docRef = doc(db, 'users', auth.currentUser.uid)
                await updateDoc(docRef,{name})
                toast.success('Profile detail updated')
            }
        } catch (error) {
            toast.error('Could not update profile details')
        }
    }

    return (
        <>
            <section className='max-w-6xl flex flex-col justify-center items-center'>
                <h1 className='font-bold text-center text-3xl mt-6'>My Profile</h1>
                <div className='w-full px-3 mt-6 md:w-[50%]'>
                    <form>
                        <input disabled = {!changeDetails} onChange={onChange} type="text" id='name' value={name} className={`w-full px-4 py-2 border-gray-300 text-gray-700 rounded bg-white transition ease-in-out mb-6 ${changeDetails && "bg-red-200 focus:bg-red-200"}`}/>
                        <input disabled type="email" id='email' value={email} className='w-full px-4 py-2 border-gray-300 text-gray-700 rounded bg-white transition ease-in-out mb-6'/>
                    </form>
                    <div className='flex justify-between whitespace-nowrap text-sm sm:text-md'>
                        <p className='flex items-center md:text-sm'>Do you want to change your name?
                            <span className='text-red-600 hover:text-red-800 transition ease-in-out duration-200 ml-1 cursor-pointer' onClick={()=>{
                                changeDetails && onSubmit();
                                setChangeDetails(!changeDetails)
                            }}>
                                {changeDetails?'Apply Change' : 'Edit'}
                            </span>
                        </p>
                        <p onClick={onLogout} className='text-blue-600 hover:text-blue-800 transition ease-in-out cursor-pointer'>Sign out</p>
                    </div>
                </div>
            </section>
        </>
    )
}
