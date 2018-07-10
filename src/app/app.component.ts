import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoInput: string = "";


  todos = [];

  checkOffTodo(todo) {
    // todo.isChecked = (todo.isChecked) ? false:true;
    todo.isChecked = !todo.isChecked;
   
  }


  createTodo() {
    let trimmedInput = this.todoInput.trim();
    
    if(trimmedInput !== "") {

      this.todos.push({
        isChecked: false,
        name: this.todoInput

      });

    }
    
    console.log(this.todos);
    //will create task
    this.todoInput = "";
  }
  

  editTodo(todo) {
    let index =  this.todos.indexOf(todo);
    console.log(index);


    let tempTodoDesc = this.todos[index].name;
    //will edit task
    console.log(todo);
    this.todos[index].name = prompt('Enter new task', this.todos[index].name);

    console.log(this.todos[index]);

    if(this.todos[index].name == null) {
      this.todos[index].name = tempTodoDesc;
    }

    // rename create input to edit input
  }


  deleteTodo(todo) {
    let index = this.todos.indexOf(todo);

    this.todos.splice(index, 1);
    //will delete task

  }

  deleteAll() {
    
    this.todos = [];
  }

 
}
