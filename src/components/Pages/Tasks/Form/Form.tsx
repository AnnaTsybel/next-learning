import { useState }from "react";
import { ChangeEvent } from 'react';
import RadioButtons from "./RadioButtons";
import { useStoreon } from "storeon/react";
import {valuesOfForm} from '../../../intefaces/valuesFormAddTodo';
import {setTasks} from '../../../storeOn/storeon'
function Form() {

  const categories:string[] = ["other", "sport", "education", "hobby"];
  
  const [valueOfCategorie, setValueOfCategorie] = useState("other");
  const [valueTitle, setValueTitle] = useState("");
  const [valueOfTextarea, setValueOfDescription] = useState("");
  const { dispatch,todos } = useStoreon("todos");


  function addTodo(element:any) {
    element.preventDefault();
    if (valueTitle.trim().length !== 0) {
      const values:valuesOfForm = {
        id:Math.random().toString(16).slice(2),
        title: valueTitle,
        categorie: valueOfCategorie,
        description: valueOfTextarea,
      };
      setTasks(values);
      dispatch("add", values);
      setValueTitle("");
      setValueOfDescription('');
    }
  }

  return (
    <form className="form-add" onSubmit={(e) => addTodo(e)}>
      <h2>Add Todo</h2>
      <input
        placeholder="Add what todo"
        value={valueTitle}
        onChange={(event:ChangeEvent<HTMLInputElement>) => setValueTitle(event.target.value)}
      ></input>
      <RadioButtons
        categories={categories}
        value={valueOfCategorie}
        setValues={setValueOfCategorie}
      ></RadioButtons>
      <textarea
        value={valueOfTextarea}
        onChange={(event:ChangeEvent<HTMLTextAreaElement>) => setValueOfDescription(event.target.value)}
      ></textarea>
      <button className="add-todo" type="submit">
        Add todo
      </button>
    </form>
  );
}
export default Form;
