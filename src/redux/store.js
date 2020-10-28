import { applyMiddleware, createStore } from 'redux'

import thunk from 'redux-thunk'

import { INCREMENT_COUNT, DECREMENT_COUNT } from './enum'

const inititalState = {
    count: 0,
    parameter: ""
}

const rootreducer = (state = inititalState, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            return {
                ...state,
                count: state.count + 1,
                parameter: action.payload
            }
        case DECREMENT_COUNT:
            return {
                ...state,
                count: state.count - 1,
                parameter: action.payload

            }
        default:
            return state
    }
}

export default createStore(rootreducer, applyMiddleware(thunk))