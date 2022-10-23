import React, { useState } from 'react'
import './PostDetails.css'
import imageA from '../../images/designer-1.jpg'
import ProfileImage from '../../images/designer-1.jpg'
export default function PostDetails() {
    let [comment, setComment] = useState(false);
    let [isFavourite, setIsFavourite] = useState(true);
    return (
        <div className='mainPostContainer'>
            <div className="card mb-3" style={{ maWidth: "540px", marginTop: '40px' }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={imageA} className="img-fluid rounded-start" style={{ height: '450px' }} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body" style={{ textAlign: 'left' }}>
                            <h5 className="card-title">Card title</h5>
                            <div className='col-sm' style={{ padding: '15px' }}>
                                <i class="fa-solid fa-heart fa-xl" style={{
                                    float: 'right', color: !isFavourite ? '#bbbbbb' : '#ff627d', position: 'relative',
                                    bottom: '50px', left: '25px'
                                }} onClick={() => { setIsFavourite(!isFavourite) }}></i>
                            </div>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div style={{ display: "flex", marginLeft: '-5px' }}>
                                <div style={{ display: "flex" }}>
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
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>

                            <div style={{ display: "flex", alignItems: "center", padding: '3px' }}>
                                <img src={`${ProfileImage}`} className="profileimage" alt="" />
                                <input type="text" class="form-control m-2" placeholder="write your thoughts" />
                            </div>


                            <div class="card" style={{
                                width: '100%', height: '150px', overflow: 'hidden',
                                overflowY: 'scroll'
                            }}>
                                <div class="card-body">
                                    <div>
                                        <div className="row mb-3">
                                            <div className='col-sm-3'>
                                                <img src={`${ProfileImage}`} className="profileimage mt-4" />
                                            </div> &ensp;
                                            <div className='col-sm-9' style={{ backgroundColor: '#dbd9d9', padding: "10px", marginLeft: '-34px', marginBottom: '4px' }}>
                                                <p style={{ marginBottom: '5px', marginTop: '5px', float: 'left' }}>Loremipsum is a text editor Loremipsum is a text editorLoremipsum is a text editorLoremipsum is a text editor Loremipsum is a text editor .</p>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className='col-sm-3'>
                                                <img src={`${ProfileImage}`} className="profileimage mt-4" />
                                            </div> &ensp;
                                            <div className='col-sm-9' style={{ backgroundColor: '#dbd9d9', padding: "10px", marginLeft: '-34px', marginBottom: '4px' }}>
                                                <p style={{ marginBottom: '5px', marginTop: '5px', float: 'left' }}>Loremipsum is a text editor Loremipsum is a text editorLoremipsum is a text editorLoremipsum is a text editor Loremipsum is a text editor .</p>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className='col-sm-3'>
                                                <img src={`${ProfileImage}`} className="profileimage mt-4" />
                                            </div> &ensp;
                                            <div className='col-sm-9' style={{ backgroundColor: '#dbd9d9', padding: "10px", marginLeft: '-34px', marginBottom: '4px' }}>
                                                <p style={{ marginBottom: '5px', marginTop: '5px', float: 'left' }}>Loremipsum is a text editor Loremipsum is a text editorLoremipsum is a text editorLoremipsum is a text editor Loremipsum is a text editor .</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <hr />
                <div className='row'>
                    <span style={{ textAlign: 'left' }} className="m-4"><h4>Related Post</h4></span>
                    <div className='col-sm-3 mb-5'>
                        <img src={imageA} height={'250px'} width={"200px"} />
                        <div className='row'>
                            <div className='col-sm-6' style={{ cursor: "pointer" }}>
                                <p><i class="fa-solid fa-thumbs-up"></i> 100 </p>
                            </div>
                            <div className='col-sm-6' style={{ cursor: "pointer" }}>
                                <p><i class="fa-solid fa-thumbs-up fa"></i> 100</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-3 mb-5'>
                        <img src={imageA} height={'250px'} width={"200px"} />
                        <div className='row'>
                            <div className='col-sm-6' style={{ cursor: "pointer" }}>
                                <p><i class="fa-solid fa-thumbs-up"></i> 100 </p>
                            </div>
                            <div className='col-sm-6' style={{ cursor: "pointer" }}>
                                <p><i class="fa-solid fa-thumbs-up fa"></i> 100</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-3 mb-5'>
                        <img src={imageA} height={'250px'} width={"200px"} />
                        <div className='row'>
                            <div className='col-sm-6' style={{ cursor: "pointer" }}>
                                <p><i class="fa-solid fa-thumbs-up"></i> 100 </p>
                            </div>
                            <div className='col-sm-6' style={{ cursor: "pointer" }}>
                                <p><i class="fa-solid fa-thumbs-up fa"></i> 100</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-3 mb-5'>
                        <img src={imageA} height={'250px'} width={"200px"} />
                        <div className='row'>
                            <div className='col-sm-6' style={{ cursor: "pointer" }}>
                                <p><i class="fa-solid fa-thumbs-up"></i> 100 </p>
                            </div>
                            <div className='col-sm-6' style={{ cursor: "pointer" }}>
                                <p><i class="fa-solid fa-thumbs-up fa"></i> 100</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}
