/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Button} from 'react-native';
import ListGallery from './Components/ListGallery';
import FormGallery from './Components/FormGallery';

const routes = {
  main: 'MAIN',
  gallery_form: 'GALLERYFORM',
  gallery_list: 'GALLERYLIST',
}

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentRoute: routes.main
    }
  }

  renderMain() {
    return (
      <View style={{flexDirection: 'column'}}>
        <Button style={styles.buttonStyle} title="Form Gallery" onPress={() => this.setState({currentRoute: routes.gallery_form})}/>
        <Button style={styles.buttonStyle} title="List Gallery" onPress={() => this.setState({currentRoute: routes.gallery_list})}/>
      </View>
    )
  }

  renderCurrentRoute() {
    switch(this.state.currentRoute) {
      case (routes.main): return this.renderMain()
      case (routes.gallery_form): return <FormGallery/>
      case (routes.gallery_list): return <ListGallery/>
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.currentRoute != routes.main ? <Button style={styles.buttonStyle} title="Back" onPress={() => this.setState({currentRoute: routes.main})}/> : null}
        <ScrollView style={{width:'100%'}}>
          {this.renderCurrentRoute()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
