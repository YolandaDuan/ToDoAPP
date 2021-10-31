import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';
import NewTask from './components/NewTask';
import { connect } from 'react-redux';

function Todo({ tasks }) {
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.title}>
          Tasks Management
        </Text>
        <View style={styles.tasksList}>
          { tasks.map(task => <Task text={task.text} />) }
        </View>
      </View>

      <NewTask />
    
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasksReducer.tasks,
  }
}

export default connect(mapStateToProps, null)(Todo);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 20
  }
});
