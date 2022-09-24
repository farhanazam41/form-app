import './App.css';
import AddUserForm from './components/form/addUserForm';
import EditUserForm from './components/form/editUserForm';
import { useState } from 'react'
import UsersList from './components/users/usersList';

const initialState = [
  {
    id: '1',
    name: 'John',
    email: 'john@yahoo.com',
    password: '123456',
    number: '1234567890',
    age: '20'
  },
  {
    id: '2',
    name: 'Jane',
    email: 'jane@yahoo.com',
    password: '123456',
    number: '1234567890',
    age: '20'
  },
]

function App() {
  const [users, setUsers] = useState(initialState);
  const [editUser, setEditUser] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);


  const addUser = (user) => {
    
    const userExists = users.find(u => (u.id && u.name ) === (user.id && user.name));
    
    if(!userExists){
      setUsers([...users, user])
    }
    
  }
  
  const editUserHandler = (id) => {
    setEditUser(true);
    const clickedUser = users.find((u) => u.id === id);
    setCurrentUser(clickedUser);
  }

  const editedUser = (user) => {
    const updatedUsers = users.map((u) => {
      if (u.id === user.id) {
        return user
      }
      return u
    })
    setUsers(updatedUsers);
    setEditUser(false);
  }

  const deleteUser = (id) => {
    const updatedUsers = users.filter((u) => u.id !== id);
    setUsers(updatedUsers);
  }

  return (
    <div className="App">
      <header className="App-header">
        {!editUser && <AddUserForm addUser={addUser}/>}
        {editUser && <EditUserForm editedUser={editedUser} currentUser={currentUser}/>}
      </header>
      <UsersList editUserHandler={editUserHandler} users={users} deleteUser={deleteUser}/>
    </div>
  );
}

export default App;
