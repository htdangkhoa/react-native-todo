import React, { Component, PropTypes } from 'react'
import {
    View,
    Text,
    ListView,
    StyleSheet,
    AsyncStorage
} from 'react-native'
import { connect } from 'react-redux'
import Item from './Item'
import {
    INITIALIZE_ITEM,
    REMOVE_ITEM
} from '../Actions/Action'

class ListItem extends Component {
    componentWillMount() {
        const {dispatch} = this.props;

        // INITIALIZE DATA FROM STORAGE. 449sc
        AsyncStorage.getItem('data')
        .then(result => {
            let data = result;

            if (result !== null) {
                data = JSON.parse(data)
            }else {
                data = []
            }

            dispatch({
                type: INITIALIZE_ITEM,
                data
            })
        })

        this.creareDataSource(this.props.data)
    }

    componentWillReceiveProps(newProps) {
        AsyncStorage.setItem('data', JSON.stringify(newProps.data))

        this.creareDataSource(newProps.data)
    }

    creareDataSource(props) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })
        this.dataSource = ds.cloneWithRows(props)
    }

    toggleCompleted(index) {
        const {dispatch} = this.props
        dispatch({
            type: REMOVE_ITEM,
            index
        })
    }

    render() {
        if (this.props.data.length === 0) {
            return(
                <View style={ styles.containerNoContent }>                    
                    <Text style={styles.message}>No note!!!</Text>
                </View>
            )
        }

        return(
            <View style={styles.containerHasContent}>
                <ListView 
                    enableEmptySections={true} 
                    dataSource={this.dataSource} 
                    renderRow={(row, sID, rID) => <Item data={row} onClick={this.toggleCompleted.bind(this, rID)}></Item>}
                >
                </ListView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerHasContent: {
        flex: 1
    },
    containerNoContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    message: {
        color: '#777'
    }
})

export default connect(state => {
    return {
        data: state.data
    }
})(ListItem);