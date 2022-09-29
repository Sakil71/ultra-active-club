import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import User from '../User/User';
import './Excercise.css'

const Excercise = () => {
    const [cards, setCards] = useState([]);
    const [times, setTime] = useState([]);
    useEffect(()=>{
        fetch('fackDb.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])

    const addTimeToUser = (card) =>{
        const newTime = [...times, card];
        setTime(newTime);
    }

    return (
        <div className='excercise-container'>
            <div className='cards-container'>
                {
                    cards.map(card => <Cards
                        card = {card}
                        key = {card.id}
                        addTimeToUser = {addTimeToUser}
                    ></Cards>)
                }
            </div>
            <div className='user-section bg-light rounded p-2'>
                {
                    <User
                        times = {times}
                    ></User>
                }
            </div>
        </div>
    );
};

export default Excercise;