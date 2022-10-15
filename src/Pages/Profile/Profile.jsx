import React from 'react'
import './Profile.css'
import imageA from '../../images/designer-1.jpg'
export default function Profile() {
    return (
        <div className='mainPostContainer'>
            <div class="card mt-4" style={{ width: '94%', margin: '0 auto' }}>
                <img src="/assets/images/image5.jpg" class="card-img-top" height='200px' />
                <img src="/assets/images/image5.jpg" height='70px' width="80px" style={{
                    borderRadius: '50%', margin: '0 auto', position: 'relative', bottom: '40px'
                }} />

                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    <hr />
                    <div className="row">
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

        </div>
    )
}
