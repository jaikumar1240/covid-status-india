import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public router: Router,
  ) { }
  nationalSelected = true

  ngOnInit(): void {

  }
  toNational() {
    this.router.navigate(["/national"])
    this.nationalSelected = true
  }
  toState() {
    this.router.navigate(["/state"])
    this.nationalSelected = false
  }

}
