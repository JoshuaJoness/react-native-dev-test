import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Button,
} from 'react-native';
import axios from 'axios';
import moment from 'moment';

const regex = /.*?(\.)(?=\s[A-Z])/;

const HomeScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [filtered, setFiltered] = useState(false);

  useEffect(() => {
    // Here you must enter your local IP address
    axios
      .get('http://192.168.2.241:4000/posts')
      .then((res) => {
        sortedDates = res.data.sort((a, b) =>
          a.publishedAt > b.publishedAt
            ? -1
            : a.publishedAt < b.publishedAt
            ? 1
            : 0
        );
        setPosts(sortedDates);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filterPostsByAuthor = (name) => {
    let filteredPosts = posts.filter((post) => post.author.name == name);
    setFilteredPosts(filteredPosts);
    setFiltered(true);
  };

  return (
    <View
      style={
        filtered && Platform.OS === 'android'
          ? { marginBottom: 70 }
          : { marginBottom: 0 }
      }
    >
      <FlatList
        data={filtered ? filteredPosts : posts}
        keyExtractor={(post) => post.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Post', {
                  title: item.title,
                  body: item.body,
                })
              }
            >
              <View style={styles.postContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.summary}>{regex.exec(item.body)}</Text>
                <View style={styles.authorContainer}>
                  <Text style={{ fontWeight: 'bold' }}>Author: </Text>
                  {Platform.OS === 'android' ? (
                    <TouchableOpacity
                      onPress={() => filterPostsByAuthor(item.author.name)}
                    >
                      <Text style={styles.androidAuthorButton}>
                        {item.author.name}
                      </Text>
                    </TouchableOpacity>
                  ) : (
                    <Button
                      title={item.author.name}
                      onPress={() => filterPostsByAuthor(item.author.name)}
                    />
                  )}
                </View>
                <Text>
                  <Text style={{ fontWeight: 'bold' }}>Published:</Text>
                  {moment(item.publishedAt).format('LLLL')}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      {filtered ? (
        <Button
          title="Show all posts"
          style={styles.button}
          onPress={() => setFiltered(false)}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    borderWidth: 2,
    borderColor: '#d3d3d3',
    alignItems: 'flex-start',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  summary: {
    fontSize: 18,
  },
  button: {
    marginTop: 50,
  },
  androidAuthorButton: {
    color: 'blue',
  },
});

export default HomeScreen;
