import { Component, OnInit } from '@angular/core';
import { Product } from './../../model/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  constructor(){};
  ngOnInit() {

  };
  products : Product []=[
    {
      id:'1',
      name: 'El mejor juguete',
      imagen: './assets/imagen/toy.jpg',
      price: 565.00

    },
    {
      id:'2',
      name: 'coleccion album ',
      imagen: './assets/imagen/album.jpg',
      price: 340.00

    },
    {
      id:'3',
      name: 'bike casi nueva',
      imagen: './assets/imagen/bike.jpg',
      price: 1250.00

    },
    {
      id:'4',
      name: 'serie de libros',
      imagen: './assets/imagen/books.jpg',
      price: 800.00

    },
    {
      id:'5',
      name: 'Lentes para disfrutar en la playa',
      imagen: './assets/imagen/glasses.jpg',
      price: 100.00

    },
    {
      id:'6',
      name: 'casa de muñecas',
      imagen: './assets/imagen/house.jpg',
      price: 2300.00

    }

  ];
};
