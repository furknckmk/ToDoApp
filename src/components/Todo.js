/* eslint-disable prettier/prettier */
import React from 'react';
import {Pressable, Text, View, StyleSheet} from 'react-native';

function Todo({item, onToggle}) {
  return (
    <Pressable
      onPress={onToggle}
      style={({pressed}) => pressed && styles.pressed}>
      <View style={[styles.todo, item.completed && {backgroundColor: 'gray'}]}>
        <Text
          style={[
            styles.todoText,
            item.completed && {textDecorationLine: 'line-through'},
          ]}>
          {item.todo}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
  todo: {
    padding: 20,
    backgroundColor: 'green',
    margin: 10,
    borderRadius: 10,
  },
  todoText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  listText: {
    color: 'white',
  },
});

export default Todo;
