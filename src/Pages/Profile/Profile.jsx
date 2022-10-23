import React from 'react'
import './Profile.css'
import imageA from '../../images/designer-1.jpg'
import { Link } from "react-router-dom"
export default function Profile() {
    return (
        <div className='mainPostContainer'>
            <div class="card mt-4" style={{ width: '94%', margin: '0 auto' }}>
                <img src="/assets/images/image5.jpg" class="card-img-top" height='200px' />
                <img src="/assets/images/image5.jpg" height='70px' width="80px" style={{
                    borderRadius: '50%', margin: '0 auto', position: 'relative', bottom: '40px'
                }} />
                <div style={{
                    backgroundColor: "#5a2e9fc9", height: '40px', width: '40px', borderRadius: "50%", position: 'absolute', right: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center', top: '3px'
                }} data-bs-toggle="modal" data-bs-target="#editModal">
                    <i class="fa-solid fa-pen-to-square me" style={{ color: 'white' }}></i>
                </div>
                <div style={{
                    backgroundColor: "#5a2e9fc9", height: '40px', width: '40px', borderRadius: "50%", position: 'absolute', right: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center', top: '63px'
                }} data-bs-toggle="modal" data-bs-target="#passwordModal">
                    <i class="fa-solid fa-gear" style={{ color: 'white' }}></i>
                </div>

                <div class="card-body" style={{ marginTop: '-30px' }}>
                    <h5 class="card-title">Tanzin</h5>
                    <p class="card-text mb-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div>
                        <button className='btn btn-primary m-2'>100 Follower</button>
                        <button className='btn btn-primary m-2'>100 Following</button>
                    </div>
                    <hr />
                    <div className="row mt-4">
                        <div className='col-sm-3 mb-5' style={{ backgroundColor: '#ebebeb', padding: '10px' }}>
                            <img src={imageA} height={'250px'} width={"200px"} />
                            <div className='row'>
                                <div className='col-sm-6' style={{ cursor: "pointer" }}>
                                    <p><i class="fa-solid fa-thumbs-up"></i> 100 </p>
                                </div>
                                <div className='col-sm-6' style={{ cursor: "pointer" }}>
                                    <p><i class="fa-solid fa-thumbs-up fa"></i> 100</p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-sm-6'>
                                    <Link to={"/update-post/" + 1} className='btn btn-primary btn-sm'>Update</Link>
                                </div>
                                <div className='col-sm-6'>
                                    <button className='btn btn-warning btn-sm'>Delete</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-3 mb-5' style={{ backgroundColor: '#ebebeb', padding: '10px' }}>
                            <img src={imageA} height={'250px'} width={"200px"} />
                            <div className='row'>
                                <div className='col-sm-6' style={{ cursor: "pointer" }}>
                                    <p><i class="fa-solid fa-thumbs-up"></i> 100 </p>
                                </div>
                                <div className='col-sm-6' style={{ cursor: "pointer" }}>
                                    <p><i class="fa-solid fa-thumbs-up fa"></i> 100</p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-sm-6'>
                                    <Link to={"/update-post/" + 1} className='btn btn-primary btn-sm'>Update</Link>
                                </div>
                                <div className='col-sm-6'>
                                    <button className='btn btn-warning btn-sm'>Delete</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-3 mb-5' style={{ backgroundColor: '#ebebeb', padding: '10px' }}>
                            <img src={imageA} height={'250px'} width={"200px"} />
                            <div className='row'>
                                <div className='col-sm-6' style={{ cursor: "pointer" }}>
                                    <p><i class="fa-solid fa-thumbs-up"></i> 100 </p>
                                </div>
                                <div className='col-sm-6' style={{ cursor: "pointer" }}>
                                    <p><i class="fa-solid fa-thumbs-up fa"></i> 100</p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-sm-6'>
                                    <Link to={"/update-post/" + 1} className='btn btn-primary btn-sm'>Update</Link>
                                </div>
                                <div className='col-sm-6'>
                                    <button className='btn btn-warning btn-sm'>Delete</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-3 mb-5' style={{ backgroundColor: '#ebebeb', padding: '10px' }}>
                            <img src={imageA} height={'250px'} width={"200px"} />
                            <div className='row'>
                                <div className='col-sm-6' style={{ cursor: "pointer" }}>
                                    <p><i class="fa-solid fa-thumbs-up"></i> 100 </p>
                                </div>
                                <div className='col-sm-6' style={{ cursor: "pointer" }}>
                                    <p><i class="fa-solid fa-thumbs-up fa"></i> 100</p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-sm-6'>
                                    <Link to={"/update-post/" + 1} className='btn btn-primary btn-sm'>Update</Link>
                                </div>
                                <div className='col-sm-6'>
                                    <button className='btn btn-warning btn-sm'>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* profile modal */}
            <div class="modal modal-lg fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Update Profile</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="mb-3">
                                <label class="form-label" style={{ float: 'left' }}>Name</label>
                                <input type="email" class="form-control" />
                            </div>
                            <div className='row mb-3'>
                                <div className='col-sm-6'>
                                    <label class="form-label" style={{ float: 'left' }}>Profile Image</label>
                                    <input type="file" class="form-control" id="exampleFormControlInput1" />
                                </div>
                                <div className='col-sm-6'>
                                    <label class="form-label" style={{ float: 'left' }}>Dashboard Image</label>
                                    <input type="file" class="form-control" id="exampleFormControlInput1" />
                                </div>
                            </div>
                            <div className='row mb-3'>
                                <div className='col-sm-6'>
                                    <img src={imageA} height={'80px'} width="150px" style={{ float: 'left' }} />
                                </div>
                                <div className='col-sm-6'>
                                    <img src={imageA} height={'80px'} width="150px" style={{ float: 'left' }} />
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label" style={{ float: 'left' }}>About</label>
                                <textarea class="form-control" rows="3"></textarea>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* end profile modal */}

            {/* password reset modal */}

            <div class="modal fade" id="passwordModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Reset Password</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="mb-3">
                                <label class="form-label" style={{ float: 'left' }}>Old Password</label>
                                <input type="text" class="form-control" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label" style={{ float: 'left' }}>New Password</label>
                                <input type="text" class="form-control" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label" style={{ float: 'left' }}>Confirm New Password</label>
                                <input type="text" class="form-control" />
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Update</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* password reset modal */}








        </div>
    )
}
