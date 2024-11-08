import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  openModel()
  {
      const empModel = document.getElementById('myModal');
      if(empModel != null)
      {
        empModel.style.display = 'block'
      }
  }
}
