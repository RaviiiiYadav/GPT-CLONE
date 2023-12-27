'use client'
import React from 'react'
import NewChatButton from './NewChatButton'
import { signOut, useSession } from 'next-auth/react'
import {useCollection} from 'react-firebase-hooks/firestore'
import { collection, orderBy, query } from 'firebase/firestore'
import { db } from '../../firebase'
import ChatRow from './ChatRow'


const Sidebar = () => {
  const {data:session}=useSession();
  const [chats,loading,error] =useCollection(
    session && query(collection(db,"users",session.user?.email!,"chats"),orderBy('createdAt','asc')
  ));
  console.log(chats)

  return (
    <div  className='p-2 flex flex-col h-screen'>
        <div className='flex-1'>
            <NewChatButton/>
            <div>
            {/* Model section */}
            </div>
            {/* Map through the chatRows */}
            {chats?.docs.map(chat=>(
              <ChatRow key={chat.id} id={chat.id}></ChatRow>
            ))}
        </div>
        {session && (
          <img onClick={()=>signOut()} className='h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-10' alt='profile picture' src={session.user?.image!}></img>
        )}

    </div>
  )
}

export default Sidebar