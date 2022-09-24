import React from 'react'

export default function user({user, editUserHandler, deleteUser}) {
    const { name, email, number, age ,id} = user;

  return (
    <ul>
        <li>{name}</li>
        <li>{email}</li>
        <li>{number}</li>
        <li>{age}</li>
        <button onClick={() => editUserHandler(id)}>Edit</button>
        <button onClick={() => deleteUser(id)}>Delete</button>
    </ul>
  )
}
