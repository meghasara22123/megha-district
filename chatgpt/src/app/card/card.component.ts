import { Component } from '@angular/core';
import { district } from 'src/assets/district';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
data=district;
}
