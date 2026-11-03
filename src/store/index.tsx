import { configureStore } from '@reduxjs/toolkit'
import filtroReducer from './reducers/filtros'
import contatoReducer from './reducers/contato'

const store = configureStore({
  reducer: {
    filtros: filtroReducer,
    contatos: contatoReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export default store
