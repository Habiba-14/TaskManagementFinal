import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-taskmanagement',
  templateUrl: './taskmanagement.component.html',
  styleUrl: './taskmanagement.component.css'
})
export class TaskmanagementComponent {
  taskArray = [{ taskName: 'Brush teeth',taskDescription:'kalamkalam', taskDueDate:new Date(), isCompleted: false , isEditable: false }];
  onSubmit(form:NgForm){
    console.log(form);
    this.taskArray.push({
      taskName: form.controls['task'].value,
      taskDescription:form.controls['description'].value,
      taskDueDate:form.controls['date'].value,
      isCompleted: false,
      isEditable: false
    })

    form.reset();
  }

  onDelete(index: number) {
    console.log(index);

    this.taskArray.splice(index, 1);
  }

  onCheck(index: number) {
    console.log(this.taskArray);
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  }

  onEdit(index:number)
  {
    this.taskArray[index].isEditable = true;
  }

  onSave(index: number, newtask: string, newdescription:string, newdate:string) 
  {
    this.taskArray[index].taskName = newtask;
    this.taskArray[index].taskDescription=newdescription;
    this.taskArray[index].taskDueDate=new Date(newdate);
    this.taskArray[index].isEditable = false;
  }

}

