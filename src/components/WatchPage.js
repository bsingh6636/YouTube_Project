import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/navSlice';
import {  useSearchParams } from 'react-router-dom';
import { CommentContainer } from './CommentContainer';

const WatchPage = () => {
    const [searchparams] = useSearchParams();
    console.log(searchparams.get("v"))
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu())
    }, [])
    return (
        <div className='px-5 py-5 '>
            <iframe width="1200" height="600"
             src={"https://www.youtube.com/embed/"+searchparams.get("v") }
             title="YouTube video player" frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              <CommentContainer/>
        </div>
    )
}

export default WatchPage