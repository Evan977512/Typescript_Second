import { ItemCounts } from "../model/ItemCounts";
import TodoItem from "../model/TodoItem";

class TodoCollection {
  private nextId: number = 1;

  private itemMap: Map<number, TodoItem>; // Generic type

  constructor(public userName: string, todoItems: TodoItem[] = []) {
    this.itemMap = new Map<number, TodoItem>();
    todoItems.forEach((item) => this.itemMap.set(item.id, item));
  }

  /**
   *
   * @param id id of TodoItem
   * @returns relevant TodoItem id
   */
  getTodoById(id: number): TodoItem | undefined {
    return this.itemMap.get(id);
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
    this.itemMap.set(this.nextId, new TodoItem(this.nextId, task));
    return this.nextId;
  }

  /**
   *
   * @param includeComplete complete of TodoItem
   * inclumeComplete -> type: 모든 할일 목록 반환
   * includeComplete -> false: 완료 목록은 제외한 할일 목록 반환
   */
  getTodoItems(includeComplete: boolean): TodoItem[] {
    return [...this.itemMap.values()].filter((item) => includeComplete || !item.complete);
  }

  removeComplete(): void {
    this.itemMap.forEach((item) => {
      if (item.complete) {
        this.itemMap.delete(item.id);
      }
    });
  }

  // useing alias Item (ItemCounts가 alias이다)
  getItemCounts(): ItemCounts {
    return {
      total: this.itemMap.size,
      incomplete: this.getTodoItems(false).length,
    };
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

// tuple example
const x: [string, number] = ["tuple", 100];
// array example
const ydf: string[] = ["array", "string"];

export default TodoCollection;
