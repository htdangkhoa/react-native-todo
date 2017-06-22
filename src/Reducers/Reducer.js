import * as redux from 'redux'
import {dataReducer} from './data'

export const Reducer = redux.combineReducers({
    data: dataReducer
})
