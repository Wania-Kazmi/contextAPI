'use client';
import React, {useState} from 'react';
import AppContext from './appContext';

export default function AppState(props:any) {
  const [isAuth, setIsAuth] = useState(true);
  const message = "hello lovelies";
  // console.log("props are: ",props);
  return (
    <AppContext.Provider value = {{isAuth, message, setIsAuth}}>
      {props.children}
    </AppContext.Provider>
  )
}
