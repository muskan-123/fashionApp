const initialState = {
    count: 15,
    email: 'muskanmmm29@gmail.com',
    items: [{ name: 'Black coloured denim', id: 1 },
    { name: 'passionate formals', id: 2 }, { name: 'Black coloured denim', id: 3 },
    { name: 'Orange style florals', id: 4 }, { name: 'Orange style florals', id: 5 }]
}


export default reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREASE_FONT':
            return state.count != 28 ? state.count + 4 : state.count
        case 'DECREASE_FONT':
            return state.count != 12 ? state.count - 4 : state.count
        case 'CHANGE_EMAIL':
            return {
                ...state,
                email: action.payload
            }
        case 'DELETE_ITEM':

            return {
                ...state,
                items: state.items.filter(items => items.id != action.resultId)
            }
        default: return state
    }
}