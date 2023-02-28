import React, {useState} from 'react';
import './App.css';

function App({ setTodos, todos}) {
  const [todo, setTodo] = useState([
    {id: 1,
      title: '리액트 공부하기',
      body: '리액트 기초를 공부해봅시다.',
      isDone: false
    },
    {id: 2,
      title: '리액트 공부하기',
      body: '리액트 기초를 공부해봅시다.',
      isDone: true}
  ]);

  const onChangeHandler = (event) => {
    setTodo(event.target.value);
  };

  const onSubmitHandler = () => {
    const newTodo = {
      id: todo.length + 1,
      title: todo.title,
      body: todo.body,
      isDone: false
    };
    setTodos([...todos, newTodo]);
  };

  const todoStyle = {
    width: '200px',
    height: '100px',
    border: '1px solid green',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const style = {
    padding: '100px',
    display: 'flex',
    gap: '12px'
  };

  const removeButtonHandler = (id) => {
    const remove = todo.filter((todo) => todo.id !== id);
    setTodo(remove);
  };

  return (
    const Layout = (props) => {
      return <div className='layout'>{props.children}</div>
    };
    
    function Header()  {
      return (
        <div>
          <div>My Todo List</div>
          <div>React</div>
        </div>
      );
    }
    
    <div>

      <div>
        제목: &nbsp;
        <input type='text' value={todo.title} onChange={(event) => onChangeHandler(event)}/>
        &nbsp;
        내용: &nbsp;
        <input type='text' value={todo.body} onChange={(event) => onChangeHandler(event)}/>

        <button onClick={onSubmitHandler}>추가</button>
      </div>
      
      <div style={style}>

          <div style={todoStyle}>
          {todo
          .filter(function (isDone) {
            return isDone === false;
          })
          .map(function (todo) {
            return <div key={todo.id}>
              {todo.title}{todo.body}
              </div>
          })}
          <button onClick = {() => removeButtonHandler(todo.id)}>삭제</button>
          <button>완료</button>
          </div>
          
          <div style={todoStyle}>
            {todo
            .filter(function (isDone) {
              return isDone === true;
            })
            .map(function (todo) {
              return <div key={todo.id}>
                {todo.title}{todo.body}
                </div>
            })}
            <button onClick = {() => removeButtonHandler(todo.id)}>삭제</button>
            <button>완료</button>
          </div>
        
      </div>

    </div>
  );
};

export default App