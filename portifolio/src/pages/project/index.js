import React from 'react';
import { WebView } from 'react-native';

const Project = ({ navigation }) => (
    <WebView source={{ uri: navigation.state.params.project.url }}></WebView>);

Project.navigationOption = ({ navigation }) => ({
    title: navigation.state.params.project.title
});


export default Project;
