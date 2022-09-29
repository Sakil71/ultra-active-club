import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
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
            <div>
                <h2>User Info</h2>
            </div>
        </div>
    );
};

export default Excercise;