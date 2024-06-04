import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/navSlice';
import { Link } from 'react-router-dom';

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () =>{
          dispatch(toggleMenu())
  }
 
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex col-span-1 '>
        <img onClick={()=>{
          toggleMenuHandler()
        }}  className='h-8 cursor-pointer' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png' alt='hamburger menu'></img>
      <img  className='h-8 mx-2' src='https://www.freeiconspng.com/thumbs/youtube-logo-png/hd-youtube-logo-png-transparent-background-20.png' alt='youtube logo'></img>
        
    </div>
    
    <div className='col-span-10 text-center'>
      <input className='border border-gray-600 w-1/2 p-2 rounded-l-full' type='text'/>
      <button className='border border-gray-400 px-5 py-2 bg-gray-100 rounded-r-full'>🔎</button>

    </div>
    <div className='col-span-1'>
      <img className='h-8' src='https://cdn-icons-png.freepik.com/256/1077/1077114.png?semt=ais_hybrid' alt='user icon'/>
    </div>
  </div>
  )
}

export default Head