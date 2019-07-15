import express from 'express';
import todoController from '../todosControllers/todos';

const router = express.Router();

router.get('/api/v1/todos', todoController.getAllTodos);
router.get('/api/v1/todos/:id', todoController.getTodo);
router.post('/api/v1/todos', todoController.createTodo);
router.put('/api/v1/todos/:id', todoController.updateTodo);
router.delete('/api/v1/todos/:id', todoController.deleteTodo);

export default router;