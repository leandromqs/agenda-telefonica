import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
import * as enums from '../../utils/enums/Contato'

type contatoState = {
  itens: Contato[]
}

const initialState: contatoState = {
  itens: [
    {
      nome: 'Leandro',
      tipo: enums.Propriedade.AMIGOS,
      numero: '88888888',
      email: 'adasdas@gmail.com',
      id: 1
    },
    {
      nome: 'Kelvin',
      tipo: enums.Propriedade.FAMÍLIA,
      numero: '88888888',
      email: 'adasdas@gmail.com',
      id: 2
    },
    {
      nome: 'Tutu',
      tipo: enums.Propriedade.AMIGOS,
      numero: '88888888',
      email: 'adasdas@gmail.com',
      id: 3
    }
  ]
}

const contatoSlice = createSlice({
  name: 'Contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((item) => item.id != action.payload)
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexContato = state.itens.findIndex(
        (item) => item.id === action.payload.id
      )
      if (indexContato >= 0) {
        state.itens[indexContato] = action.payload
      }
    }
  }
})

export const { remover, editar } = contatoSlice.actions
export default contatoSlice.reducer
