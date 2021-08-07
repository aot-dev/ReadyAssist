import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  selectedCard:any;
  mainProducts: any;
  similarProducts: any;
  ratingArr:any = [];
  rating: number = 0;
  constructor(private homeService : HomeService) { 
    
  }

  ngOnInit(): void {
    this.ratingMake(5);
    this.homeService.getProducts().subscribe((data:any)=>{
      this.mainProducts = data.mainProducts;
      this.similarProducts = data.similarProducts;
      this.selectedCard = this.mainProducts[0];
      this.rating = this.selectedCard.rating;
    });
   
  };
  changeItem( i:number ) {
    this.selectedCard = this.mainProducts[i];
    this.rating = this.selectedCard.rating;
    
  }
  ratingMake(rating:number) {
    this.ratingArr = [];
    for (let index = 0; index < rating; index++) {
      this.ratingArr.push(index);
    }
  }
  showIcon(index:number, ratingId:number) {
    const rating = ratingId?ratingId:this.rating;
    if (rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }
}
