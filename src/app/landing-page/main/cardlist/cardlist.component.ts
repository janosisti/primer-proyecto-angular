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
    precio: 999,
    imgUrl:"/assets/img/mono1.png",
    description:'descripcion'
  },
  {
    id:2,
    nombre:"nombre2",
    precio: 999,
    imgUrl:"https://img.freepik.com/free-vector/gorilla-head-monochrome-style_225004-463.jpg?t=st=1733494746~exp=1733498346~hmac=0f6afcc9ae5e975d395e535e965bfc0013256a5b07c41a6d178923eafb5ee0df&w=826",
    description:'descripcion'
  },
  {
    id:3,
    nombre:"nombre3",
    precio: 999,
    imgUrl:"https://img.freepik.com/free-vector/gorilla-head-monochrome-style_225004-463.jpg?t=st=1733494746~exp=1733498346~hmac=0f6afcc9ae5e975d395e535e965bfc0013256a5b07c41a6d178923eafb5ee0df&w=826",
    description:'descripcion'
  },
  {
    id:4,
    nombre:"nombre4",
    precio: 999,
    imgUrl:"https://img.freepik.com/free-vector/gorilla-head-monochrome-style_225004-463.jpg?t=st=1733494746~exp=1733498346~hmac=0f6afcc9ae5e975d395e535e965bfc0013256a5b07c41a6d178923eafb5ee0df&w=826",
    description:'descripcion'
  }
]
}
