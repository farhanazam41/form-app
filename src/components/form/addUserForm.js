import React, { useState } from 'react';
import './form.css';

export default function AddUserForm({ addUser }) {

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
        const newUser = {
            ...formData, id : Math.floor(Math.random() * 1000)
        }
        const userEmpty =  formData.name === '' && formData.email === '' && formData.password === '' && formData.number === '' && formData.age === ''; 
        if(userEmpty) return
        addUser(newUser)
        setFormData({
            name: '',
            email: '',
            password: '',
            number: '',
            age:'',
        })
    }

  return (
    <div className='center'>
        <form className='form' onSubmit={handleSubmit}>
            <input type="text" value={formData.name} placeholder="Enter your name" onChange={handleName}/>
            <input type="email" value={formData.email} placeholder="Enter your email" onChange={handleEmail}/>
            <input type="password" value={formData.password} placeholder="Enter your password" onChange={handlePassword}/>
            <input type='text' value={formData.number} placeholder="Enter your phone number" onChange={handleNumber}/>
            <input type="text" value={formData.age} placeholder="Enter your age" onChange={handleAge} />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
