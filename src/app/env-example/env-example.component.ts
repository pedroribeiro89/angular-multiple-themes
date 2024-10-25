import { Component, OnInit } from '@angular/core';
import {environment} from "../../environments/environment";
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-env-example',
    templateUrl: './env-example.component.html',
    styleUrls: ['./env-example.component.scss'],
    standalone: true,
    imports: [MatButtonModule]
})
export class EnvExampleComponent implements OnInit {

  public contextId = environment.contextId
  constructor() { }

  ngOnInit(): void {

  }

  btnAction() {
    environment.someAction(` Requests on: ${environment.apiUrl}`);
  }

}
