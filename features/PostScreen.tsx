import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useSnapshot} from 'valtio';
import {PostState} from '../store/Index';
import {Colors} from './../styles/Color';
function PostScreen() {
  const {posts} = useSnapshot(PostState);
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={postItem => (
          <Text style={styles.textContainer}>{postItem.item.body}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  textContainer: {
    padding: 5,
    margin: 10,
    elevation: 10,
    borderRadius: 10,
    backgroundColor: Colors.select.primary100,
  },
});

export default PostScreen;
