import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-marvellous-label',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './marvellous-label.component.html',
  styleUrl: './marvellous-label.component.css'
})

export class MarvellousLabelComponent 
{
    public Name : string = "";
}
