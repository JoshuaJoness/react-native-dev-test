import React, { useEffect } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import axios from 'axios'

const HomeScreen = () => {
  useEffect(() => {
    axios.get('http://192.168.2.241:4000/posts').then(res => {
      console.log(res.data);
    }).catch(err => {
        console.log(err);
      })
   }, [])

  return(
    <View>
      <Text>Home Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default HomeScreen
