import React from 'react'

const ChatMessage = ({ name, message }) => {
    return (
        <div className='flex items-center shadow-sm p-2'>
            <img className='h-8' src='https://cdn-icons-png.freepik.com/256/1077/1077114.png?semt=ais_hybrid' alt='user icon' />
            <span className='font-bold px-2'>{name}</span>
            <span>{message}</span>
        </div>
    )
}

export default ChatMessage