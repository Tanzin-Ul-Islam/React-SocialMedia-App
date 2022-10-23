import React from 'react'
import RightContainer from '../../Component/RightContainer/RightContainer';
import LeftContainer from '../../Component/LeftContainer/LeftContainer';
import primary from "../../images/default2.png";
import './UpdatePost.css';
export default function UpdatePost() {
    return (
        <>
            <LeftContainer />
            <div className='mainPostContainer'>
                <div>
                    <div className='ContentUploadContainer'>
                        <div style={{ alignItems: "center", padding: 10 }}>
                            <img src={primary} alt="" className='PostImages' />
                        </div>
                        <div className='row'>
                            <div className='col-sm'>
                                <label className='upload-section m-4' style={{ cursor: 'pointer' }} for="image">
                                    <div >
                                        <div>
                                            <i class="fa-solid fa-cloud-arrow-up"></i> Upload Photo
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <input type="file" id="image" hidden />
                        <div style={{ alignItems: "center", padding: 10, }}>
                            <div style={{ margin: '11px' }}>
                                <textarea class="form-control" rows="3" placeholder='Write your thoughts..'></textarea>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-sm'>
                                <button style={{ marginTop: '30px', paddingLeft: "20px", paddingRight: "20px", paddingTop: 6, paddingBottom: 6, border: "none", backgroundColor: "black", color: "white", borderRadius: "5px", cursor: "pointer", float: 'right', margin: '10px' }}>Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <RightContainer />
        </>
    )
}
