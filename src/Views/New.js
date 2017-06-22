import React, { Component } from 'react'
import {
    View,
    TextInput,
    StyleSheet
} from 'react-native'
import Form from '../Component/Form'

export default class New extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Form navigation={this.props.navigation}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})