import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-one-way',
  templateUrl: './one-way.component.html',
  styleUrls: ['./one-way.component.css']
})
export class OneWayComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  formoneWay(){
    this.route.navigate(["/form1way"])
  }
}
