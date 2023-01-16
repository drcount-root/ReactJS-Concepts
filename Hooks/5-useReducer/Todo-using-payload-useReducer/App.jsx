import React, { useState, useReducer } from "react";
import Todo from "./Todo";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

// reducer function takes two parameters -
// 1. Current State
// 2. action
// this action is we pass into dispatch function
const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
};
// whenever we call dispatch(), its going to get set to the action variable and then our current state is going to be in the state variable & reducer is going to return our new updated state

const newTodo = (name) => {
  return { id: Date.now(), name: name, complete: false };
};

export default function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  // useReducer() takes two different parameters
  // - 1. a reducer, which is a function that we perform on our state to get a new state
  // - 2. initial state value

  // useReducer() returns an array of 2 elements -
  // 1. state
  // 2. dispatch() function, a function which we call in order to update our state. This dispatch() func going to call the reducer() function.

  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  };
  // payload is an object which essentially contains all of the variable values we need to perform that action

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </form>

      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </React.Fragment>
  );
}
