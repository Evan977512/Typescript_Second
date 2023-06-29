// import * as inquirer from "inquirer";
import TodoCollection from "../service/TodoCollection";
import TodoItem from "../model/TodoItem";
import inquirer from "inquirer";
import { data } from "../data";
import { Commands } from "../model/Commands";

class TodoConsole {
  private todoCollection: TodoCollection;

  private showCompleted: boolean;

  constructor() {
    this.showCompleted = true;
    const sampleTodos: TodoItem[] = data.map((item) => new TodoItem(item.id, item.task, item.complete));

    this.todoCollection = new TodoCollection("My Todo LIST", sampleTodos);
  }

  displayTodoList(): void {
    console.log(
      `=======${this.todoCollection.userName}======` + `(${this.todoCollection.getItemCounts().incomplete} items todo)`
    );
    this.todoCollection.getTodoItems(this.showCompleted).forEach((item) => item.printDetails());
  }

  /**
   * promptUser -> 사용자에게 명령을 입력받는 메서드
   */
  promptUser(): void {
    console.clear();
    this.displayTodoList();

    let prompt = inquirer.createPromptModule();

    // inquirer is a library that provides a set of common interactive command line user interfaces.
    inquirer
      .prompt({
        type: "list",
        name: "command",
        message: "Choose option",
        choices: Object.values(Commands),
      })
      .then((answers) => {
        switch (answers["command"]) {
          case Commands.Toggle:
            this.showCompleted = !this.showCompleted;
            this.promptUser();
            break;
          case Commands.Add:
            this.promptAdd();
            break;
        }
      });
  }

  /**
   * promptAdd -> methods that prompts the user to add a new task
   */
  promptAdd(): void {
    console.clear();
    inquirer
      .prompt({
        type: "input",
        name: "add",
        message: "Enter task: ",
      })
      .then((answers) => {
        if (answers["add"] !== "") {
          this.todoCollection.addTodo(answers["add"]);
        }
        this.promptUser();
      });
  }
}

export default TodoConsole;
