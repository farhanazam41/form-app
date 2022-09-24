import React, { useState, useEffect } from 'react'

export default function EditUserForm({currentUser, editedUser}) {

    useEffect(() => {
        setFormData({
            id: currentUser.id,
            name: currentUser.name,
            email: currentUser.email,
            password: currentUser.password,
            number: currentUser.number,
            age: currentUser.age
        })
    }, [currentUser])
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        number: '',
        age:'',
    })

    const handleName = (e) => {
        setFormData({
            ...formData,
            name: e.target.value
        })
    }

    const handleEmail = (e) => {
        setFormData({
            ...formData,
            email: e.target.value
        })
    }
    const handlePassword = (e) => {
        setFormData({
            ...formData,
            password: e.target.value
        })
    }
    const handleNumber = (e) => {  
        setFormData({
            ...formData,
            number: e.target.value
        })
    }

    const handleAge = (e) => {

        setFormData({
            ...formData,
            age: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        editedUser(formData)
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={formData.name} placeholder="Enter your name" onChange={handleName}/>
            <input type="email" value={formData.email} placeholder="Enter your email" onChange={handleEmail}/>
            <input type="password" value={formData.password} placeholder="Enter your password" onChange={handlePassword}/>
            <input type='text' value={formData.number} placeholder="Enter your phone number" onChange={handleNumber}/>
            <input type="text" value={formData.age} placeholder="Enter your age" onChange={handleAge} />
            <button type="submit">Edit</button>
        </form>
    </div>
  )
}
