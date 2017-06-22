import {
    INITIALIZE_ITEM,
    ADD_ITEM,
    REMOVE_ITEM
} from '../Actions/Action.js'

export const dataReducer = (state = [], action) => {
    switch (action.type) {
        case INITIALIZE_ITEM: {
            return [...action.data]
        }
        case ADD_ITEM: {
            return [...state, action.item]
        }
        case REMOVE_ITEM: {
            return state.filter((e, i) => i != action.index)
        }
        default:
            return state
    }
}