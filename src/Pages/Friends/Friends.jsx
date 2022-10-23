import React from 'react'
import RightContainer from '../../Component/RightContainer/RightContainer';
import LeftContainer from '../../Component/LeftContainer/LeftContainer';
import image2 from "../../images/image2.jpg";
import image5 from "../../images/image5.jpg";
import image4 from "../../images/image4.jpg";
import './Friends.css'
export default function Friends() {
  return (
    <>
      <LeftContainer />
      <div className='mainPostContainer'>
        <div>
          <div className='ContentUploadContainer'>
            <div style={{ margin: "10px", marginBottom: '10px', backgroundColor: '#ebebeb', padding: '10px', borderRadius: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: "center" }}>
                  <img src={`${image5}`} className="Profileimage" alt="" />
                  <div>
                    <p style={{ marginLeft: "10px", marginTop: '10px', textAlign: 'start' }}>Dan jok</p>

                  </div>
                </div>
                <div style={{ cursor: 'pointer', marginRight: '10px' }}>
                  <button className='btn btn-primary btn-sm'>Unfriend</button>
                </div>
              </div>
            </div>
            <div style={{ margin: "10px", marginBottom: '10px', backgroundColor: '#ebebeb', padding: '10px', borderRadius: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: "center" }}>
                  <img src={`${image5}`} className="Profileimage" alt="" />
                  <div>
                    <p style={{ marginLeft: "10px", marginTop: '10px', textAlign: 'start' }}>Dan jok</p>

                  </div>
                </div>
                <div style={{ cursor: 'pointer', marginRight: '10px' }}>
                  <button className='btn btn-primary btn-sm'>Unfriend</button>
                </div>
              </div>
            </div>
            <div style={{ margin: "10px", marginBottom: '10px', backgroundColor: '#ebebeb', padding: '10px', borderRadius: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: "center" }}>
                  <img src={`${image5}`} className="Profileimage" alt="" />
                  <div>
                    <p style={{ marginLeft: "10px", marginTop: '10px', textAlign: 'start' }}>Dan jok</p>

                  </div>
                </div>
                <div style={{ cursor: 'pointer', marginRight: '10px' }}>
                  <button className='btn btn-primary btn-sm'>Unfriend</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RightContainer />
    </>
  )
}
