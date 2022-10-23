import React from 'react'
import "./Navbar.css"
import searchIcon from "../../images/search.png";
import Notifications from "../../images/bell.png";
import Message from "../../images/message.png";
import Profileimage from "../../images/profile.png";
import logo from "../../images/logo2.png";
import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <div className='mainNavbar'>
            <div className='LogoContainer' style={{ marginTop: '10px', marginLeft: '20px' }}>
                <span><b><Link to="/">Social Media</Link></b></span>
            </div>
            <div>
                <div className='searchInputContainer'>
                    <img src={`${searchIcon}`} className="searchIcon" alt="" />
                    <input type="text" className='searchInput' placeholder='search your friends' name="" id="" />
                </div>
            </div>
            <div style={{ marginTop: '10px', paddingRight: '10px' }}>
                <div style={{ display: 'flex' }}>
                    <p style={{ marginLeft: '5px' }}>Welcome Suman</p>
                    <div class="dropdown">
                        <img src={`${Profileimage}`} className="ProfileImage" data-bs-toggle="dropdown" aria-expanded="false" style={{ cursor: 'pointer' }} />
                        <ul class="dropdown-menu">
                            <li><Link class="dropdown-item" to={"/profile/" + 1}>Profile</Link></li>
                            <li><Link class="dropdown-item" to="/add-post">Add Posts</Link></li>
                            <li><Link class="dropdown-item" to="/favourite-post">Favourites</Link></li>
                            <li><Link class="dropdown-item" to="/friends">Friends</Link></li>
                            <li><a class="dropdown-item" href="#">Logout</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}
