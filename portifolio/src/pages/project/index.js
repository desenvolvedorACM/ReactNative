import React from 'react';
import { WebView } from 'react-native-webview';

const Project = ({ navigation }) => (
    <WebView source={{ uri: navigation.state.params.project.url }}></WebView>);

Project.navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.project.title
});


export default Project;
