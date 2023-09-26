import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  ProjectName: string = '';
  StartDate: Date | null = null;
  EndDate: Date | null = null;

  submitForm(form: any) {
    if (form.valid) {
      // Check if End Date is greater than Start Date
      if (this.StartDate && this.EndDate && this.StartDate > this.EndDate) {
        alert("End Date should be after Start Date.");
      } else {
        // Form is valid, you can handle the submission logic here
        console.log('Form submitted with values:', this.ProjectName, this.StartDate, this.EndDate);
      }
    }
  }

}
