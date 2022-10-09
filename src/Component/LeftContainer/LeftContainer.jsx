import React from 'react'
import './LeftContainer.css';
import image from "../../images/profile.png";
import image1 from "../../images/image1.jpg";
import image2 from "../../images/image2.jpg";
export default function LeftContainer() {
  return (
    <div className='Leftbar'>
      <div className='NotificationsContainer' style={{padding: "5px"}}>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <p style={{ marginLeft: "-14px" }}>Notifications</p>
          <p style={{ color: "#aaa", marginLeft: "40px" }}>See all</p>
        </div>
        <div style={{ display: 'flex', alignItems: "center", marginTop: -10 }}>
          <img src={`${image}`} className="notificationimg" alt="" />
          <p style={{ marginLeft: "5px", color: "#aaa", fontSize: 13, width: "120px", textAlign: "start" }}>Madan like your post</p>
          <img src={`${image1}`} className="likeimage" alt="" />
        </div>
        <div style={{ display: 'flex', alignItems: "center", marginTop: -10 }}>
          <img src={`${image}`} className="notificationimg" alt="" />
          <p style={{ marginLeft: "5px", color: "#aaa", fontSize: 13, width: "120px", textAlign: "start" }}>Madan like your post</p>
          <img src={`${image1}`} className="likeimage" alt="" />
        </div>
        <div style={{ display: 'flex', alignItems: "center", marginTop: -10 }}>
          <img src={`${image}`} className="notificationimg" alt="" />
          <p style={{ marginLeft: "5px", color: "#aaa", fontSize: 13, width: "120px", textAlign: "start" }}>Madan like your post</p>
          <img src={`${image1}`} className="likeimage" alt="" />
        </div>
        <div style={{ display: 'flex', alignItems: "center", marginTop: -10 }}>
          <img src={`${image}`} className="notificationimg" alt="" />
          <p style={{ marginLeft: "5px", color: "#aaa", fontSize: 13, width: "120px", textAlign: "start" }}>Madan like your post</p>
          <img src={`${image1}`} className="likeimage" alt="" />
        </div>
        <div style={{ display: 'flex', alignItems: "center", marginTop: -10 }}>
          <img src={`${image}`} className="notificationimg" alt="" />
          <p style={{ marginLeft: "5px", color: "#aaa", fontSize: 13, width: "120px", textAlign: "start" }}>Madan like your post</p>
          <img src={`${image1}`} className="likeimage" alt="" />
        </div>
        <div style={{ display: 'flex', alignItems: "center", marginTop: -10 }}>
          <img src={`${image}`} className="notificationimg" alt="" />
          <p style={{ marginLeft: "5px", color: "#aaa", fontSize: 13, width: "120px", textAlign: "start" }}>Madan like your post</p>
          <img src={`${image1}`} className="likeimage" alt="" />
        </div>
      </div>
      <div className='NotificationsContainer'>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <p style={{ marginLeft: "-20px" }}>Explore</p>
          <p style={{ color: "#aaa", marginLeft: "40px" }}>See all</p>
        </div>
        <div>
          <img src={`${image1}`} className="exploreimage" alt="" />
          <img src={`${image2}`} className="exploreimage" alt="" />
          <img src={`${image2}`} className="exploreimage" alt="" />
          <img src={`${image2}`} className="exploreimage" alt="" />
          <img src={`${image2}`} className="exploreimage" alt="" />
        </div>

      </div>
    </div>
  )
}
