import { Component, OnInit, ViewChild } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';



@Component({
  selector: 'app-national-view',
  templateUrl: './national-view.component.html',
  styleUrls: ['./national-view.component.css']
})
export class NationalViewComponent implements OnInit {
 
  constructor(
    private client: ClientService
  ) {
  }

  ngOnInit(): void {
    if (Object.keys(this.client.completeData).length == 0) {
      this.client.getData();
    }
  }
 

}

