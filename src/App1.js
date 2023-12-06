
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import UserList from './UserList';
import App from './App';
import NavBar from './Navbar';

function App1() {

  return (

    <Router>
      <div>
        <NavBar/>
        
        <Routes>
          <Route path="/form" element={<TodoForm />} />
          <Route path="/TodoList" element={<TodoList />} />  
          <Route path="/users" element={<UserList />} />
          <Route path="/" element={<App />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App1;