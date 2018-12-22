// Import a library to create component
import React from 'react';
import { AppRegistry, SafeAreaView } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a componenet
const App = () => (
  <SafeAreaView>
    <Header headerText={'Albums'} />
    <AlbumList />
  </SafeAreaView>
);
// Render it to the device
AppRegistry.registerComponent('albums', () => App);
