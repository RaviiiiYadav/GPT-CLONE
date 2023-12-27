'use client'

import React from "react";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

type prop = 
{
    session:Session | null;
    children:React.ReactNode;
}


const Authprovider = ({children,session}:prop)=>{
    return(
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}

export default Authprovider;