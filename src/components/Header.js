import React from 'react';
import { Link } from 'react-router-dom';
import Counter from './common/Counter';

const styles = {
    header: {
        height: 30,
        padding: 15,
        marginBottom: 40,
        backgroundColor: '#44d1ff',
        fontSize: 20,
        boxShadow: 'rgba(0, 0, 0, 0.75) 0px -5px 15px 0px'
    }
};

export default function Header({ counterValue }) {
    return (
        <div style={styles.header}>
            <Link to='/' style={{float: 'left', textDecoration: 'none' }}>
                اعتبروه لوجو
            </Link>

            <Link to='/basket' style={{float: 'right', textDecoration: 'none' }}>
                <Counter value={counterValue} style={{ backgroundColor: 'yellow', borderRadius: 30, fontSize: 12, textAlign: 'right', }} />
            </Link>
        </div>
    )
}
