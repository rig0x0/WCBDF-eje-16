import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dados',
  imports: [],
  templateUrl: './dados.component.html',
  styleUrl: './dados.component.css'
})
export class DadosComponent {
  @Input() valor : string = "0"
}
