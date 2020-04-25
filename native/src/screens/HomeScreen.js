import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button } from 'react-native'
import axios from 'axios'

const regex = /.*?(\.)(?=\s[A-Z])/;

const HomeScreen = () => {
  const [posts, setPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState([])
  const [filtered, setFiltered] = useState(false)

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

  const filterPostsByAuthor = (name) => {
    let filteredPosts = posts.filter(post => post.author.name == name)
    setFilteredPosts(filteredPosts)
    setFiltered(true)
  }

  return(
    <View>
      <Text>Home Screen</Text>
      <FlatList
        data={filtered ? filteredPosts : posts}
        keyExtractor={(post) => post.title}
        renderItem={({item}) => {
          return (
            <TouchableOpacity style={styles.post}>
              <View>
                <Text>{item.title}</Text>
                <Text>{regex.exec(item.body)}</Text>
                <Button title={item.author.name} onPress={() => filterPostsByAuthor(item.author.name)}/>
                <Text>{item.publishedAt}</Text>
              </View>
            </TouchableOpacity>
          )
         }}
       />
      {filtered ? <Button title='Show all posts' onPress={() => setFiltered(false)} /> : null}
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
