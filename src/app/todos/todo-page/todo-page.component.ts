import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { appState } from 'src/app/app.reducer';
import { toggleAll } from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  completado = false;

  constructor(private store: Store<appState>) { }

  ngOnInit(): void {
  }

  toggleAll(){
    this.completado = !this.completado;
    this.store.dispatch(toggleAll({completado: this.completado}))
  }

}