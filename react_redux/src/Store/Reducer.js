const initialState = {
    message: 'This is about React Redux'
}

const reducer = (state = initialState, action) => {
    const newState = {...state}

    if(action.type === 'Message Change'){
        newState.message = 'Thank you for the session'
    }
    return newState
}

export default reducer;