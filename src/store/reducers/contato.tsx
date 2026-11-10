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
      tipo: enums.Propriedade.TRABALHO,
      favorito: false,
      numero: '(00) 00000-0000',
      email: 'Leandro@gmail.com',
      id: 1
    },
    {
      nome: 'Kelvin',
      tipo: enums.Propriedade.FAMÍLIA,
      favorito: false,
      numero: '(00) 00000-0000',
      email: 'Kelvin@gmail.com',
      id: 2
    },
    {
      nome: 'Tutu',
      tipo: enums.Propriedade.AMIGOS,
      favorito: false,
      numero: '(00) 00000-0000',
      email: 'Tutu@gmail.com',
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
    },
    favoritar: (state, action: PayloadAction<Contato>) => {
      const indexContato = state.itens.findIndex(
        (item) => item.id === action.payload.id
      )
      if (indexContato >= 0) {
        state.itens[indexContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLocaleLowerCase()
      )

      if (contatoExiste) {
        alert('Já existe um contato com esse nome.')
      } else if (action.payload.nome.length <= 2) {
        alert('Preencha o nome corretamente.')
      } else if (action.payload.numero.length < 10) {
        alert('Preencha o número corretamente.')
      } else if (action.payload.tipo === 'Todos') {
        alert('Selecione o tipo de contato.')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]
        const novoContato = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(novoContato)
        alert('Contato adicionado com sucesso!')
      }
    }
  }
})

export const { remover, editar, favoritar, cadastrar } = contatoSlice.actions
export default contatoSlice.reducer
