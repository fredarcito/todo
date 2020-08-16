import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { appState } from 'src/app/app.reducer';
import * as actions from 'src/app/filtro/filtro.actions';
import { limpiarCompletados } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroActual: actions.filtrosValidos = 'todos';
  filtros: actions.filtrosValidos[]= [ 'todos', 'completados','pendientes'];
  pendientes: number = 0;

  constructor(private store: Store <appState>) { }

  ngOnInit(): void {

    //this.store.select('filtro').subscribe(filtro => this.filtroActual = filtro );

    this.store.subscribe(store => {
      
      this.filtroActual = store.filtro;
      this.pendientes = store.todos.filter(todo => !todo.completado).length;

    });

  }

  cambiarFiltro(filtro: actions.filtrosValidos){
    this.store.dispatch(actions.setFiltro({filtro: filtro}))
  }

  limpiarTodo(){
    this.store.dispatch(limpiarCompletados());
  }

}
