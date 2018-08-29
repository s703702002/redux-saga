import React from 'react';
import Counter from '../components/Counter';

const App = ({ store }) => {
    return (
        <Counter 
            value={store.getState().counter}
            onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
            onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
        />
    )
};

export default App;