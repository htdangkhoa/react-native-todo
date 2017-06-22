import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default class AddButton extends Component {
    render() {
        return(
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
                    <Text>
                        <Icon name='ios-add' size={40} color='#fff'></Icon>
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 20,
        right: 20
    },
    button: {
        backgroundColor: '#999',
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25
    }
})