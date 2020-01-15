import React, { useContext } from 'react';
import { BasketItemsContext } from '../App';
import BasketItem from './BasketItem';

export default function BasketContainer() {
    const { items, ...events } = useContext(BasketItemsContext);
    
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
