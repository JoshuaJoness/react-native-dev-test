import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import axios from 'axios'

const regex = /.*?(\.)(?=\s[A-Z])/;

const HomeScreen = () => {
  const [posts, setPosts] = useState([])


  useEffect(() => {
    // Here you must enter your local IP address
    axios.get('http://192.168.2.241:4000/posts').then(res => {
      console.log(res.data);
      sortedDates = res.data.sort((a,b) => (a.publishedAt > b.publishedAt) ? -1 : ((a.publishedAt < b.publishedAt) ? 1 : 0) )
      setPosts(sortedDates)
    }).catch(err => {
        console.log(err);
      })
   }, [])

  return(
    <View>
      <Text>Home Screen</Text>
      <FlatList
        data={posts}
        keyExtractor={(post) => post.title}
        renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.post}>
              <View>
                <Text>{item.title}</Text>
                <Text>{regex.exec(item.body)}</Text>
                <Text>{item.author.name}</Text>
                <Text>{item.publishedAt}</Text>
              </View>
            </TouchableOpacity>
          )
         }}
       />
    </View>
  )
}

const styles = StyleSheet.create({
  post: {
    borderWidth: 2,
    borderColor: 'black'
}
})

export default HomeScreen
