import TodoItem from "./TodoItem/TodoItem";

import { useStoreon } from "storeon/react";
import{todo} from '../../../intefaces/todo'
import styles from '../../../../../styles/Home.module.scss'

function TodoList() {

  
  const {todos}=useStoreon('todos');
  console.log(todos)
  if (todos.length > 0) {
    return (
      <ul className={styles.todoList}>
        {todos.map((todo:todo, index:number) => {
          return <TodoItem todo={todo} index={index} key={todo.id} />;
        })}
      </ul>
    );
  }
 
  return <h2 className="title">No tasks to display</h2>;
}

export default TodoList;