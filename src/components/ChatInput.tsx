'use client'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import React, { FormEvent, useState } from 'react'
import { db } from '../../firebase'
import toast from 'react-hot-toast'
type props ={
    chatId:string
  }



function ChatInput({chatId}:props) {
  const [prompt,setPrompt]=useState('');
  const {data:session} =useSession();
const model="text-davinci-003";

  const sendMessage = async (e:FormEvent<HTMLFormElement>)=>{ 
    e.preventDefault()
    if(!prompt) return;
    const input = prompt.trim();
    setPrompt('');
     const message:Message={
      text:input,
      createdAt:serverTimestamp(),
      user:{
        _id:session?.user?.email!,
        name:session?.user?.name!,
        avatar:session?.user?.image || `https://ui-avatars.com/api/?name=${session?.user?.name}`
      }
     }

     await addDoc(  
      collection(db,'users',session?.user?.email!,'chats',chatId,'messages'),
      message
     )

     const notification =toast.loading("Chat GPT is thinking...")

     await fetch('/api/askQuestion',{
      method:'POST',
      headers:{
        'content-Type':'application/json'
      },
      body:JSON.stringify({
        prompt:input, chatId,model,session
      })

     }).then(()=>{
        toast.success('Chatgpt has responded!',{
          id:notification,
        })
     })
  }
  return (
    <div className='bg-gray-700/50 text-gray-400 rounded-lg text-sm '>
      <form onSubmit={sendMessage} className='p-5 spacs-x-5 flex-1'>
        <input 
        value={prompt}
        onChange={(e)=>setPrompt(e.target.value)}
        type='text' className='bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300 '
        disabled={!session}
        placeholder='type your message' >
        </input>
        
        <button disabled={!session || !prompt} type='submit' className='bg-[#11A37f] hover:opacity-50 px-4 py-4 rounded disabled:bg-gray-300 disabled:cursor-not-allowed'><PaperAirplaneIcon className='h-4 w-4 -rotate-45'></PaperAirplaneIcon></button>
      </form>
    </div>
  )
}

export default ChatInput