import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Task from './components/Task';
import NewTask from './components/NewTask';

import { themeColor } from './constants';

import { connect } from 'react-redux';

import { produce } from 'immer';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function TaskList({ tasks, emptyMessage }) {
  return (
    <ScrollView style={styles.tasksWrapper}>
      {!tasks.length ? 
        <View style={styles.emptyView}>
          <Text style={styles.emptyText}>{emptyMessage}</Text> 
        </View>
        :
        <View>
          { tasks.map(task => <Task key={task.id} id={task.id} text={task.text} isCompleted={task.isCompleted} />) }
        </View>
      }
    </ScrollView>
  )
}

const Tab = createMaterialTopTabNavigator();

const tabTheme = produce(DefaultTheme, draft => {
  draft.colors.primary = themeColor
})

function Todo({ tasks }) {
  const all = tasks;
  const toDo = tasks.filter(task => !task.isCompleted);
  const done = tasks.filter(task => task.isCompleted);

  return (
    <View style={styles.container}>
        <NavigationContainer theme={tabTheme}>
          <Tab.Navigator>
            <Tab.Screen 
              name="All" options={{ tabBarLabel: `All(${all.length})` }} 
              children={() => <TaskList tasks={all} emptyMessage={'There is no tasks, please add some! 👇'}/>} />
            <Tab.Screen 
              name="To do" options={{ tabBarLabel: `To Do(${toDo.length})` }} 
              children={() => <TaskList tasks={toDo} emptyMessage={'There is nothing to do 🥳'}/>} />
            <Tab.Screen name="Done" 
              options={{ tabBarLabel: `Done(${done.length})` }} 
              children={() => <TaskList tasks={done}  emptyMessage={'Nothing is completed, you can do it 💪'}/>} />
          </Tab.Navigator>
        </NavigationContainer> 
      <NewTask />
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasksReducer.tasks,
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  emptyView: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    height: '200%',
    maxWidth: '80%'
  },
  emptyText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default connect(mapStateToProps, null)(Todo);