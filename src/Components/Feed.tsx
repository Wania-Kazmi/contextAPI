'use client';
import React, {useContext} from 'react';
import AppContext from '@/context/appContext';

export default function Feed() {
    const {isAuth, message} = useContext(AppContext);
    console.log("Value of isAuth",isAuth)
  return (
    <div className={`${isAuth ? 'bg-blue-400': 'bg-red-200'}`}>
        <h1 className='font-bold text-xl'>This is Feed Page</h1>
        <p className='font-bold text-4xl'>{message}</p>
        
    </div>
  )
}
