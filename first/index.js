/**
 * @format
 */

import { AppRegistry } from 'react-native';
import Func from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Google from './Google';
import Googlesign from './Googlesign';
import Phone from './Phone';
import Snap from './src/Snap';
AppRegistry.registerComponent(appName, () => Snap);
