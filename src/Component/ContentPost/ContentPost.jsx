import React from 'react'
import "./ContentPost.css";
import imageIcon from "../../images/gallery.png"
import emojiIcon from "../../images/cat-face.png"
import VideoIcon from "../../images/video.png"
import profileimage from "../../images/profile.png"
import image1 from "../../images/image1.jpg";
export default function ContentPost() {
    return (
        <div>
            <div className='ContentUploadContainer'>
                {/* <div style={{ alignItems: "center", padding: 10 }}>
                    <img src={image1} alt="" className='PostImages'/>
                </div> */}
                <div style={{ display: "flex", alignItems: "center", padding: 10 }}>
                    <img src={`${profileimage}`} className="profileimage" alt="" />
                    <input type="text" className='contentWritingpart' placeholder='Write your real thought.....' />
                </div>
                <div className='row'>
                    <div className='col-sm'>
                        <div style={{ display: 'flex', marginTop: '35px', marginLeft: '5px' }}>
                            <img src={`${imageIcon}`} alt="" className='icons m-1' />
                            <img src={`${emojiIcon}`} alt="" className='icons m-1' />
                            <img src={`${VideoIcon}`} alt="" className='icons m-1' />
                        </div>
                    </div>
                    <div className='col-sm'>
                        <button style={{ marginTop: '30px', paddingLeft: "20px", paddingRight: "20px", paddingTop: 6, paddingBottom: 6, border: "none", backgroundColor: "black", color: "white", borderRadius: "5px", cursor: "pointer", float: 'right', marginRight: '5px' }}>Post</button>
                    </div>
                </div>
            </div>
        </div>
    )
}