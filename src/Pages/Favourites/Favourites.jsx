import React from 'react'
import Post from '../../Component/post/Post'
import RightContainer from '../../Component/RightContainer/RightContainer';
import LeftContainer from '../../Component/LeftContainer/LeftContainer';
import './Favourite.css'
export default function Favourites() {
    return (
        <>
            <LeftContainer />
            <div className='mainPostContainer'>
                <Post />
            </div>
            <RightContainer />
        </>
    )
}
