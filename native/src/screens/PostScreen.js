import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Markdown from 'react-native-markdown-display';

const PostScreen = ({ navigation }) => {
  const title = navigation.getParam('title')
  const body = navigation.getParam('body')

  return (
    <>
      <Text>{title}</Text>
      <Markdown>{body}</Markdown>
    </>
  )
}

const styles = StyleSheet.create({})

export default PostScreen
