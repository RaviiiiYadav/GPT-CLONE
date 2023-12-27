import { SunIcon } from '@heroicons/react/24/solid'
import React from 'react'

{/* Start point */}
function page() {
  return (
    <div className=' text-white flex flex-col h-screen items-center justify-center'>
      <h1 className='text-5xl font-bold mb-20'>ChatGpt</h1>
      <div className='flex space-x-2'>
        <div >
          <div className='flex flex-col items-center justify-center  mb-5' >
           <SunIcon className='h-6 w-6'></SunIcon>
            <h1>Examples</h1>
          </div>
          <div className='space-y-2'>
            <p className='infoText'>ABCDE  h vj vmj vjmhvjmmh gvjm nvFG</p>
            <p className='infoText'>HIJKLM</p>
            <p className='infoText'>NOPQRST</p>
          </div>
        </div>
        <div >
          <div className='flex flex-col items-center justify-center  mb-5' >
           <SunIcon className='h-6 w-6'></SunIcon>
            <h1>Examples</h1>
          </div>
          <div className='space-y-2'>
            <p className='infoText'>ABCDE  h vj vmj vjmhvjmmh gvjm nvFG</p>
            <p className='infoText'>HIJKLM</p>
            <p className='infoText'>NOPQRST</p>
          </div>
        </div>
        <div >
          <div className='flex flex-col items-center justify-center  mb-5' >
           <SunIcon className='h-6 w-6'></SunIcon>
            <h1>Examples</h1>
          </div>
          <div className='space-y-2'>
            <p className='infoText'>ABCDE  h vj vmj vjmhvjmmh gvjm nvFG</p>
            <p className='infoText'>HIJKLM</p>
            <p className='infoText'>NOPQRST</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default page