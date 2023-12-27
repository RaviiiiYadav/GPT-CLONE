import Chat from '@/components/Chat'
import ChatInput from '@/components/ChatInput'
import React from 'react'

type props = {
    params:{
      id:string;
    }
}

function ChatPage  ({params:{id}}:props) {

  return(
  <div className='flex flex-col h-screen overflow-hidden'>
      <Chat chatId={id}/>
      <ChatInput chatId={id}/>
  </div>
  )
}

export default ChatPage