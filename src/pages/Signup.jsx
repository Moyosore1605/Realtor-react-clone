import React, {useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import OAuth from '../components/OAuth'
import {AiFillEye,AiFillEyeInvisible} from 'react-icons/ai'
import {getAuth, createUserWithEmailAndPassword,updateProfile} from 'firebase/auth';
import {db} from '../firebase'
import { serverTimestamp, setDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';

export default function Signup() {
    const [formData,setFormData] = useState({name:'',email:'',password:''})
    const [showPassword, setShowPassword] = useState(false)
    const {name,email,password} = formData
    const navigate = useNavigate()
    const onChange = (e)=>{
        setFormData({...formData,[e.target.id]:e.target.value})
    }
    const onSubmit = async(e)=>{
        e.preventDefault()
        try {
            const auth = getAuth();
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            updateProfile(auth.currentUser, {displayName:name})
            const user = userCredential.user;
            const formDataCopy = {...formData}
            delete formDataCopy.password
            formDataCopy.timeStamp = serverTimestamp();
            await setDoc(doc(db,'users',user.uid),formDataCopy);
            toast.success('Account created successfully');
            navigate('/')
        } catch (error) {
            console.log(error.code);
            if (error.code === 'auth/email-already-in-use') {
                toast.error('Email already in use');
            }
            else if( error.code === 'auth/missing-email'){
                toast.error('please fill in the email field');
            }
            else if (error.code === 'auth/weak-password') {
                toast.error('Password should be at least 6 characters');
            }
        }
    }
    return (
        <section>
            <h1 className='text-3xl text-center mb-12 md:mb-6'>Sign up</h1>
            <div className='flex justify-center items-center flex-wrap px-6  py-12  max-w-6xl mx-auto'>
                <div className='md:w-[67%] lg:w-[50%] md:mb-9'>
                    <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=773&q=80" className='w-full rounded-2xl'/>
                </div>
                <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
                    <form onSubmit={onSubmit}>
                        <input required className='w-full md:mb-6 px-4 py-2 text-xl text-gray-400 border-gray-300 bg-white rounded transition ease-in-out' type='text' id='name' value={name} 
                        onChange={onChange} placeholder='Full name'/>
                        <input className='w-full md:mb-6 px-4 py-2 text-xl text-gray-400 border-gray-300 bg-white rounded transition ease-in-out' type='email' id='email' value={email} 
                        onChange={onChange} placeholder='Email address'/>
                        <div className='relative md:mb-6'>
                        <input className='w-full px-4 py-2 text-xl text-gray-400 border-gray-300 bg-white rounded transition ease-in-out' placeholder='Password' 
                        type={showPassword? 'text' : 'password'} id='password' value={password} onChange={onChange}/>
                        {showPassword?(<AiFillEyeInvisible onClick={()=>setShowPassword(!showPassword)} className='absolute right-3 top-3 text-xl cursor-pointer'/>):
                        (<AiFillEye onClick={()=>setShowPassword(!showPassword)} className='absolute right-3 top-3 text-xl cursor-pointer'/>)}
                        </div>
                        <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
                            <p className='mb-6'>Have an account? 
                                <Link to='/login' className='text-red-500 hover:text-red-800 transition duration-200 ml-1 ease-in-out'>Sign in</Link>
                            </p>
                            {/* <p>
                                <Link to='/forgotpassword' className='text-blue-500 hover:text-blue-800 transition duration-200 ml-1 ease-in-out'>Forgot password?</Link>
                            </p> */}
                        </div>
                        <button className='w-full text-white bg-blue-600 px-7 py-3 text-sm font-medium rounded shadow-md hover:bg-blue-700 
                        hover:shadow-lg transition duration-150 ease-in-out active:bg-blue-800' type='submit'>SIGN UP</button>
                        <div className='flex my-4 items-center before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300'>
                            <p className='text-center font-semibold mx-4'>OR</p>
                        </div>
                        <OAuth/>
                    </form>
                </div>
            </div>
        </section>
    )
}
