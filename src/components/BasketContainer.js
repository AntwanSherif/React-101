import React from 'react';
import BasketItem from './BasketItem';

export default function BasketContainer({ items, ...events }) {
    return (
        <div>
            {items.map(item => (
                <BasketItem 
                    key={item.id} 
                    {...item} 
                    {...events}
                />
            ))}
        </div>
    )
}
