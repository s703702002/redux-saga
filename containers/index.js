import React from 'react';
import Counter from '../components/Counter';
import { connect } from 'react-redux';

const App = (props) => {
    console.log('props',props);
    return (
        <Counter 
            value={props.counter}
            onIncrement={() => props.dispatch({ type: 'INCREMENT' })}
            onDecrement={() => props.dispatch({ type: 'DECREMENT' })}
        />
    )
};

const mapStateToProps = (state, ownProps) => {
    const counter = state;
    return {
        counter,
    }
}

export default connect(mapStateToProps)(App);