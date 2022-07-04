import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Sensor from '../Model/sensors';
import { ServerServiceService } from '../services/server-service.service';

@Component({
  selector: 'app-forme2way',
  templateUrl: './forme2way.component.html',
  styleUrls: ['./forme2way.component.css']
})
export class Forme2wayComponent implements OnInit {
  sensor_traffic="crowded";
  sensor_status = true;
  constructor(private serverService :ServerServiceService , private route:Router) { }

  ngOnInit(): void {
  }


  sendtofirebase(){
    let sensor = new Sensor()
    sensor.sensor_traffic =this.sensor_traffic
    sensor.sensor_status = this.sensor_status

   this.serverService.update4(sensor)

}
Veiw(){}
Twoway(){
  this.route.navigate(["/twoWay"])
}
}

