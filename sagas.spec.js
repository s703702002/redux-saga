import test from 'tape';

import { incrementAsync } from './sagas'
import { delay } from 'redux-saga'
import { put, call } from 'redux-saga/effects'

test('incrementAsync Saga test', (assert) => {
    const gen = incrementAsync()

    assert.deepEqual(
        gen.next().value,
        call(delay, 1000),
        'incrementAsync Saga must call delay(1000)'
    )

    assert.deepEqual(
        gen.next().value,
        put({type: 'INCREMENT'}),
        'dispatch 了 INCREAMENT'
    )

    assert.deepEqual(
        gen.next(),
        { done: true, value: undefined },
        'incrementAsync saga結束!'
    )
    
    assert.end()

  });