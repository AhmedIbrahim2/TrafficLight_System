import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import Sensor from '../Model/sensors';

@Injectable({
  providedIn: 'root'
})
export class ServerServiceService {

   collectionRef: AngularFirestoreCollection<Sensor> ;

  constructor(private db:AngularFirestore ) {
    this.collectionRef = db.collection("/sensors")

   }

   create(sensor :Sensor){
     return this.collectionRef.add({...sensor})
   }

   create1(sensor :Sensor){
      this.collectionRef.doc("abc").set({...sensor})
   }
   
   update(sensor :Sensor){
    return this.collectionRef.doc("oneWaySensor").update({
      sensor_traffic:sensor.sensor_traffic ,
      sensor_status :sensor.sensor_status
    })
   }

   update1(sensor :Sensor){
    return this.collectionRef.doc("twoWaySensorN").update({
      sensor_traffic:sensor.sensor_traffic ,
      sensor_status :sensor.sensor_status
    })
   }

   update2(sensor :Sensor){
    return this.collectionRef.doc("twoWaySensorS").update({
      sensor_traffic:sensor.sensor_traffic ,
      sensor_status :sensor.sensor_status
    })
   }

   update3(sensor :Sensor){
    return this.collectionRef.doc("twoWaySensorW").update({
      sensor_traffic:sensor.sensor_traffic ,
      sensor_status :sensor.sensor_status
    })
   }


   update4(sensor :Sensor){
    return this.collectionRef.doc("twoWaySensorE").update({
      sensor_traffic:sensor.sensor_traffic ,
      sensor_status :sensor.sensor_status
    })
   }

   getAll(){
     return this.collectionRef
   }

}
