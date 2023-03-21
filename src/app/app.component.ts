import { TesteService } from './teste.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nomes: String[]

  constructor(private testService: TesteService){
    this.nomes = testService.getNomes();

  }
}
