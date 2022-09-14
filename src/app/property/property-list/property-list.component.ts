
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { Iproperty } from '../iProperty.interface';

import { PropertyCardComponent } from '../property-card/property-card/property-card.component';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  //properties: any;

  SellRent:number=1;
  properties: Array<Iproperty> ;
  // For Property initialization failed error you can add "strictPropertyInitialization": false to tsconfig.json file
  //  https://stackoverflow.com/questions/47848778/parameter-implicitly-has-an-any-type

  constructor(private housingService:HousingService,  private route:ActivatedRoute) { }



  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
         this.SellRent=2; // we r on rent else we are on base URL
  }
    this.housingService.getAllProperties(this.SellRent).subscribe(
      data=>  {
     this.properties= data;
      console.log(data);
      console.log(this.route.snapshot.url.toString());

       }, error=>{
        console.log('httperror');
        console.log(error);
       }
    );
   // this.http.get('data/properties.json').subscribe(
   //   data=>  {
    //    this.properties= data;
   //     console.log(data);
   //   }
   // );
  }




}
