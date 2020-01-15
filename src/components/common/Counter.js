import React from 'react';

const counterStyle = {
    padding: '5px 10px',
    margin: 20,
    width: 30,
    backgroundColor: 'lightBlue'
};

const Counter = ({ value, style }) => <span style={{...counterStyle, ...style}}>{value}</span>;

export default Counter;
