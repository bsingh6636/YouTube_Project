import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { generateRandomMessage } from '../utils/helper'

const LiveChat = () => {
  const [liveMessage , setLiveMessage] = useState()
  const dispatch = useDispatch()
  const chatMessage = useSelector(store =>store.chat.message)
  useEffect(()=>{
   let i = setInterval(()=>{
      dispatch(addMessage({
        name: generateRandomMessage(),
        message : generateRandomMessage(20) + "🚀"
      }))
    },4000)
    return () => clearInterval(i)
  },[])
  return (
    <>
    <div className='ml-2 w-full h-[600px] p-2 border border-black bg-gray-200 rounded-lg overflow-y-scroll flex flex-col-reverse'>
     <div> {
        chatMessage.map(( chat , index) =>   <ChatMessage key ={index} name={chat.name} message={chat.message}/>)
      }
    </div>
    </div>
    <form className='w-full p-2 ml-2 border border-black' onSubmit={(e) =>{ 
       e.preventDefault()
      dispatch(addMessage({ 
        name:"Brijesh",
        message:liveMessage
      }))
      setLiveMessage('')
    }}>
      <input className='w-96 p-2 border border-black rounded-lg' type = 'text' value ={liveMessage} onChange={(e) =>{ setLiveMessage(e.target.value) } } />
      <button className='px-2 mx-2 bg-green-400 rounded-md'>Send</button>
    </form>
    </>
  )
}

export default LiveChat