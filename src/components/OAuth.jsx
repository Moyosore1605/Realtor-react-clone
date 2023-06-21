import React from 'react'
import {FcGoogle} from 'react-icons/fc'

const OAuth = ()=>{
    return (
        <button className='flex items-center bg-red-700 px-7 py-3 rounded justify-center w-full text-white text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md
        hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out'>
            <FcGoogle className='mr-2 text-2xl bg-white rounded-full'/>
            CONTINUE WITH GOOGLE</button>
    )
}

export default OAuth
