import { Component } from '@angular/core';

@Component({
  selector: 'app-datasystem',
  templateUrl: './datasystem.component.html',
  styleUrls: ['./datasystem.component.css']
})
export class DatasystemComponent {
 
  Name: string = "";
  EmpID: number | null = null;
  MobileNO: number | null = null;
  JoiningDate: string = "";
  Location: string = "";
  submitForm(employeeForm: any) {
    // Check if the form is valid
    if (employeeForm.valid) {
      // The form is valid, you can access form values using this.Name, this.EmpID, etc.
      console.log("Form submitted with the following values:");
      console.log("Name:", this.Name);
      console.log("EmpID:", this.EmpID);
      console.log("MobileNO:", this.MobileNO);
      console.log("Joining Date:", this.JoiningDate);
      console.log("Location:", this.Location);
      // You can perform further actions, such as sending the data to a server, here.
      // For now, let's just reset the form.
      employeeForm.reset();
    } else {
      // The form is not valid, show an error message or perform other actions.
      console.log("Form is not valid. Please correct the errors.");
    }
  }

 
}


