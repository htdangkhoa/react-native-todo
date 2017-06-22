import {
    StackNavigator
} from 'react-navigation';

import Home from './Views/Home';
import New from './Views/New';

export const Router = StackNavigator({
    home: {
        screen: Home,
        navigationOptions: {
            title: 'Home',
            headerBackTitle: 'Back'
        }
    },
    new: {
        screen: New,
        navigationOptions: {
            title: 'New',
            headerBackTitle: 'Back'
        }
    }
})