import React from 'react'
import spinner from '../assets/svg/spinner.svg'

export default function Spinner() {
    return (
        <div className='flex items-center justify-center bg-black bg-opacity-50 fixed top-0 left-0 right-0 bottom-0 z-30'>
            <div>
                <img src={spinner} alt="Loading..." className='h-24'/>
            </div>
        </div>
)
}
