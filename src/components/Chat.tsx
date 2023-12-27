import { useSession } from 'next-auth/react'
import React from 'react'

type props ={
    chatId:string
}

function Chat({chatId}:props) {
  const {  data:session } =useSession
  return (
    <div className='flex-1'>Chat</div>
  )
}

export default Chat