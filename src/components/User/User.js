import profile from '../../Images/Shakil AHamed.jpg'
import './User.css'
import location from '../../Images/location-dot-solid.svg'
// import { useState } from 'react';

const User = ({times}) => {
    // const [br, setBr] = useState(0)
    let breakTime = 0;
    const setBreak = (id) =>{
        console.log(id)
        breakTime = breakTime + id;
        // breakTime = [...br, id];
        // setBr(breakTime)       
    }
    
    let totalTime = 0;
    for(const addTime of times){
        totalTime = (totalTime + parseFloat(addTime.time));
    }

    return (
        <section className='profile'>
            <div className='profile-container mb-4'>
                <img className='profile-picture' src={profile} alt="" />
                <div className='ms-2'>
                    <h6 className='fw-bold fs-5'>Shakil Ahamed</h6>
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
            <div className='timer d-flex p-1 pt-3 rounded mb-5'>
                <p onClick={()=>setBreak(10)} className='time-count'>10s</p>
                <p onClick={()=>setBreak(20)} className='time-count'>20s</p>
                <p onClick={()=>setBreak(30)} className='time-count'>30s</p>
                <p onClick={()=>setBreak(40)} className='time-count'>40s</p>
                <p onClick={()=>setBreak(50)} className='time-count'>50s</p>
            </div>
            <h5>Excercise Details</h5>
            <div className='details rounded px-2 pt-3 mb-4'>
                <h6>Excercise time</h6>
                <p>{totalTime} seconds</p>
            </div>
            <div className='break-time rounded px-2 pt-3 mb-4'>
                <h6>Break time</h6>
                <p>{breakTime} seconds</p>
            </div>
            <button className='activity-button rounded p-2'>Activity completed</button>
        </section>
    );
};

export default User;