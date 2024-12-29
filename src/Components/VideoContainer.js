import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { YT_API } from '../Utils/constants';

const VideoContainer = () => {

    const [videos, setvideos] = useState([]);

    useEffect(() => {
        getVideos();
    }, []);

    const getVideos = async () => {
        const data = await fetch(YT_API);
        const json = await data.json();
        setvideos(json.items);

        //console.log(json);
    }


    return (
        //make it work for one, then scale it
        <div className='flex flex-wrap '>
            {
                videos.map((video) => <VideoCard key={video.id} info={video} />)
            }



        </div>
    )
}

export default VideoContainer