'use client';
import React, {useContext} from 'react';
import AppContext from '../context/appContext';

export default function Home() {
    const {message} = useContext(AppContext);
    console.log("message is: ",message);
  return (
    <div>
        <h1 className='font-bold text-xl'>This is Home Page</h1>
        <p className='font-bold text-4xl'>{message}</p>
    </div>
  )
}
