import { Component } from '@angular/core';
import { ThreeModelComponent } from "./three-model/three-model.component";
import { CardlistComponent } from "./cardlist/cardlist.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ThreeModelComponent, CardlistComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
