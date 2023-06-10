'use client';
import Image from 'next/image'
import {useReducer, useState} from 'react';


//we will dispatch different reducer function to this action to manage or handle the state in different ways
const reducerFunction = (state:any, action:any) => {
  switch(action.type){
    case 'increment':
      return{
        ...state,
        count: state.count+1
      }
    case 'decrement':
      return{
        ...state,
        count: state.count - 1
      }
      case 'initCount':
        return{
          ...state,
          count: action.payload
        }
    default:
      return state; 
  }
}

const initialState:any = {
  count: 0,
};

//through this dispatch function that we destructure from useReducer function, we have access to above reducer function to manipulate the initialState of count

export default function Home() {
  const[input, setInput] = useState(0);
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  console.log(state);
  console.log(dispatch);
  return (
    <div>
      <div>
        <h1>Reducer Example</h1>
        <div>
          <label htmlFor="">Start Count: </label>
          <input className='bg-gray-400 px-1 rounded-md' type="number" onChange={(e)=>setInput(parseInt(e.target.value))} value = {input} />
          <br />
          <button className='bg-red-300 p-2 m-2' onClick={()=> dispatch({type: 'initCount', payload: input})}>Initialize counter</button>
        </div>
        <div>
          <p>{state.count}</p>

          {/* now we bind our state to our buttons */}
          <button onClick = {() => {dispatch({type:'increment'})}} className='bg-red-300 p-2 m-2'>Increment</button>
          <button onClick = {()=> {dispatch({type: 'decrement'})}} className='bg-red-300 p-2'>Decrement</button>
        </div>
      </div>
    </div>
  )
}
