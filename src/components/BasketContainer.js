import React, { useState } from 'react';
import BasketItem from './BasketItem';

const basketItems = [
    { id: 20, value: 4, imgSrc: 'https://cataas.com/cat/meme' },
    { id: 30, value: 2, imgSrc: 'https://cataas.com/cat/funny' },
    { id: 40, value: 1, imgSrc: 'https://cataas.com/cat/fun' },
    { id: 60, value: 1, imgSrc: 'https://cataas.com/cat/meme' },
    { id: 70, value: 1, imgSrc: 'https://cataas.com/cat/funny' },
    { id: 80, value: 1, imgSrc: 'https://cataas.com/cat/fun' },
    { id: 90, value: 1, imgSrc: 'https://cataas.com/cat/meme' },
];

export default function BasketContainer() {
    const [items, setItems] = useState(basketItems);

    const handleDelete = itemID => {
        setItems(prevItems => prevItems.filter(i => i.id !== itemID));
    }

    return (
        <div>
            {items.map(item => (
                <BasketItem 
                    key={item.id} 
                    {...item} 
                    onDelete={handleDelete} 
                />
            ))}
        </div>
    )
}
