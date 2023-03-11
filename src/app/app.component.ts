import { Component } from '@angular/core';
import { ClientService } from './services/client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private client: ClientService
  ){

  }
  title = 'covid-status';
  isLoading = this.client.isLoading; 

}
