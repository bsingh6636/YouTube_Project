import React from 'react'

const VideoCards = ({info}) => {
    const {snippet,statistics} =info
    const {channelTitle,title,thumbnails} =snippet;
    // console.log(info)
    
  return (
    <div className='p-2 m-2 w-72 shadow-lg '>
       <img className='rounded-lg' src={thumbnails.medium.url} alt='video card' />
       <ul>
        <li className='font-bold py-1'>{title}</li>
        <li>{channelTitle}</li>
        <li>Views:{statistics.viewCount}</li>
       </ul>
    </div>
  )
}

export default VideoCards