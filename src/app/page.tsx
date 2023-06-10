import React from 'react';
import Link from 'next/link';
export default function page() {
  return (
    <div className='flex flex-col m-2'>
      <Link href={'/reducer'} >
      <button className='bg-gray-200 p-2 m-2 font-bold'>Reducer Example</button>
      </Link>
      <Link href={'/contextpage'} >
      <button className='bg-gray-200 p-2 m-2 font-bold'>Context Example</button>
      </Link>
    </div>
  )
}
