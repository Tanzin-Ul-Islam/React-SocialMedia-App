import React from 'react';
import Post from '../../Component/post/Post';
import RightContainer from '../../Component/RightContainer/RightContainer';
import LeftContainer from '../../Component/LeftContainer/LeftContainer';
import './Home.css';
export default function Home() {
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
