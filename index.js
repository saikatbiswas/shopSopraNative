/**
 * @format
 */
 import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import ReduxStore from './src/store';
import Toast from 'react-native-toast-message';
import { ThemeProvider } from 'react-native-elements';
import Colors from './src/utils/Colors';


const theme = {
    colors: {
      primary: Colors.primary[500],
      secondary: Colors.secondary[500],
      
    },
};

const reduxApp = ()=> (
    <Provider store={ReduxStore()}>
        <ThemeProvider theme={theme}>
            <App />
            <Toast ref={(ref) => Toast.setRef(ref)} />
        </ThemeProvider>
    </Provider>
)

AppRegistry.registerComponent(appName, () => reduxApp);
