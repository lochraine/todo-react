import React, { Component } from 'react';
import './App.css';
import Todo from './Components/Todo/Todo';


class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [],

    }
  }

NewTodo = () => {
  const text = 'Hi'//document.prompt("new todo");
  this.setState({
    todos: [...this.state.todos, {text: text}],
  })
  
}
  render() {
    return (
      <div className="App">
      <button OnClick={this.NewTodo} type="button">New todo</button>
        <ul>
        {this.state.todos.map(todo => <Todo todo={todo} />)}
        </ul>
          
          
      </div>
    );
  }
}

export default App;
