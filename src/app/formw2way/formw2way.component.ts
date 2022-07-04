import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Sensor from '../Model/sensors';
import { ServerServiceService } from '../services/server-service.service';

@Component({
  selector: 'app-formw2way',
  templateUrl: './formw2way.component.html',
  styleUrls: ['./formw2way.component.css']
})
export class Formw2wayComponent implements OnInit {
  
  sensor_traffic="crowded";
  sensor_status = true;
  constructor(private serverService :ServerServiceService , private route: Router) { }

  ngOnInit(): void {
  }


  sendtofirebase(){
    let sensor = new Sensor()
    sensor.sensor_traffic =this.sensor_traffic
    sensor.sensor_status = this.sensor_status

   this.serverService.update3(sensor)

}
Veiw(){}
Twoway(){
  this.route.navigate(["/twoWay"])
}
}
