import { Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
@ViewChild('myModal') model: ElementRef | undefined;

  employeeform: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder){}
  ngOnInit(): void {
    this.setFormState();
  }
  openModal() 
  {
      const empModal = document.getElementById('myModal');
      if(empModal != null)
      {
        empModal.style.display = 'block'
      }
  }
  closeModal(){
    if(this.model != null){
        this.model.nativeElement.style.display = 'none';
    }
  }
  onSubmit(){
    console.log(this.employeeform.value);
  }
  setFormState(){
    this.employeeform = this.fb.group({
      id: [0],
      name: ['',[Validators.required]],
      email: ['',[Validators.required]],
      mobile: ['',[Validators.required]],
      age: ['',[Validators.required]],
      salary: ['',[Validators.required]],
      status: [false,[Validators.required]],
    });
  }
}
