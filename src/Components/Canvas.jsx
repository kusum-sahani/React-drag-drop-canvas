import React, { useState } from 'react';
import Card from './Card';
import '../styles.css';

const Canvas = () => {
    const [cards, setCards] = useState([]);
    
    const addCard = () => {
        const newCard = {
            id: cards.length,
            text: `Click on "Show More". Welcome to Card ${cards.length + 1}!.`,
            position: { x: 0, y: 0 },
        };
        setCards([...cards, newCard]);
    };

    const updateCardPosition = (id, x, y) => {
        setCards(cards.map(card => 
            card.id === id ? { ...card, position: { x, y } } : card
        ));
    };

    return (
        <div className="canvas-container">
            <button onClick={addCard} className="add-card-btn">Add Card</button>
            <div className="canvas">
                {cards.map(card => (
                    <Card
                        key={card.id}
                        id={card.id}
                        text={card.text}
                        position={card.position}
                        onUpdatePosition={updateCardPosition}
                    />
                ))}
            </div>
        </div>
    );
};

export default Canvas;
