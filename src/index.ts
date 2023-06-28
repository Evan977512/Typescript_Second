// use TodoList from './components/TodoList';
import TodoItem from "./TodoItem";

const data = [
  { id: 1, task: "shopping", complete: true },
  { id: 2, task: "coding", complete: false },
];

console.log("My Todo List");

for (let i = 0; i < data.length; i++) {
  let todoItem = new TodoItem(data[i].id, data[i].task, data[i].complete);
  todoItem.printDetails();
}
