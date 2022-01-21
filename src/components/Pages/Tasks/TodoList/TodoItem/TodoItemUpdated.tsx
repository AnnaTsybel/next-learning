import React, { useState, ChangeEvent } from "react";

import { useStoreon } from "storeon/react";
import { todo } from "../../../../intefaces/todo";
import {SyntheticEvent} from '../../../../intefaces/eventTarget';
import {valuesOfUpdatedForm} from '../../../../intefaces/valuesFormUpdateTodo'

import styles from '../../../../../../styles/Home.module.scss'
import {deleteTasks} from '../../../../storeOn/storeon'

interface myProps {
  todo: todo;
  index: number;
}
export default function TodoItemUpdated({ todo, index }: myProps) {
    function deleteTodo(element:any){
     deleteTasks(element) ;
     dispatch("dec", element.id)

    }

  const [valueOfDescription, setValueOfDescription] = useState(todo.description );
  const [valueTitle, setValueTitle] = useState(todo.title);
  function updatedTodo(el: SyntheticEvent) {
    el.preventDefault();
    const values:valuesOfUpdatedForm = {
      id: todo.id,
      title: valueTitle,
      description: valueOfDescription,
    };
    dispatch("updated", values);
  }
  if(todo.completed){
      todo.completed=false
  }
  const { dispatch } = useStoreon("todos");
  return (
    <li className={styles.todoList__element.concat(" ", "task-" + todo.categorie)}>
      <div className={styles.todoList__element__topSide}>
        <h3 className={styles.todoList__element__count}>{index + 1}</h3>
        <div className={styles.todoList__element__buttonsContainer}>
        <input
            type="checkbox"
            className="update-button"
            onChange={() => dispatch("update", todo.id)}
            checked={todo.updated}
            disabled={todo.updated}
          />
          <input
            type="checkbox"
            onChange={() => dispatch("change", todo.id)}
            disabled={true}
            checked={todo.completed}
          />
          <button
            className="delete-button"
            onClick={() =>deleteTodo(todo) }
          >
            x
          </button>
         
        </div>
      </div>
      <form onSubmit={(event: SyntheticEvent) => updatedTodo(event)} className='change-form'>
        <input
          type="text"
          value={valueTitle}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setValueTitle(event.target.value)
          }
        />
        <textarea
          value={valueOfDescription}
          onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
            setValueOfDescription(event.target.value)
          }
        />
        <button className="end-of-update" type="submit">
          Submit
        </button>
      </form>
    </li>
  );
}
