import React from 'react'
import { ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Markdown from 'react-native-markdown-display';

const PostScreen = ({ navigation }) => {
  const title = navigation.getParam('title')
  const body = navigation.getParam('body')

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>{title}</Text>
      <Markdown>{body}</Markdown>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginBottom: 40
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 15
  },
  body: {}
})

export default PostScreen
