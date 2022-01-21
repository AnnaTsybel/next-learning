import { createStoreon, StoreonModule } from 'storeon';
import { StoreContext } from 'storeon/react';
import { posts } from '../src/components/intefaces/posts';
import { todo } from '../src/components/intefaces/todo';
import { valuesOfForm } from '../src/components/intefaces/valuesFormAddTodo';
import { valuesOfUpdatedForm } from '../src/components/intefaces/valuesFormUpdateTodo';
import { store } from '../src/components/storeOn/storeon';
import'../styles/globals.css';
export default function myApp({Component,pageProps}){
    
    return(
        <>
            <StoreContext.Provider value={store}>
        <Component {...pageProps}></Component>
      
        </StoreContext.Provider>
        </>
    )
}