import React from 'react';

const styles = {
    tile: {
        boxShadow: 'rgba(0, 0, 0, 0.75) 2px 8px 42px -16px',
        width: 150,
        height: '100%',
        padding: 10,
        border: '1px solid lightgrey',
        borderRadius: 6,
        margin: 10
    },
    image: {
        width: '100%',
        height: 150
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 5
    },
    addToBasket: {
        width: '100%',
        backgroundColor: '#aad1ff',
        height: 30,
        fontSize: 14,
        marginTop: 30
    }
}

export default function Tile({ id, name, image: { url }}) {
    const addToBasket = () =>  console.log('should add to basket', name, id);
    return (
        <div style={styles.tile}>
            <img src={url} alt={name} style={styles.image} />
            <div style={styles.name}>{name}</div>

            <button style={styles.addToBasket} onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}
