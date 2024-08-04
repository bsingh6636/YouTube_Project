import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/YoutubeApi';
import VideoCards from './VideoCards';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
    const [videos, setVideos] = useState(null);
    useEffect(() => {
        getVideos();
    }, [])
    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEO_API);
        const json = await data.json();
        // console.log(json)
        setVideos(json.items);
    }
    if (!videos) return null;
    return (
        <div className='flex flex-wrap'>
            {
                videos.map(
                    video => <Link key={video.id}
                        to={"watch?v=" + video.id}> <VideoCards  info={video} />
                    </Link>
                )
            }
        </div>
    )
}

export default VideoContainer