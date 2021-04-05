import * as React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import firebase from 'firebase';
import db from '../config'

export default class App extends React.Component() {
  constructor(){
    super()
    this.state = {
      title : "",
      author : "",
      story : "",
    }
  }

  submitStory = async () => {
    let random = Math.random() * 1000;
    db.collection("stories").add({
      'title' : this.state.title,
      'author' : this.state.author,
      'story' : this.state.story,
    })
  }
  render(){
    return (
      <View>

        <Header
          backgroundColor={'#000000'}
          centerComponent={{
            text: 'WriteStory',
            style: { color: '#fff', fontSize: 20 },
          }}
        />

        <TextInput
          placeholder={"Title"}
          onChangeText={text => {
            this.setState({ title : text.toLowerCase().trim() });
          }}
          value={this.state.title}
        />
        <TextInput
          placeholder={"Author"}
          onChangeText={text => {
            this.setState({ author : text.toLowerCase().trim() });
          }}
          value={this.state.author}
        />
        <TextInput
          placeholder={"Write the story"}
          onChangeText={text => {
            this.setState({ story : text.toLowerCase().trim() });
          }}
          value={this.state.story}
        />

        <TouchableOpacity onPress={this.submitStory}><Text>Submit</Text></TouchableOpacity>
      </View>
    );
  }
}