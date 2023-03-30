import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WebView, { WebViewProps } from 'react-native-webview';
import React, {Component} from 'react';

export default class App extends Component {
    render() {
        return (
            <Webs />
        );
    }
}

class Webs extends Component {
    render() {
        return (
            <WebView
                style={styles.container}
                javaScriptEnabled={true}
                source={{
                    uri: 'http://offliberty.io/'
                }}
            >
            </WebView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
      marginTop: 60,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
});
