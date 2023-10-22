import { Component, OnInit, OnChanges ,Input ,Output , EventEmitter} from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { StaticProductService } from 'src/app/services/static-product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit , OnChanges{

  products : IProduct[] | null = null;

  @Input() categoryId : number = 1;

  @Output() total = new EventEmitter<number>;

  //filterdProducts : IProduct[];
  totalPrice = 0;
  quantUser = 1;


  constructor(private staticProduct : StaticProductService){

   // this.filterdProducts = this.products;

  }

  ngOnInit(): void {
    console.log('init');
    this.products = this.staticProduct.getAll();
  }


  ngOnChanges(){
   // this.filterdProducts = this.products.filter(x => x.categoryId == this.categoryId);
  }

  buy(prod:any ){

    if(this.quantUser <= prod.quantity && +this.quantUser > 0){
      prod.quantity -= this.quantUser;
      this.totalPrice += +prod.price * +this.quantUser;
      this.total.emit(this.totalPrice);
    }else{
      alert('Quantity Is Not Valid')
    }
   
   // console.log(this.totalPrice)
    console.log( this.quantUser)
  }

  changeValue(event:any){

    console.log(event.target.value);
    this.quantUser = +event.target.value;
  }

  getByCategoryId() : IProduct[] | undefined{
   let filteredProducts = this.staticProduct.getByCategoryId(this.categoryId);
   return filteredProducts? filteredProducts : undefined;
  }

  addProduct(product : IProduct){
    this.staticProduct.add(product);
  }

}
