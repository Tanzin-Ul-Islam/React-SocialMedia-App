import React from 'react'
import './UserPost.css';
import ProfileImage from "../../images/profile.png"
import LikeIcon from "../../images/like.png";
import CommentIcon from "../../images/speech-bubble.png";
import Shareicon from "../../images/image2.jpg";
import Moreoption from "../../images/image1.jpg";
import anotherlikeicon from "../../images/setLike.png";
import image4 from "../../images/profile.png";
export default function UserPost() {
    return (
        <div className='PostContainer'>
            <div className='SubPostContainer mb-3'>
                <div>
                    <div style={{ display: 'flex', alignItems: "center" }}>
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
                                <p style={{ marginLeft: "6px" }}><i class="fa-solid fa-thumbs-up"></i> &nbsp; 100 Dislikes</p>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", marginLeft: "10px", cursor: "pointer" }}>
                                <p style={{ marginLeft: "6px" }}><i class="fa-solid fa-comment"></i>100K Comments</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='SubPostContainer mb-3'>
                <div>
                    <div style={{ display: 'flex', alignItems: "center" }}>
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
                                <p style={{ marginLeft: "6px" }}><i class="fa-solid fa-thumbs-up"></i> &nbsp; 100 Dislikes</p>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", marginLeft: "10px", cursor: "pointer" }}>
                                <p style={{ marginLeft: "6px" }}><i class="fa-solid fa-comment"></i>100K Comments</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='SubPostContainer mb-3'>
                <div>
                    <div style={{ display: 'flex', alignItems: "center" }}>
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
                                <p style={{ marginLeft: "6px" }}><i class="fa-solid fa-thumbs-up"></i> &nbsp; 100 Dislikes</p>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", marginLeft: "10px", cursor: "pointer" }}>
                                <p style={{ marginLeft: "6px" }}><i class="fa-solid fa-comment"></i>100K Comments</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
