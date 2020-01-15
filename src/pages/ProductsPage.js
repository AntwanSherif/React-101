import React, { useState, useEffect } from 'react';
import Tile from '../components/Tile';

const styles = {
    itemsWrapper: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: 25 
    }
}

export default function ProductsPage() {
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://wahdan.s3.us-east-2.amazonaws.com/superheros.json')
            .then(res => res.json())
            .then(res => {
                setItems(res);
                setLoading(false)
            })
    }, []);

    return (
        <div style={styles.itemsWrapper}>
            {loading && '...Loading'}
            {items.map(item => <Tile key={item.id} {...item} />)}
        </div>
    )
}