import React,{useState} from 'react'
import Todoform from './Todoform'
import Todo from './Todo';

function TodoListt() {
    const [todos,setTodos]=useState([]);

    const addTodo = todo =>{
        if (!todo.text){
         return 
        }
        const newTodos = [todo,...todos]

        setTodos(newTodos)
        // console.log(todo,...todos);
    }

    const updateTodo=(todoId,newValue) =>{
        if (!newValue.text){
            return 
           }

           setTodos(prev=>prev.map(item=>(item.id === todoId? newValue:item )))
    }

    const removeTodo= id =>{
        const removeArr=[...todos].filter(todo => todo.id !==id)

        setTodos(removeArr)
    };

    
    const completeTodo=id=>{
        let updatedTodos=todos.map(todo=>{
            if(todo.id===id){
               todo.isComplete=!todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos);
    }
  return (
    <div className='todo'>
      <h1>Hello Tumi,</h1><br/><h1>What's your plan for today?</h1>
      <Todoform onSubmit={addTodo}/>
      <Todo todos={todos} 
      completeTodo={completeTodo} 
      removeTodo={removeTodo}
      updateTodo={updateTodo}/>
      
    </div>
  )
}

export default TodoListt
