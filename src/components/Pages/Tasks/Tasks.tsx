import TodoList from "./TodoList/TodoList";
import Form from "./Form/Form";
import styles from '../../../../styles/Home.module.scss';
import { useStoreon } from 'storeon/react';
import { useEffect } from 'react';
import { getTasks } from '../../storeOn/storeon';
export default function Tasks() {
    const { dispatch } = useStoreon();
    useEffect(() => {
        getTasks().then((res => {
            dispatch("setInit", res);
        }))
    }, []);
  return (
    <div className={styles.tasks}>
      <h2 className="title">TODO LIST</h2>
      <Form  />
      <TodoList  />
    </div>
  );
}