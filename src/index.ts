// use TodoList from './components/TodoList';
import TodoCollection from "./TodoCollection";
import TodoItem from "./TodoItem";
import { data } from "./data";

const sampleTodos: TodoItem[] = data.map((item) => new TodoItem(item.id, item.task, item.complete));

const myTodoCollection = new TodoCollection("my todo list", sampleTodos);

myTodoCollection.addTodo("write");
myTodoCollection.addTodo("Sleeping");
myTodoCollection.addTodo("dancing");

myTodoCollection.markComplete(3, true);

console.log(`${myTodoCollection.userName}`);
myTodoCollection.todoItems.forEach((item) => item.printDetails());
