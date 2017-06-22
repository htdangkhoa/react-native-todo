import React, { Component } from 'react'
import {
    View,
    Text
} from 'react-native'
import { Router } from './Router';
import { Provider } from 'react-redux'
import { store } from './Stores/Store'


export default class Index extends Component {
    render() {
        return(
            <Provider store={store}>
                <Router />
            </Provider>
        )
    }
}