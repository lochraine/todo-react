import React, { Component } from 'react';
import './App.css';
import Todo from './Components/Todo/Todo';

let id = 0;
class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [],

    }
  }

newTodo =() => {
  const text = prompt("new todo");

  this.setState({
    todos: [...this.state.todos, {text: text, id: id++, checked: false},],
  })
  
}



removeTodo(id) {
  this.setState({
    todos: this.state.todos.filter(todo => todo.id !== id)
  })
}

toggleTodo(id) {
  this.setState({
    todos: this.state.todos.map(todo => {
      if (todo.id !== id) return todo
      return {id: todo.id,
              text: todo.text,
              checked: !todo.checked}
    })
  })
}


  render() {
    return (
      <div>
      <div>Unchecked Todos: {this.state.todos.filter(todo => !todo.checked).length}</div>
      <button onClick={this.newTodo} type="button">new todo</button>
        <ul>
        {this.state.todos.map((todo) => (
          <Todo todo={todo}
           onDelete={() => this.removeTodo(todo.id)}
           toggleTodo={() => this.toggleTodo(todo.id)}
            />))}
        </ul>
          
          
      </div>
    )
  }
}

export default App;
