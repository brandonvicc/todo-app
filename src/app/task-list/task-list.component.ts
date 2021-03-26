import { Component, OnInit, Input } from '@angular/core';
import { Todo } from './../to-do';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  todos:Todo[] = [];
  newTodo:Todo | undefined
  task:string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos= [
      {task:'code a task manager', complete: false},
      {task:'learn some angular', complete: true}
  ]
  }

  addTodo(){
    if(this.task = ""){
      console.log('no input')
    } else{
      this.todos.push({
        task: this.task, complete:false
      })
      this.task = ""
    }
  }

  toggleTask(id:number){
    this.todos.map((v,i)=>{
      // i need the selected index to delete
      if(i === id){
        v.complete = !v.complete
      }
    })  
  }
  deleteTask(id:number){
      this.todos = this.todos.filter((v,i)=> i !== id)
    }
}
