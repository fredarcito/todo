import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { appState } from 'src/app/app.reducer';
import { toggle, editar, borrar } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @ViewChild('inputFisico') txtInputFisico: ElementRef;


  @Input() todo: Todo;

  chkCompletado: FormControl;
  txtInput: FormControl;

  editando = false;

  constructor(private store: Store<appState>) { }

  ngOnInit(): void {

    this.chkCompletado = new FormControl(this.todo.completado)
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    this.chkCompletado.valueChanges.subscribe(value=>{
        this.store.dispatch(toggle({id: this.todo.id}))
    })

  }

  editar(){
    this.editando = true;

    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
    
  }

  terminarEdicion(){
    this.editando = false;
    this.store.dispatch(editar({id: this.todo.id, texto: this.txtInput.value}))
  }

  borrar(){
    this.store.dispatch(borrar({id: this.todo.id}))
  }

}
