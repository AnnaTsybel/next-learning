import React from "react";
import { useStoreon } from "storeon/react";
import { todo } from "../../../../intefaces/todo";
import styles from '../../../../../../styles/Home.module.scss'

import {deleteTasks} from '../../../../storeOn/storeon'
interface myProps {
  todo: todo;
  index: number;
  classOfItem: []|string[];
}
export default function TodoItemUpdated({ todo, index, classOfItem}: myProps) {
  const { dispatch } = useStoreon("todos");
  function deleteTodo(element:any){
    deleteTasks(element) ;
    dispatch("dec", element.id)

   }

  return (
    <li className={styles.todoList__element.concat(' ',styles.todoList__element)}>
      <div className={styles.todoList__element__topSide}>
        <h3 className={styles.todoList__element__count}>{index + 1}</h3>
        <div className={styles.todoList__element__buttonsContainer}>
        <input
            type="checkbox"
            className={styles.todoList__element__buttonsContainer}
            onChange={() => dispatch("update", todo.id)}
            disabled={todo.updated}
            checked={todo.updated}
          />
          <input
            type="checkbox"
            className={styles.todoList__element__buttonsContainer}
            onChange={() => dispatch("change", todo.id)}
            checked={todo.completed}
          />
          <button
            className={styles.todoList__element__buttonsContainer}
            onClick={() => deleteTodo(todo) }
          >
            x
          </button>
         
        </div>
      </div>
      <h3 className={styles.todoList__element__title}>
        {todo.title}
      </h3>
      <p>{todo.description}</p>
    </li>
  );
}
