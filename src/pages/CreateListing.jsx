import React, { useState } from 'react'
import Spinner from '../components/Spinner';
import '../App.css'
import { toast } from 'react-toastify';

export default function CreateListing() {
    const [formData,setFormData] = useState({type:'rent',name:'',bedrooms:1,bathrooms:1,parking:false,furnished:false,address:'',description:'',offer:false,regularPrice:0,discountedPrice:0})
    const {type,name,bedrooms,bathrooms,parking,furnished,address,description,offer,regularPrice,discountedPrice} = formData;


    const onChange = ()=>{}

    return (
        <main className='max-w-md mx-auto px-2'>
            <h1 className='text-3xl font-bold text-center mt-6'>Create Listing</h1>
            <form className='mt-6' onSubmit={onSubmit}>
                <label htmlFor="button" className='font-medium'>Sell/Rent</label>
                <div className='flex mb-6'>
                    <button className={`px-7 py-3 font-medium text-sm shadow-sm rounded hover:shadow-lg focus:shadow-lg w-full transition ease-in-out ${type==='rent'?'bg-white text-black':
                    'bg-slate-600 text-white'}`} type='button' id='type' value='sale' onClick={onChange}>SELL</button>
                    <button className={`px-7 py-3 font-medium text-sm shadow-sm rounded hover:shadow-lg focus:shadow-lg w-full transition ease-in-out ${type==='sale'?'bg-white text-black':
                    'bg-slate-600 text-white'} ms-3`} type='button' id='type' value='rent' onClick={onChange}>RENT</button>
                </div>
                <div>
                <label htmlFor="input" className='text-lg font-medium'>Name</label><br />
                <input id='name' value={name} onChange={onChange} placeholder='Name' maxLength='32' minLength='10' required className='w-full px-4 py-2 text-xl text-gray-700 bg-white 
                border border-gray-300 rounded transition ease-in-out mb-6 focus:border-slate-600'/>
                </div>
                <div className='flex space-x-6 mb-6'>
                    <div>
                        <label htmlFor="input" className='text-lg font-semibold'>Beds</label><br />
                        <input type="number" id='bedrooms' value={bedrooms} onChange={onChange} min='1' max='50' required
                        className='w-full px-4 py-2 text-xl text-gray-700 bg-white rounded border border-gray-300 text-center transition ease-in-out focus:border-slate-600'/>
                    </div>
                    <div>
                        <label htmlFor="input" className='text-lg font-semibold'>Bathrooms</label><br />
                        <input type="number" id='bathrooms' value={bathrooms} onChange={onChange} min='1' max='50' required
                        className='w-full px-4 py-2 text-xl text-gray-700 bg-white rounded border border-gray-300 text-center transition ease-in-out focus:border-slate-600'/>
                    </div>
                </div>
                <label htmlFor="button" className='font-medium'>Parking spot</label>
                <div className='flex mb-6'>
                    <button className={`px-7 py-3 font-medium text-sm shadow-sm rounded hover:shadow-lg focus:shadow-lg w-full transition ease-in-out ${!parking ?'bg-white text-black':
                    'bg-slate-600 text-white'}`} type='button' id='parking' value={true} onClick={onChange}>YES</button>
                    <button className={`px-7 py-3 font-medium text-sm shadow-sm rounded hover:shadow-lg focus:shadow-lg w-full transition ease-in-out ${parking ?'bg-white text-black':
                    'bg-slate-600 text-white'} ms-3`} type='button' id='parking' value={false} onClick={onChange}>NO</button>
                </div>
                <label htmlFor="button" className='font-medium'>Furnished</label>
                <div className='flex mb-6'>
                    <button className={`px-7 py-3 font-medium text-sm shadow-sm rounded hover:shadow-lg focus:shadow-lg w-full transition ease-in-out ${!furnished ?'bg-white text-black':
                    'bg-slate-600 text-white'}`} type='button' id='furnished' value={true} onClick={onChange}>YES</button>
                    <button className={`px-7 py-3 font-medium text-sm shadow-sm rounded hover:shadow-lg focus:shadow-lg w-full transition ease-in-out ${furnished ?'bg-white text-black':
                    'bg-slate-600 text-white'} ms-3`} type='button' id='furnished' value={false} onClick={onChange}>NO</button>
                </div>
                <div>
                    <label htmlFor="input" className='text-lg font-medium'>Address</label><br />
                    <textarea id='address' value={address} onChange={onChange} placeholder='Address' required className='w-full px-4 py-2 text-xl text-gray-700 bg-white 
                    border border-gray-300 rounded transition ease-in-out mb-6 focus:border-slate-600'></textarea>
                </div>
                <div>
                    <label htmlFor="input" className='text-lg font-medium'>Description</label><br />
                    <input id='description' value={description} onChange={onChange} placeholder='Description' required className='w-full px-4 py-2 text-xl text-gray-700 bg-white 
                    border border-gray-300 rounded transition ease-in-out mb-6 focus:border-slate-600'/>
                </div>
                <label htmlFor="button" className='text-lg font-medium'>Offer</label>
                <div className='flex mb-6'>
                    <button className={`px-7 py-3 font-medium text-sm shadow-sm rounded hover:shadow-lg focus:shadow-lg w-full transition ease-in-out ${!offer?'bg-white text-black':
                    'bg-slate-600 text-white'}`} type='button' id='offer' value={true} onClick={onChange}>YES</button>
                    <button className={`px-7 py-3 font-medium text-sm shadow-sm rounded hover:shadow-lg focus:shadow-lg w-full transition ease-in-out ${offer ?'bg-white text-black':
                    'bg-slate-600 text-white'} ms-3`} type='button' id='offer' value={false} onClick={onChange}>NO</button>
                </div>
                <div className="flex items-center space-x-6">
                    <div>
                        <label htmlFor="input" className='text-lg font-medium'>Regular Price</label>
                        <input type="number" id='regularPrice' value={regularPrice} onChange={onChange} min='50' max='400000000' required className='w-full text-xl text-gray-700
                        px-4 py-3 bg-white border border-gray-300 rounded transition ease-in-out mb-6 focus:border-slate-600 text-center' />
                    </div>
                    {type==='rent'&& ( <p className='text-md text-gray-700 w-full'>$ / Month</p> )}
                </div>
                {offer && (
                    <div className="flex items-center space-x-6">
                    <div>
                        <label htmlFor="input" className='text-lg font-medium'>Discounted Price</label>
                        <input type="number" id='discountedPrice' value={discountedPrice} onChange={onChange} min='50' max='400000000' required={offer} className='w-full text-xl text-gray-700
                        px-4 py-3 bg-white border border-gray-300 rounded transition ease-in-out mb-6 focus:border-slate-600 text-center' />
                    </div>
                    {type==='rent'&& ( <p className='text-md text-gray-700 w-full'>$ / Month</p> )}
                </div>
                )}
                <div className='mb-6'>
                    <label htmlFor="image" className='text-xl font-medium'>Images</label>
                    <p className='text-gray-600'>The first image will be the cover (max 6)</p>
                    <input type="file" id='images' className='w-full px-3 py-1 text-gray-700 bg-white border border-gray-300 rounded transition focus:border-slate-600
                    ease-in-out' accept='.jpg,.jpeg,.png' onChange={onChange} multiple required/>
                </div>
                <button type='submit' className='w-full mb-6 px-7 py-3 bg-blue-60 text-white font-medium text-sm rounded shadow-md hover:bg-blue-800 hover:shadow-lg focus:bg-blue-800 
                focus:shadow-lg active:bg-blue-900 active:shadow-lg transition ease-in-out'>Create Listing</button>
            </form>
        </main>
)
}
