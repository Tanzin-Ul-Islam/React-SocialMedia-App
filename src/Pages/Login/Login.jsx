import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
export default function Login() {
    return (
        <div className='mainPostContainer'>
            <div className="card mb-3" style={{ maxWidth: "34rem", marginTop: '40px', margin: '0 auto' }}>
                <div class="card-body">
                    <form action="">
                        <div class="mb-3">
                            <label class="form-label" style={{ float: 'left' }}>Email</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="mb-3">
                            <label class="form-label" style={{ float: 'left' }}>Password</label>
                            <input type="text" class="form-control" />
                        </div>
                        <button className='btn btn-success' style={{ float: 'left' }}>Login</button>
                    </form>
                    <Link to="/register" className='mt-3' style={{float:'right'}}>Register</Link>
                </div>
            </div>
        </div>
    )
}
