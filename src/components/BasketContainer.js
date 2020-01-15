import React, { useState } from 'react';
import BasketItem from './BasketItem';

const basketItems = [
    { id: 20, value: 4, imgSrc: 'https://cataas.com/cat/meme' },
    { id: 30, value: 2, imgSrc: 'https://cataas.com/cat/funny' },
    { id: 40, value: 1, imgSrc: 'https://cataas.com/cat/fun' },
];

export default function BasketContainer() {
    const [items, setItems] = useState(basketItems);

    return (
        <div>
            {items.map(item => <BasketItem key={item.id} {...item} />)}
        </div>
    )
}
