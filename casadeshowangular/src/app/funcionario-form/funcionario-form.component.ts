import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent {
  ultimoId = 0;
  nome = 'Leandro';
  adicionado = false;
  @Output() funcionarioAdicionado = new EventEmitter();

  adicionar() {
    this.adicionado=true;

    const funcionario = {
      id: ++this.ultimoId,
      nome: this.nome
    
    };

    this.funcionarioAdicionado.emit(funcionario);
  }

}
