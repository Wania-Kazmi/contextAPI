'use client';
import React, {useContext} from 'react';
import AppContext from '@/context/appContext';

export default function Feed() {
    const {message} = useContext(AppContext);
  return (
    <div>
        <h1 className='font-bold text-xl'>This is Feed Page</h1>
        <p className='font-bold text-4xl'>{message}</p>

    </div>
  )
}
