import React, { PropTypes } from 'react';

//todoの実態は<li></li>
class Todo extends React.Component {
    render() {
        return (
            <li
                OnClick={this.props.onClick}
                style={{ textDecolation: this.props.completed ? 'line-through' : 'none' }}
            >
            { this.props.text }
            </li>
        );
    }
}

//制約の指定
Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo;
