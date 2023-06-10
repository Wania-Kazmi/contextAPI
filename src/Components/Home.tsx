'use client';
import React, {useContext} from 'react';
import AppContext from '../context/appContext';

export default function Home() {
    const {isAuth, message, setIsAuth} = useContext(AppContext);
    if(isAuth){
        setIsAuth(false);
    }
    console.log("message is: ",message);
    console.log("value of is auth is: ",isAuth)
  return (

    <div className={`${isAuth ? 'bg-sky-400':'bg-red-300'}`}>
        <h1 className='font-bold text-xl'>This is Home Page</h1>
        <p className='font-bold text-4xl'>{message}</p>
    </div>
  )
}
