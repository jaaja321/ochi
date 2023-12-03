import React from 'react'
import { LuMenu } from "react-icons/lu";

export default function Nav() {
  return (
    <div className='fixed h-[100vh] w-[7%] bg-bgblue rounded-xl'>
        <div className='flex justify-center'>
            <LuMenu className='scale-[2.5] absolute top-4 border border-black rounded'/>
        </div>
    </div>
  )
}
