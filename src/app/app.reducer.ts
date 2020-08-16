import { Todo } from './todos/models/todo.model'
import { ActionReducerMap } from '@ngrx/store'
import { todoReducer } from './todos/todo.reducer'
import { filtrosValidos } from './filtro/filtro.actions'
import { filtroReducer } from './filtro/filtro.reducer'


export interface appState {
    todos: Todo[],
    filtro: filtrosValidos
}

export const appReducers: ActionReducerMap<appState> = {
    todos: todoReducer,
    filtro: filtroReducer
}