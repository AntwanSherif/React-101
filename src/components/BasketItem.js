import React, { useState } from 'react';

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
    value: {
        padding: '5px 10px',
        margin: 20,
        width: 30,
        backgroundColor: 'lightBlue'
    },
    button: {
        margin: 5,
        width: 30,
        height: 30,
        fontSize: 16,
        outline: 0
    }
}

export default function BasketItem() {
    const [value, setValue] = useState(0);

    const increase = () => setValue(prevValue => prevValue + 1);
    const decrease = () => setValue(prevValue => prevValue - 1);

    return (
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <img src='https://cataas.com/cat/meme' alt='item name' style={styles.image} />
            </div>
            
            <span style={styles.value}>{value}</span>

            <button style={styles.button} onClick={decrease}>-</button>
            <button style={styles.button} onClick={increase}>+</button>
        </div>
    )
}
