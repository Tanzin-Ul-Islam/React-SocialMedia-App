import React, { useState } from 'react'
import './post.css';
import ProfileImage from "../../images/profile.png"
import image4 from "../../images/image5.jpg";
export default function Post() {
    let [comment, setComment] = useState(false);
    return (

        <div className='SubPostContainer'>
            <div>
                <div style={{ display: 'flex', alignItems: "center", marginTop:"10px"}}>
                    <img src={`${ProfileImage}`} className="PostImage" alt="" />
                    <div>
                        <p style={{ marginLeft: '5px', textAlign: "start" }}>Suman</p>
                    </div>
                </div>
                <p style={{ textAlign: 'start', width: "96%", marginLeft: 20, marginTop: 0 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, ab accusantium. Veniam eveniet magni.....</p>
                <img src={`${image4}`} className="PostImages" alt="" />
                <div style={{ display: "flex" }} className="m-3">
                    <div style={{ display: "flex", marginLeft: "10px" }}>
                        <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                            <p style={{ marginLeft: "6px" }}><i class="fa-solid fa-thumbs-up"></i> &nbsp; 100 Likes</p>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", marginLeft: "10px", cursor: "pointer" }}>
                            <p style={{ marginLeft: "6px" }}><i class="fa-solid fa-thumbs-up fa"></i> &nbsp; 100 Dislikes</p>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", marginLeft: "10px", cursor: "pointer" }} onClick={() => { setComment(!comment) }}>
                            <p style={{ marginLeft: "6px" }}><i class="fa-solid fa-comment"></i>100K Comments</p>
                        </div>
                    </div>
                </div>
                {comment ?
                    <>
                        <div style={{ display: "flex", alignItems: "center", padding: '3px' }}>
                            <img src={`${ProfileImage}`} className="profileimage" alt="" />
                            <input type="text" class="form-control m-2" placeholder="write your thoughts" />
                        </div>

                        <div>
                            <div className="row mb-3">
                                <div className='col-sm-3'>
                                    <img src={`${ProfileImage}`} className="profileimage" alt="" />
                                </div> &ensp;
                                <div className='col-sm-9' style={{ backgroundColor: '#dbd9d9', padding: "10px", marginLeft: '-34px', marginBottom: '4px' }}>
                                    <p style={{ marginBottom: '5px', marginTop: '5px', float: 'left' }}>Loremipsum is a text editor Loremipsum is a text editorLoremipsum is a text editorLoremipsum is a text editor Loremipsum is a text editor .</p>
                                </div>
                            </div>
                        </div>
                    </> : ""
                }
            </div>
        </div>

    )
}
