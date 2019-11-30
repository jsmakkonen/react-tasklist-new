import React, { Component } from 'react';
import { Title, TodoForm, TodoList } from './Tasklist';
import axios from 'axios';

// Container
//window.id = 0;

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        this.apiUrl = 'https://57b1924b46b57d1100a3c3f8.mockapi.io/api/todos'
    }

    // Lifecycle
    componentDidMount() {
        // Make HTTP request
        axios.get(this.apiUrl)
            .then((res) => {
                this.setState({ data: res.data });
            });
    }

    addTodo(val) {
        const todo = { text: val }

        axios.post(this.apiUrl, todo).then((res) => {
            this.state.data.push(res.data);
            this.setState({ data: this.state.data });
        });
    }

    handleRemove(id) {
        const remainder = this.state.data.filter((todo) => {
            if (todo.id !== id) return todo
        });

        axios.delete(this.apiUrl+'/'+id).then((res) => {
            this.setState({ data: remainder });
        })
    }

    render() {
        return (
            <div class="container">
                <Title todoCount={this.state.data.length}/>
                <TodoForm addTodo={this.addTodo.bind(this)} />
                <TodoList
                    todos={this.state.data}
                    remove={this.handleRemove.bind(this)}
                />
            </div>
        );
    }
}

export default TodoApp;