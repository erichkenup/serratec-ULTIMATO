/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Flex from './contents/Flex'
import FlexDirectionBasics from './contents/FlexDirectionBasics'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => FlexDirectionBasics);
