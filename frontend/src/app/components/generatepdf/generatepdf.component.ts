import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {NgxPrintModule} from 'ngx-print'; 
@Component({
  selector: 'app-generatepdf',
  standalone: true,
  imports: [CommonModule,NgxPrintModule],
  templateUrl: './generatepdf.component.html',
  styleUrls: ['./generatepdf.component.css']
})
export class GeneratepdfComponent {
  userDetails = {
    empId : 1,
    f_name : 'Rajanandini',
    l_name : "Tiwari",
    designation : "software engineer",
    address : "paywisee"
  }

  salaryDetails = {
    basic : "dummy",
    hra : "dum",
    allowances : "dum",
    leaveDeduction : "uh oh"
  }


}