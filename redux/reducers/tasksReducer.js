import { types } from "../actionTypes";
import { produce } from 'immer';

const initialState = {
    tasks: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case types.new: {
            const  { id, text } = action.payload;
            
            return produce(state, draft => {
                draft.tasks.push({id, text, isCompleted: false})
            });
        }
        case types.delete: {
            const { id } = action.payload;
            
            return produce(state, draft => {
                draft.tasks = draft.tasks.filter((task) => task.id !== id)
            });
        }
        case types.toggleComplete: {
            const { id } = action.payload;

            return produce(state, draft => {
                const task = draft.tasks.find((task) => task.id == id);
                task.isCompleted = !task.isCompleted; 
            })
        }
        default: 
            return state;
    }
    
}
