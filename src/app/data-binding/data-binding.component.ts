import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
nome: String = "Fulano"
url: String ="data:image/jpeg;base64,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"
esconderTexto: boolean = true;
getValor() {
  return 1;
}


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

