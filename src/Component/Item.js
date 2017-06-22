import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

export default class Item extends Component {
    render() {
        return(
            <View style={styles.container}>
                <TouchableOpacity 
                    style={styles.touch} 
                    onPress={this.props.onClick}
                >
                    <View style={styles.dataContainer}>
                        <Text style={styles.dot}>•</Text>
                        <Text style={styles.text}>{this.props.data}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    touch: {
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20
    },
    dataContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    dot: {
        marginRight: 10
    },
    text: {
        fontSize: 15
    }
})