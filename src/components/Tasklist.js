import React from 'react';

export const Title = ({ todoCount }) => {
    return (
        <div>
            <div class="title-cont">
                <h3>Number of tasks ({todoCount})</h3>
            </div>
        </div>
    );
}

export const TodoForm = ({ addTodo }) => {
    let input;

    return (
        <div class="form">
            <form onSubmit={(e) => {
                e.preventDefault();
                addTodo(input.value);
                input.value = '';
            }}>
                <input className="form-control col-md-12" ref={node => {
                    input = node;
                }} />
                <br />
            </form>
        </div>
    );
};

const Todo = ({ todo, remove }) => {
    // Each task
    return (
     <div class="button"><button id="btn-1" href="#" className="list-group-item" onClick={() => { remove(todo.id) }}>{todo.text}</button></div>);
}

export const TodoList = ({ todos, remove }) => {
    // Map through the tasks
    const todoNode = todos.map((todo) => {
        return (<Todo todo={todo} key={todo.id} remove={remove} />)
    });
    return (<div className="list-group" style={{ marginTop: '30px' }}>{todoNode}</div>);
}

