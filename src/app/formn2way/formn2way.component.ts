import { Component, OnInit } from '@angular/core';
import { DocumentReference } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import Sensor from '../Model/sensors';
import { ServerServiceService } from '../services/server-service.service';

@Component({
  selector: 'app-formn2way',
  templateUrl: './formn2way.component.html',
  styleUrls: ['./formn2way.component.css']
})
export class Formn2wayComponent implements OnInit {

  sensor_traffic="crowded";
  sensor_status = true;

  constructor(private serverService :ServerServiceService , private route :Router) { }

  ngOnInit(): void {
  }



  sendtofirebase(){
    let sensor = new Sensor()
    sensor.sensor_traffic =this.sensor_traffic
    sensor.sensor_status = this.sensor_status

   this.serverService.update1(sensor)

}
Veiw(){}
Twoway(){
  this.route.navigate(["/twoWay"])
}


}
