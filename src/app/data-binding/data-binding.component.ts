import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
valorDigitado: string = ""
isMouseOver: boolean = false;
clique(){
alert('ação do botão');
}
onKeyUp(event: KeyboardEvent){
this.valorDigitado = (<HTMLInputElement> event.target).value;
}
onMouseOver(){
this.isMouseOver = true;
}
onMouseOut(){
this.isMouseOver = false;
}
  ngOnInit(): void {
  }
}

