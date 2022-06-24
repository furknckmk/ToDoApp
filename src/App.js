import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Pressable,
} from 'react-native';

import Todo from './components/Todo';

let lastId = 0;
function App() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [completedTask, setCompletedTask] = useState(0);
  function handleSaveTodo() {
    if (todo === '') {
      return alert('Henuz todo Girmediniz');
    }
    setTodoList([...todoList, {id: lastId++, todo, completed: false}]);
    setTodo('');
  }

  const toggleTodo = item => {
    const newTodoList = todoList.map(t =>
      t.id === item.id ? {...t, completed: !t.completed} : t,
    );
    console.log(newTodoList);
    setTodoList(newTodoList);
  };

  useEffect(() => {
    const list = todoList.filter(todo => !todo.completed);
    setCompletedTask(list);
  }, [todoList]);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Yapilacaklar</Text>
        <Text style={styles.counter}>{completedTask.length}</Text>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={todoList}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Todo onToggle={() => toggleTodo(item)} item={item} />
          )}
        />
      </View>
      <View style={styles.bottomContainer}>
        <TextInput
          value={todo}
          onChangeText={setTodo}
          placeholder="Yapilacak.."
          placeholderTextColor="gray"
          style={styles.textInput}
        />
        <Pressable onPress={handleSaveTodo}>
          <View
            style={[
              styles.buttonContainer,
              todo !== '' && {backgroundColor: 'yellow'},
            ]}>
            <Text style={[, todo !== '' && {color: 'black'}]}>Kaydet</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#102027'},
  title: {fontSize: 30, color: 'orange'},
  counter: {fontSize: 30, color: 'orange'},
  headerContainer: {
    margin: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  bottomContainer: {
    margin: 16,
    borderWidth: 1,
    borderRadius: 40,
    paddingBottom: 5,
  },
  listContainer: {flex: 1, marginTop: 20},
  textInput: {
    padding: 10,
    fontSize: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#ededed',
    margin: 10,
    color: 'white',
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
  buttonContainer: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#696969',
    marginHorizontal: 20,
    borderRadius: 20,
  },
});

export default App;
