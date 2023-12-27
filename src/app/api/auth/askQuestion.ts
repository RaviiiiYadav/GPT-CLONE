import { NextApiRequest, NextApiResponse } from "next"
import query from "../../../../lib/queryApi";
import admin from 'firebase-admin';
import { adminDb } from "../../../../firebasAdmin";


type Data ={
    answer:string
}

export default async function handler(
    req:NextApiRequest,
    res:NextApiResponse 
){
    const {prompt,chatId,model,session}=req.body;
    if(!prompt){
        res.status(400).json({
            answer:'Please Provide a prompt!'
        });
        return;

    }

    if(!chatId){
        res.status(400).json({
            answer:'Please Provide a ChatId!'
        });
        return;
    }

    const response = await query(prompt,chatId,model);

    const newMessage = "Chat GPT is not capable";

    const message:Message = {
        text : typeof response === 'string' ? response : 'Chat GPT is not capable',
        createdAt:admin.firestore.Timestamp.now(),
        user:{
            _id:"ChatGPT",
            name:"ChatGPT",
            avatar:"https://links.papareact.com/89k"
        }
    };
     
    await adminDb.collection('users').doc(session?.user?.email).collection('chats').doc(chatId).collection('messages').add(message);


    res.status(200).json({
        answer:message.text
    })
}
