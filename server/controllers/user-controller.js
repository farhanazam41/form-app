import { v4 as uuidv4 } from 'uuid';

let users  = [{
    name:'farhan',
    email:'farhan@yahoo.com',
    password:'123456',
    id:uuidv4()
}];


export const getallUsers = (req, res) => {
    res.status(200).json(users)
};

export const getUserById = (req, res) => {
    const {id} = req.params;
    const foundUser = users.find(user => user.id === id)
    res.status(200).json(foundUser)
};

export const createUser = (req, res) => {
    const user = req.body;
    users.push({...user, id : uuidv4()})
    res.status(200).json(`user with the name ${user.name} is created`)
};

export const updateUser = (req, res) => {
    const {id} = req.params;
    const{name, email} = req.body;
    const user = users.find(user => user.id === id)
    if(name) user.name = name;
    if(email) user.email = email;
    res.status(200).json(users)
};

export const deleteUser = (req, res) => {
    const {id} = req.params;
    users = users.filter(user => user.id !== id)
    res.status(200).json(users)
};