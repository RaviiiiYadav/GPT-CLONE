'use client'
import { signIn, useSession } from 'next-auth/react'
import React from 'react'
import Image from 'next/image'
import logo from '../app/GPTLogo.png'

const Login = () => {
    const session =useSession();
    console.log(session);
  return (
    <div className='bg-[#11A37F] h-screen  flex flex-col justify-center items-center text-center'>
      
        <Image src={logo} alt='logo' width={100} height={100} className='mb-4'></Image>
        <button className=' text-white' onClick={() => { signIn('google') }}>
            Click here to login to Google to use ChatGpt
        </button>
      
    </div>
  )
}

export default Login