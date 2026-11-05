import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Contato'

type FiltroState = {
  busca?: string
  propriedade:
    | enums.Propriedade.TODOS
    | enums.Propriedade.FAVORITO
    | enums.Propriedade.AMIGOS
    | enums.Propriedade.FAMÍLIA
    | enums.Propriedade.TRABALHO
}

const initialState: FiltroState = {
  busca: '',
  propriedade: enums.Propriedade.TODOS
}

const filtroSlice = createSlice({
  name: 'Filtros',
  initialState,
  reducers: {
    alterarBusca: (state, action: PayloadAction<string>) => {
      state.busca = action.payload
    },
    alterarFiltro: (state, action: PayloadAction<enums.Propriedade>) => {
      state.propriedade = action.payload
    }
  }
})

export const { alterarBusca, alterarFiltro } = filtroSlice.actions
export default filtroSlice.reducer
