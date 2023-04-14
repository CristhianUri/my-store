import { Component } from '@angular/core';
import { Product } from './model/product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-store-5b';

  imgParent='';

  showImg =true;

  onLoaded(img:String){
    console.log('log padre',img);
  }
  toggleImg(){
    this.showImg = !this.showImg;
  }

}
