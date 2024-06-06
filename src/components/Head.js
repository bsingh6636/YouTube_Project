import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/navSlice';
// import { Link } from 'react-router-dom';
import { YOUTUBE_SEARCH_API } from '../utils/YoutubeApi';
import { cacheResults } from '../utils/SearchSlice';

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("")
 const [suggestions, setSuggestions] = useState("")
 const [showSuggestions,setShowSuggestions]=useState(false)
 const searchCache = useSelector(store=>store.search)
  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
  }
  useEffect(() => {

    const timer = setTimeout(() =>{ 
      if(searchCache[searchQuery]){
        setShowSuggestions(searchCache[searchQuery]);
      }else{
        getSearchSuggestions()
      
      }
      }, 100)
    return () => {
      clearTimeout(timer)
    }

  }, [searchQuery])
  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
    const json = await data.json()
    // console.log(json[1])
    setSuggestions(json[1])
    dispatch(cacheResults({[searchQuery]:json[1]}))
  }
  return (
    <div className='grid  grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex col-span-1  '>
        <img onClick={() => {
          toggleMenuHandler()
        }} className='h-8 cursor-pointer' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png' alt='hamburger menu'></img>
        <img className='h-8 mx-2' src='https://www.freeiconspng.com/thumbs/youtube-logo-png/hd-youtube-logo-png-transparent-background-20.png' alt='youtube logo'></img>
      </div>
      <div className='col-span-10 px-10 text-center'>
        <div>
          <input className='border border-gray-600 w-1/2 p-2 px-5 rounded-l-full' type='text' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} 
          onFocus={()=>setShowSuggestions(true)} onBlur={()=>setShowSuggestions(false)} />
          <button className='border border-gray-400 px-5 py-2 bg-gray-100 rounded-r-full'>🔎</button>
        </div>
       {showSuggestions && <div className='fixed col-span-10 bg-white py-2 px-5 w-[38rem] shadow-xl rounded-xl ml-[400px] flex justify-star border-t-gray-100 cursor-pointer '>
          <ul>
            {suggestions && suggestions.map((s)=> <li key={s} className='px-5 py-2 shadow-sm hover:bg-gray-100 w-max'>🔎{s}</li>)}
           
            
          </ul>
        </div>}
      </div>
      <div className='col-span-1'>
        <img className='h-8' src='https://cdn-icons-png.freepik.com/256/1077/1077114.png?semt=ais_hybrid' alt='user icon' />
      </div>
    </div>
  )
}

export default Head