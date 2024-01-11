import React, { useState } from "react";

const Home = () => {
	const [todos, setTodos] = useState(["Eat", "Make the bed"]);
	const [newTodo, setNewTodo] = useState("");

	const addTodo = (e) => {
		e.preventDefault();
		setTodos([...todos, newTodo]);
		setNewTodo("");
	};

	const removeTodo = (index) => {
		setTodos(todos.filter((_, todoIndex) => todoIndex !== index));
	};

	return (
		<div className="container">
			<h1>Todos</h1>
			<form onSubmit={addTodo}>
				<ul className="list-group">
					<li className="list-group-item"><input
						type="text"
						placeholder="What do you need to do?"
						value={newTodo}
						onChange={(e) => setNewTodo(e.target.value)}
					/>
						<button className="btnAdd" type="submit"></button>
					</li>
					{todos.map((todo, index) => (
						<li className="list-group-item" key={index}>
							{todo} <button className="btnRemove" onClick={() => removeTodo(index)}>X</button>
						</li>
					))}
					<li className="list-group-item">
						<p className="itemCounter">{todos.length} item left</p>
					</li>
				</ul>
			</form>
		</div>
	);
};

export default Home;

