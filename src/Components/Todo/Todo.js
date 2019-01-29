import React from 'react';

const Todo = (props) => {
		return(	
		<li>
			<input onClick={props.toggleTodo} type="checkbox"/>
			<button onClick={props.onDelete}>delete</button>
			<span>{props.todo.text}</span>
		</li>
		
	);

}

export default Todo;
