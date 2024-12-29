import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../Utils/appSlice';

const Header = () => {

    const dispatch = useDispatch();

    const handleToggleMenu = () => {
        dispatch(toggleMenu());
    }

    return (
        <div className='grid grid-flow-col m-2 p-5 shadow-lg'>
            <div className='flex col-span-1'>
                <img onClick={() => handleToggleMenu()} className='h-8 cursor-pointer' src='https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/What%20is%20a%20Hamburger%20Button.png?width=225&name=What%20is%20a%20Hamburger%20Button.png' alt='hamburger icon' />
                <img className='h-8 mx-2' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png' alt='yt logo' />

            </div>
            <div className='col-span-10'>
                <input className='w-1/2 border border-gray-400 p-2 rounded-l-full' type='text' />
                <button className='border border-gray-400 p-2 rounded-r-full bg-gray-200 '>Search</button>
            </div>
            <div className='col-span-1'>
                <img className='h-8' src='https://cdn-icons-png.flaticon.com/512/3686/3686930.png' alt='usericon' />
            </div>
        </div>
    )
}

export default Header