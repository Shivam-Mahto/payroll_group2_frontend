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
  
}