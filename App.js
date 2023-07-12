import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Navigation from './navigation';
import "react-native-gesture-handler"
import {NavigationContainer} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return <Navigation/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
