import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-material-example',
    templateUrl: './material-example.component.html',
    styleUrls: ['./material-example.component.scss'],
    standalone: true,
    imports: [MatButtonModule, MatDividerModule, MatIconModule, MatFormFieldModule, MatInputModule]
})
export class MaterialExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
