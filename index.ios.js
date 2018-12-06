// index.ios.js - code placed for IOS

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

// render it to the device
AppRegistry.registerComponent(appName, () => App);
