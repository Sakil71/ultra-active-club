import React from 'react';
import './Cards.css'

const Cards = props => {
    const {picture, name, age, time} = props.card;
    return (
        <div className='card-container'>
            <img src={picture} alt="" />
            <div>
            <h2>{name}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, vero.</p>
            <h4>For Age: {age}</h4>
            <p>Time: {time}</p>
            </div>
            <button className='button-add fw-bold'>
                <p>Add to list</p>
            </button>
        </div>
    );
};

export default Cards;