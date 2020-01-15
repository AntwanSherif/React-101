import React, { useState } from 'react';
import Counter from './common/Counter';

const styles = {
    wrapper: {
        border: '1px solid grey',
        padding: 5,
        margin: 15
    },
    imageContainer: {
        float: 'left',
        marginTop: 5,
        marginLeft: 20
    },
    image: {
        width: 28,
        height: 28
    },
    button: {
        margin: 5,
        width: 30,
        height: 30,
        fontSize: 16,
        outline: 0
    },
    removeButton: {
        margin: 5,
        width: 80,
        height: 30,
        fontSize: 16,
        outline: 0,
        backgroundColor: 'red',
        color: 'white'
    }
}

export default function BasketItem(props) {
    const { id, value, imgSrc, onIncrement, onDecrement, onDelete } = props;

    const increase = () => onIncrement(id);
    const decrease = () => onDecrement(id);
    const remove = () =>  onDelete(id);

    return (
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <img src={imgSrc} alt='item name' style={styles.image} />
            </div>

            <Counter value={value} />
            
            {value > 1 && <button style={styles.button} onClick={decrease}>-</button>}
            {value <= 1 && <button style={styles.removeButton} onClick={remove}>Remove</button>}
            
            <button style={styles.button} onClick={increase}>+</button>
        </div>
    )
}
