import React, { Component } from 'react';
import { SafeAreaView } from "react-native";
import { WebView } from 'react-native-webview';

class MyWeb extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <WebView 
          source={{ uri: 'https://github.com/CristianSz2003/blog_Peliculas.git' }} 
        />
      </SafeAreaView>
    );
  }
}
