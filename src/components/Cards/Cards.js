import React from 'react';
import './Cards.css'

const Cards = props => {
    const {picture, name, age, time} = props.card;
    
    return (
        <div className='card-container'>
            <img src={picture} alt="" />
            <div className='m-3'>
            <h5 className='fw-bold'>{name}</h5>
            <p className='opacity-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, vero.</p>
            <h6><span className='fw-light'>For Age:</span> {age}</h6>
            <h6><span className='fw-light'>Time required:</span> {time}s</h6>
            </div>
            <button onClick={()=>props.addTimeToUser(props.card)}className='button-add fw-bold py-2'>
               Add to list
            </button>
        </div>
    );
};

export default Cards;