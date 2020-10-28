import { INCREMENT_COUNT, DECREMENT_COUNT } from './enum'

const ExampleAPICAllAsybnchronus = () => {
    return new Promise(resolve =>
        setTimeout(() => resolve(), 1000)
    )
}

export const incrementAction = (data) => async (dispatch) => {
    await ExampleAPICAllAsybnchronus()
    dispatch({
        type: INCREMENT_COUNT,
        payload: data
    })
}


export const decrementAction = (data) => async (dispatch) => {
    await ExampleAPICAllAsybnchronus()
    dispatch({
        type: DECREMENT_COUNT,
        payload: data
    })
}