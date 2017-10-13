let nextTodoId = 0;

//todo追加
export const addTodo = (text) =>{
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    };
};
//todo完了
export const toggleTodo = (id) =>{
    return {
        type: 'TOGGLE_TODO',
        id
    };
};

//todoフィルタリング
export const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    };
};
