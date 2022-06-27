import React from 'react';
import { AppRegistry, StatusBar } from 'react-native';
import Root from './src/Root';

StatusBar.setBarStyle('dark-content');
console.disableYellowBox = true;


class RootApp extends React.Component {
  render() {
    return <Root />;
  }
}

AppRegistry.registerComponent('property', () => RootApp);

export default RootApp;