class TodoItem {
  // public id: number; // private, public, protected
  // public task: string;
  // public complete: boolean;

  // 접근지정자(public, private, protected) can be assigned in the constructor ==> regares as a property
  constructor(public id: number, public task: string, public complete: boolean = false) {
    this.id = id;
    this.task = task;
    this.complete = complete;
  }

  // no return value ==> void
  printDetails(): void {
    console.log(`${this.id}\t${this.task}\t${this.complete ? "(complete)" : "\t(incomplete))"}`);
  }
}

export default TodoItem;
