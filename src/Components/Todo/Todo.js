import React from 'react';

class Todo extends React.Component {
	constructor(props) {
	super(props);
	this.state = {
		checked: false,

		
	}
	}

	render() {
		return(
			
		<li>
			<input type="checkbox"/>
			<button>delete</button>
			<span>{this.props.todo.text}</span>
		</li>
		
	);}

}

export default Todo;
