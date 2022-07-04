import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent implements OnInit {
   var ="heelo";
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  ntwoway(){
    this.route.navigate(["/formn2way"])
  }

  stwoway(){
    this.route.navigate(["/forms2way"])
  }

  wtwoway(){
    this.route.navigate(["/formw2way"])
  }

  etwoway(){
    this.route.navigate(["/forme2way"])
  }
}
