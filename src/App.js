import React, { useState, useCallback, useMemo } from 'react';
import BasketContainer from './components/BasketContainer';
import Header from './components/Header';

const basketItems = [
  { id: 20, value: 4, imgSrc: 'https://cataas.com/cat/meme' },
  { id: 30, value: 2, imgSrc: 'https://cataas.com/cat/funny' },
  { id: 40, value: 1, imgSrc: 'https://cataas.com/cat/fun' },
  { id: 60, value: 1, imgSrc: 'https://cataas.com/cat/meme' },
  { id: 70, value: 1, imgSrc: 'https://cataas.com/cat/funny' },
  { id: 80, value: 1, imgSrc: 'https://cataas.com/cat/fun' },
  { id: 90, value: 1, imgSrc: 'https://cataas.com/cat/meme' },
];

function App() {
  const [items, setItems] = useState(basketItems);
  // const [total, setTotal] = useState(0);

  const handleIncrement = useCallback(
    itemId => setItems(prevItems => {
      const newItems = prevItems.map(i => {
        //update item
        if (i.id === itemId) {
          i.value++;
          return i;
        }

        //leave other items unchanged
        return i;
      });

      return newItems;
    }),
    []
  );

  const handleDecrement = useCallback(
    itemId => setItems(prevItems => {
      const newItems = prevItems.map(i => {
        //update item
        if (i.id === itemId) {
          i.value--;
          return i;
        }

        //leave other items unchanged
        return i;
      });

      return newItems;
    }),
    []
  );

  const handleDelete = useCallback(
    itemId => {
      setItems(prevItems => prevItems.filter(i => i.id !== itemId));
    }, []
  );

  const total = useMemo(
    () => items.reduce((total, i) => total + i.value, 0),
    [items]
  );



  return (
    <div className='App'>
      <Header counterValue={total} />
      <BasketContainer items={items} onIncrement={handleIncrement} onDecrement={handleDecrement} onDelete={handleDelete} />
    </div>
  );
}

export default App;