import openai from "./chatgpt";

const query = async (prompt:string,chatId:string,model:string)=>{
    const chat= await openai.chat.completions.create({
        model,
        messages:[
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: prompt },
        ],
        temperature:0.9,
        top_p:1,
        max_tokens:1000,
        frequency_penalty:0,
        presence_penalty:0

    }).then((res)=>res.choices[0].message).catch(
        (err)=>
        `Chat gpt was not able to find the answer (Error:${err})`
    )
return chat;
}

export default query;