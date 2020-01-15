import React from 'react';
import Counter from './common/Counter';

const styles = {
    header: {
        height: 30,
        padding: 15,
        marginBottom: 40,
        backgroundColor: '#44d1ff',
        fontSize: 20,
        textAlign: 'right',
        boxShadow: 'rgba(0, 0, 0, 0.75) 0px -5px 15px 0px'
    }
};

export default function Header() {
    return (
        <div style={styles.header}>
            <span>اعتبروه لوجو</span>
            <Counter value={0} style={{ backgroundColor: 'yellow', borderRadius: 30, fontSize: 12 }} />
        </div>
    )
}
