import { Component, Input, Output,EventEmitter,OnInit,OnChanges,AfterViewChecked,OnDestroy, SimpleChanges } from '@angular/core';
import {SimpleChange} from '@angular/core'
@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges,AfterViewChecked,OnDestroy {
  img: String ='';

  @Input('img')
  set changesImg(newImg: String){
    this.img = newImg;
    console.log('changes')
  }
  @Input() alt:String ='';
  @Output() loaded = new EventEmitter<String>();
  imagenDefault= 'https://images6.alphacoders.com/126/1262968.jpg';
/*   counter = 0;
  counterFn :number|undefined; */

  constructor(){

    //no async --- Once time
    console.log('Constructor','imgValue =>',this.img)
  }

  ngOnChanges(changes: SimpleChanges){
    //Before render
    //Change inputs
    console.log(changes)
    console.log('Onchanges','imgVaue=>',this.img)
  }
  ngOnInit(): void {
    //Before render
    // Asyng -- Fetch --once time
    // console.log('OnInit', 'imgValue =>', this.img)
    // this.counterFn =window.setInterval(()=>{
    // this.counter +=1;
    // console.log('Run counter');
    // },1000);
  }
  ngAfterViewChecked() {
      //After Render
      //handler children
      console.log('AfterViewCheck')
  }
  ngOnDestroy() {
    /*   //Only when delete
      console.log('OnDestroy');
      window.clearInterval(this.counterFn); */
  }

  imgError(){
    this.img= this.imagenDefault;
  }

  imgLoaded(){
    console.log('log hijo');
    this.loaded.emit(this.img);
  }
}
