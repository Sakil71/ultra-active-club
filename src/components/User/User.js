import React from 'react';
import profile from'../../Images/Shakil AHamed.jpg'
import './User.css'
import location from '../../Images/location-dot-solid.svg'

const User = () => {
    return (
        <section>
            <div className='profile-container mb-2'>
            <img className='profile-picture' src={profile} alt="" />
            <div className='ms-2'>
                <h6 className='fw-bold'>Shakil Ahamed</h6>
                <p><img className='location' src={location} alt="" /> Dhanmondi, Dhaka</p>
            </div>
        </div>
        <div className='user-info mb-4 rounded'>
            <div className='me-3'>
                <h4>56<span className='fs-6 fw-light'>kg</span></h4>
                <h6>Weight</h6>
            </div>
            <div className='me-3'>
                <h4>5.6</h4>
                <h6>Height</h6>
            </div>
            <div className='me-3'>
                <h4>23<span className='fs-6 fw-light'>yrs</span></h4>
                <h6>Age</h6>
            </div>
        </div>
        <h5>Add a break</h5>
        <div className='timer d-flex p-1 pt-3 rounded'>
            <p className='time-count'>10s</p>
            <p className='time-count'>20s</p>
            <p className='time-count'>30s</p>
            <p className='time-count'>40s</p>
            <p className='time-count'>50s</p>
        </div>
        </section>
    );
};

export default User;