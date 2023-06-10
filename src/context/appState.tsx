'use client';
import React from 'react';
import AppContext from './appContext';

export default function AppState(props:any) {
  const message = "hello lovelies";
  console.log("props are: ",props);
  return (
    <AppContext.Provider value = {message}>
      {props.children}
    </AppContext.Provider>
  )
}
