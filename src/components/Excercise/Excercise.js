import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import User from '../User/User';
import './Excercise.css'

const Excercise = () => {
    const [cards, setCards] = useState([]);
    useEffect(()=>{
        fetch('fackDb.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])
    return (
        <div className='excercise-container'>
            <div className='cards-container'>
                {
                    cards.map(card => <Cards
                        card = {card}
                        key = {card.id}
                    ></Cards>)
                }
            </div>
            <div className='user-section bg-light rounded p-2'>
                {
                    <User></User>
                }
            </div>
        </div>
    );
};

export default Excercise;