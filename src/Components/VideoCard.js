import React from 'react'

const VideoCard = ({ info }) => {
    // console.log(info);
    const { snippet } = info;
    const { channelTitle, thumbnails, title } = snippet;
    return (
        <div className='m-2 p-2 w-64 shadow-lg'>
            <img className='rounded-lg' src={thumbnails.medium.url} alt='thumbnail' />
            <ul>
                <li className='font-bold py-2'>{title}</li>
                <li>{channelTitle}</li>
            </ul>
        </div>
    )
}

export default VideoCard