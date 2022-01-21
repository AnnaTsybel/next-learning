import React from "react";

import TodoItemUpdated from './TodoItemUpdated';
import TodoItemDefault from './TodoItemDefault';

import { todo } from "../../../../intefaces/todo";
import styles from '../../../../../../styles/Home.module.scss'

interface myProps {
  todo: todo;
  index: number;
}
function TodoItem({ index, todo }: myProps) {
  let classes=[];
  if(todo.completed){
    classes.push(styles.todoList__element__completed)
  }
  
  if (todo.updated) {
    return <TodoItemUpdated  todo={todo} index={index}/>
  }else{
    return <TodoItemDefault todo={todo} index={index} classOfItem={classes}/>
  }
}

export default TodoItem;
