import { Component, OnInit } from '@angular/core';
import { DocumentReference } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import Sensor from '../Model/sensors';
import { ServerServiceService } from '../services/server-service.service';

@Component({
  selector: 'app-form1way',
  templateUrl: './form1way.component.html',
  styleUrls: ['./form1way.component.css']
})
export class Form1wayComponent implements OnInit {

    sensor_traffic="crowded";
    sensor_status = true;
  
  constructor(private serverService :ServerServiceService, private route :Router ) { }

  ngOnInit(): void {
  }

  
  sendtofirebase(){
    let sensor = new Sensor()
    sensor.sensor_traffic =this.sensor_traffic
    sensor.sensor_status = this.sensor_status

    /* this.serverService.create(sensor).then( ()=>{
     console.log("successful")
    }
    
    
    
    ); */

    this.serverService.update(sensor)
  }

  Veiw(){}


  oneway(){
     this.route.navigate(["/oneWay"])
  }
  
}
