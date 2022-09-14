import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-porperty-detail',
  templateUrl: './porperty-detail.component.html',
  styleUrls: ['./porperty-detail.component.css']
})
export class PorpertyDetailComponent implements OnInit {
public  propertyId: number;
  constructor(private route:ActivatedRoute, private router:Router) {this.propertyId = 10 }

  ngOnInit() {
   // const id='id';
 //   this.propertyId=Number(this.route.snapshot.params['id']);  // 'id' should be an exact match from routing const path:'property-detail/:id'
    this.propertyId=+(this.route.snapshot.params['id']); // same as Number fn
    this.route.params.subscribe(
      (params)=>{
        this.propertyId=+params['id'];
      }
    );
  }
onSelectNext(){
this.propertyId += 1;
this.router.navigate(['property-detail', this.propertyId] );   //, {relativeTo: this.route});
}

}
