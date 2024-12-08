import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cardlist',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './cardlist.component.html',
  styleUrl: './cardlist.component.css'
})
export class CardlistComponent {
cards= [
  {
    id:1,
    nombre:"nombre1",
    precio: 0.075,
    imgUrl:"/assets/img/mono1.png",
    description:'descripcion'
  },
  {
    id:2,
    nombre:"nombre2",
    precio: 0.087,
    imgUrl:"/assets/img/mono2.png",
    description:'descripcion'
  },
  {
    id:3,
    nombre:"nombre3",
    precio: 0.102,
    imgUrl:"/assets/img/mono3.png",
    description:'descripcion'
  },
  {
    id:4,
    nombre:"nombre4",
    precio: 0.763,
    imgUrl:"/assets/img/mono4.png",
    description:'descripcion'
  }
]
}
