import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const PostScreen = ({ navigation }) => {
  const title = navigation.getParam('title')
  const body = navigation.getParam('body')

  return (
    <>
      <Text>{title}</Text>
      <Text>{body}</Text>
    </>
  )
}

const styles = StyleSheet.create({})

export default PostScreen
