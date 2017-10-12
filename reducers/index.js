import { combineReducers } from 'redux'

//1つ1つのtodoを処理するための関数
const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };

        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state;
            }

            return Object.assign({}, state, {
                completed: !state.completed
            });

        default:
            return state;
    }
}

//複数のtodoを処理するための関数
const todos =(state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ];

        case 'TOGGLE_TODO':
            return state.map(t =>
                todo(t, action)
            );

        default:
            return state;
    }
}

//todoの表示状態を処理するための関数
const visibilityFilter = (state ='SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;

        default:
            return state;
    }
}

//上の関数をまとめて公開
const todoApp = combineReducers({
    todos,
    visibilityFilter
})
export default todoApp;
