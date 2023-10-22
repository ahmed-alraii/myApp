import { StaticProductService } from 'src/app/services/static-product.service';
import { Component, OnInit  } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  params:any = {};
  id : number | null = 0;
  product : IProduct | undefined  ;

  allIds : any[] = [];
  index = 0;

  constructor( private staticProductService : StaticProductService ,
     private activatedRoute: ActivatedRoute ,
     private router: Router, 
     private location: Location
     ){

    //router.navigate(['home']);

    activatedRoute.params.subscribe( (params : any) => {
      this.params.id = params.id;
    });

     this.id =  activatedRoute.snapshot.paramMap.get('id') as number | null;

    console.log(staticProductService.getById(this.id))
    this.product = staticProductService.getById(this.id)

    this.allIds = staticProductService.getAll()?.filter(x => x.id) as [];
    console.log(this.allIds);
     
  }

  ngOnInit(): void {
    
    console.log(this.product);
    
  }

   next(){

    // let id
    // if(this.id != null){

    //   if(this.id < this.allIds.length ){
    //     id = +this.id + 1;
    //     this.id = id;
    //   }
    
    // }

     // let prod = this.allIds.find(id => id == id );

  //  if(prod != null){
  //   this.product = this.staticProductService.getById(this.id)
  //   this.router.navigate(['orders' ,  this.id]);
  //  }


    if(this.index < this.allIds.length - 1 ){
      this.index++;
      this.id = this.allIds[this.index].id;
      console.log(this.id);
      this.product = this.staticProductService.getById(this.id)
      this.router.navigate(['/orders' ,  this.id]);
    }
   
    
 
    return null
  }


   prev(){

    // let id 

    // if(this.id != null){
      
    //   if( this.id > 1){
    //    id = +this.id - 1;
    //    this.id = id;
    //   }

    // }
    // let prod = this.allIds.find(id => id == id );
 
    // if(prod != null){
     
    //  this.product = this.staticProductService.getById(this.id)
    //  this.router.navigate(['orders' ,  this.id]);
    // }

    console.log(this.index );
    
    if(this.index > 0 ){
      this.index--;
      this.id = this.allIds[this.index].id;
      this.product = this.staticProductService.getById(this.id)
      this.router.navigate(['/orders' ,  this.id]);
    }
 
     return null
   }

   back(){
    this.location.back();
   }
}
