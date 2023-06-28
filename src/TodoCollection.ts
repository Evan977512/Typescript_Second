import TodoItem from "./TodoItem";

class TodoCollection {
  private nextId: number = 1;

  constructor(public userName: string, public todoItems: TodoItem[] = []) {}

  /**
   *
   * @param id id of TodoItem
   * @returns relevant TodoItem id
   */
  getTodoById(id: number): TodoItem | undefined {
    return this.todoItems.find((item) => item.id === id);
  }

  /**
   *
   * @param task task of TodoItem
   * @returns nextId of TodoItem
   */
  addTodo(task: string): number {
    while (this.getTodoById(this.nextId)) {
      this.nextId++;
    }
    this.todoItems.push(new TodoItem(this.nextId, task));
    return this.nextId;
  }

  /**
   *
   * @param id id of TodoItem
   * @param complete complete of TodoItem
   */
  markComplete(id: number, complete: boolean): void {
    const todoItem = this.getTodoById(id);
    if (todoItem) {
      todoItem.complete = complete;
    }
  }
}

export default TodoCollection;
