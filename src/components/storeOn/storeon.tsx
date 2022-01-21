import { createStoreon, StoreonModule } from 'storeon';
import { posts as post } from '../intefaces/posts';
import { todo } from '../intefaces/todo';
import { valuesOfForm } from '../intefaces/valuesFormAddTodo';
import { valuesOfUpdatedForm } from '../intefaces/valuesFormUpdateTodo';

class Todos {
    public readonly id: string;
    public completed: boolean;
    public title: string;
    public categorie: string;
    public description: string;
    public updated: boolean;
    constructor(
      id: string,
      completed: boolean,
      title: string,
      categorie: string,
      description: string,
      updated: boolean
    ) {
      this.id = id;
      this.completed = completed;
      this.description = description;
      this.title = title;
      this.categorie = categorie;
      this.updated = updated;
    }
  }
  interface State {
    todos: todo[];
    posts: post[];
  }
  
  interface Events {
    setInit:any;
    dec: string;
    change: string;
    add: valuesOfForm;
    update: string;
    updated: valuesOfUpdatedForm;
    setInitPost:any;
    deletePosts:string;
    goToPost:string;
  }
  export async function getTasks(){
    const todoss= await fetch('http://localhost:4200/tasks',{
      method:'GET',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      }
    })
  
    const json=await todoss.json();
    return json;
  }
  
  export async function setTasks(form:any){
    const data={
      id:form.id,
      title:form.title,
      categorie:form.categorie,
      updated:false,
      completed:false,
      description:form.description
    }
    const todoss= await fetch('http://localhost:4200/tasks',{
      method:'POST',
      headers:{
        'Content-Type':'application/json;charset=utf-8'
      },
      body:JSON.stringify(data)
     
    })
    
    const to= todoss.text()
    return to;
  }
  export async function deleteTasks(element:any){
    const todoss=await fetch('http://localhost:4200/tasks/'+element.id,{
      method:'DELETE'
    })
    const to = await todoss.json()
    console.log(to)
    return to;
  }
  let todos: StoreonModule<State, Events> = (store) => {
    
      store.on("@init", () => ({ todos: [] }));
      store.on("setInit", (store, tds) => {
        return{todos: store.todos.length?tds:[...store.posts, ...tds] }
      })
     
    store.on("dec", (store, id) => {
      return { todos: store.todos.filter((todo) => todo.id !== id) };
    });
    store.on("change", (store, id) => {
      return {
        todos: store.todos.map((todo) => {
          if (todo.id === id) {
            todo.completed ? (todo.completed = false) : (todo.completed = true);
          }
          return todo;
        }),
      };
    });
    store.on("add", (store, values) => {
      const todo = new Todos(
        Math.random().toString(16).slice(2),
        false,
        values.title,
        values.categorie,
        values.description,
        false
      );
      return {
        todos: store.todos.concat([todo]),
      };
    });
    store.on("update", (store, id) => {
      return {
        todos: store.todos.map((todo) => {
          if (todo.id === id) {
            todo.updated ? (todo.updated = false) : (todo.updated = true);
          }
          return todo;
        }),
      };
    });
    store.on("updated", (store, values) => {
      return {
        todos: store.todos.map((todo) => {
          if (todo.id === values.id) {
            todo.updated = false;
            todo.title = values.title;
            todo.description = values.description;
          }
          return todo;
        }),
      };
    });
  };
export async function getPosts(){
    const postss= await fetch('http://localhost:4200/posts',{
      method:'GET',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      }
    })
    const json=await postss.json();
  return json;
}
export async function deletePosts(element:any){
  const postss=await fetch('http://localhost:4200/posts/'+element.id,{
    method:'DELETE'
  })
  const json = await postss.json()
  return json;
}
  
let posts: StoreonModule<State, Events> = (store) => {
    store.on("@init", () => ({ posts: [] }));
    store.on("setInitPost", (store, post) => ({ posts: store.posts.length?post:[...store.posts, ...post] }));
    store.on('deletePosts',(store,id)=>({posts: store.posts.filter((post) => post.id !== id) }))
    store.on('goToPost',(store,id)=>({posts: store.posts.filter((post) => post.id !== id) }))
};

  
  export const store = createStoreon<State, Events>([todos, posts]);