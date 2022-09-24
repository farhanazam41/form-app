import express from 'express';
import {getallUsers, getUserById, createUser, updateUser, deleteUser} from '../controllers/user-controller.js';



const router = express.Router();

router.get('/getallusers', getallUsers)

router.get('/:id', getUserById)

router.post('/adduser', createUser)

router.patch('/:id', updateUser)

router.delete('/:id', deleteUser)

export default router;
