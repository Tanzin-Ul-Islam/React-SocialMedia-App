import React from 'react'
import './RightContainer.css'
import image1 from "../../images/image3.jpg";
import image2 from "../../images/image2.jpg";
import image5 from "../../images/image5.jpg";
import image4 from "../../images/image4.jpg";
import image6 from "../../images/image6.jpg";
import image7 from "../../images/image1.jpg";
import addFriends from "../../images/add-user.png"
export default function RightContainer() {
  return (
    <div className='rightbar'>
      <div className='rightcontainer2' style={{ padding: "5px" }}>
        <h6 style={{ textAlign: "start", marginLeft: "10px" }}>Suggested for you</h6>
        <div style={{ marginTop: "10px" }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: "center" }}>
              <img src={`${image2}`} className="Profileimage" alt="" />
              <div>
                <p style={{ marginLeft: "10px", textAlign: 'start' }}>Suman</p>
                <p style={{ marginLeft: "10px", textAlign: 'start', marginTop: "-16px", fontSize: "11px", color: "#aaa" }}>Suggested for you</p>
              </div>
            </div>
            <div style={{ cursor: 'pointer', marginRight: '10px' }}>
              <button className='btn btn-primary btn-sm'>Follow</button>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "-10px" }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: "center" }}>
              <img src={`${image5}`} className="Profileimage" alt="" />
              <div>
                <p style={{ marginLeft: "10px", textAlign: 'start' }}>Dan jok</p>
                <p style={{ marginLeft: "10px", textAlign: 'start', marginTop: "-16px", fontSize: "11px", color: "#aaa" }}>Followed by suman yo</p>
              </div>
            </div>
            <div style={{ cursor: 'pointer', marginRight: '10px' }}>
              <button className='btn btn-primary btn-sm'>Follow</button>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "-10px" }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: "center" }}>
              <img src={`${image4}`} className="Profileimage" alt="" />
              <div>
                <p style={{ marginLeft: "10px", textAlign: 'start' }}>Jemes Op</p>
                <p style={{ marginLeft: "10px", textAlign: 'start', marginTop: "-16px", fontSize: "11px", color: "#aaa" }}>Followed by suman yo</p>
              </div>
            </div>
            <div style={{ cursor: 'pointer', marginRight: '10px' }}>
              <button className='btn btn-primary btn-sm'>Follow</button>
            </div>
          </div>
        </div>
      </div>
      <div className='rightcontainer' style={{ padding: "5px", overflowX: 'hidden' }}>
        <h6 style={{ textAlign: "start", marginLeft: "10px" }}>Categories</h6>
        <div className='row' style={{ paddingRight: "40px" }}>
          <div className='col-sm-3'>
            <h5><span class="badge bg-primary">Travel</span></h5>
          </div>
          <div className='col-sm-3'>
            <h5><span class="badge bg-primary">Sports</span></h5>
          </div>
          <div className='col-sm-3'>
            <h5><span class="badge bg-primary">Food</span></h5>
          </div>
          <div className='col-sm-3'>
            <h5><span class="badge bg-primary">Shopping</span></h5>
          </div>
          <div className='col-sm-3'>
            <h5><span class="badge bg-primary">Space</span></h5>
          </div>
        </div>
      </div>

      {/* <div class="card" style={{ width: "20rem",  overflowX:'hidden' }}>
        <div class="card-body" style={{paddingRight:"50px"}}>
          <h5 class="card-title">Categories</h5>
          <div className='row'>
            <div className='col-sm-3'>
              <h5><span class="badge bg-primary">Travel</span></h5>
            </div>
            <div className='col-sm-3'>
              <h5><span class="badge bg-primary">Sports</span></h5>
            </div>
            <div className='col-sm-3'>
              <h5><span class="badge bg-primary">Food</span></h5>
            </div>
            <div className='col-sm-3'>
              <h5><span class="badge bg-primary">Shopping</span></h5>
            </div>
            <div className='col-sm-3'>
              <h5><span class="badge bg-primary">Space</span></h5>
            </div>
          </div>
        </div>
      </div> */}

    </div>
  )
}
