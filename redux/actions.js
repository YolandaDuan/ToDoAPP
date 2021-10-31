import { types } from "./actionTypes";

let newTaskID = 0;

export const addTask = (content) => ({
    type: types.new,
    payload: {
        id: ++newTaskID,
        text: content
    }
});

export const deleteTask = (id) => ({
    type: types.delete,
    payload: {
        id
    }
});

export const toggleComplete = (id) => ({
    type: types.toggleComplete,
    payload: {
        id
    }
});