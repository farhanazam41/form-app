import React from 'react'
import User from './user'

export default function UsersList({users,editUserHandler,deleteUser}) {

    const noUsers = users.map((u, i) => {
        return <User key={i} user={u} editUserHandler={editUserHandler} deleteUser={deleteUser}/>
    })
  return (
    <div>{!noUsers && 'No users in database'}
    {noUsers}
    </div>
  )
}
