import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    AsyncStorage
} from 'react-native'
import AddButton from '../Component/AddButton'
import ListItem from '../Component/ListItem';

import { connect } from 'react-redux';

class Home extends Component {
    addNew() {
        this.props.navigation.navigate('new')
    }

    render() {
        return(
            <View style={styles.container}>
                <ListItem></ListItem>
                <AddButton onPress={this.addNew.bind(this)}></AddButton>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default Home;