import { types } from "../actionTypes";

const initialState = {
    tasks: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case types.new: {
            const  { id, text } = action.payload;
            return {
                ...state,
                tasks: [...state.tasks, {id, text, isComplete: false}]   
            };
        }
        case types.delete: {
            const { id } = action.payload;
            return  {
                ...state,
                tasks: state.tasks.filter((task) => task.id != id)
            };
        }
        case types.toggleComplete: {
            const { id } = action.payload;
            const task = state.tasks.find((task) => task.id == id);
            const taskIndex = state.tasks.findIndex((task) => task.id == id);
            const newList = [...state.tasks];
            newList.splice(taskIndex, 1, {...task, isComplete: !task.isComplete});

            return  {
                ...state,
                tasks: newList
            };
        }
        default: 
            return state;
    }
    
}
