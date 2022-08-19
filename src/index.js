import './styles.css'
import { Todo, TodoList } from './classes/index.js'

const todoList = new TodoList()

const tarea = new Todo('Aprender javascript')
const tarea2 = new Todo('Comprar figura de ironman')

todoList.nuevoTodo(tarea)
todoList.nuevoTodo(tarea2)

console.log(todoList)



