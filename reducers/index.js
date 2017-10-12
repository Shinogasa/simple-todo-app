import { combineReducers } from 'redux'

//1つ1つのtodoを処理するための関数
const todo =    (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };

        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return stare;
            }

            return Object.assign({}, state, {
                completed: !state.completed
            });

        default:
            return state;
    }
}
