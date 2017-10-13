import React from 'react';
import Footer from './Footer';
import AddTodo from import '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

//AppはTODO追加，TODO一覧，フィルタリングメニュー(Footer)からなる
class App extends React.Component {
    render() {
        return (
            <div>
                <AddTodo />
                <VisibleTodoList />
                <Footer />
            </div>
        );
    }
}

export default App;