import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';

//フィルタリング状態でTodoの絞込
const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed);
    }
};

//StateをViewのプロパティに落とし込む
const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    };
};

//ViewからStateにイベントを伝える
const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            //ActionCreatorからAction取得してStoreに渡す
            dispatch(toggleTodo(id))
        }
    };
};

//つなぎこみ
const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
) (TodoList);

export default VisibleTodoList;
