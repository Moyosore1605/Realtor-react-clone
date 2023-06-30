import React from 'react';
import {FcGoogle} from 'react-icons/fc';
import { toast } from 'react-toastify';
import { getAuth, GoogleAuthProvider,signInWithPopup } from 'firebase/auth';
import {db} from '../firebase'
import {doc,getDoc,setDoc,serverTimestamp} from 'firebase/firestore'
import { useNavigate } from 'react-router-dom';

const OAuth = ()=>{
    const navigate = useNavigate()

    const onGoogleClick = async()=>{
        try {
            const auth = getAuth();
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth,provider);
            const user = result.user;
            const docRef = doc(db,'users',user.uid)
            const docSnap = await getDoc(docRef)
            if (!docSnap.exists()) {
                await setDoc(docRef,{name:user.displayName,email:user.email,timeStamp:serverTimestamp()})
            }
            toast.success('Signed in successfully with google')
            navigate('/')
        } catch (error) {
            // console.log(error.code);
            toast.error('Could not sign in with google')
        }
    }

    return (
        <button onClick={onGoogleClick} className='flex items-center bg-red-700 px-7 py-3 rounded justify-center w-full text-white text-sm font-medium hover:bg-red-800 
        active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out' type='button'>
            <FcGoogle className='mr-2 text-2xl bg-white rounded-full'/>CONTINUE WITH GOOGLE</button>
    )
}

export default OAuth
