'use client';
import React, {useContext} from 'react';
import AppContext from '../context/appContext';

export default function Home() {
    const {isAuth, message, setIsAuth} = useContext(AppContext);
    console.log("message is: ",message);
    console.log("value of is auth is: ",isAuth)
  return (

    <div className={`${isAuth ? 'bg-sky-400':'bg-red-300'} flex flex-col gap-3`}>
        <h1 className='font-bold text-xl'>This is Home Page</h1>
        <p className='font-bold text-4xl'>{message}</p>
        {isAuth ? (<button className='bg-gray-300' onClick={()=> setIsAuth(false)}>Logout</button>) : (<button className='bg-gray-300' onClick={()=> setIsAuth(true)}>Login</button>)}
    </div>
  )
}
