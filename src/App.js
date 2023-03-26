import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import TodoList from './Redux/componenet/TodoList';
import AddTodo from './Redux/componenet/AddTodo';

function App() {


  const alltodos = useSelector(state => state.TodoReducer.todos)
  console.log(alltodos)
  return (
    <div className="App">
      <header className="App-header">
       <AddTodo/>
       <TodoList alltodos={alltodos}></TodoList>
      
      </header>
    </div>
  );
}

export default App;
