/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
  "NativeBase: The contrast ratio",
  "VirtualizedLists should never be nested",
  "Require cycle: node_modules/victory",
  "equire cycle: node_modules\\victory-vendor"
]);
AppRegistry.registerComponent(appName, () => App);
