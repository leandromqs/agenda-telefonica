import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Botao } from '../../styles/styles'

export const CardContato = styled.div`
  background-color: ${variaveis.bgLateral};
  border: 2px solid ${variaveis.stroke};
  border-radius: 16px;
  padding: 16px;
`
export const HeadContato = styled.div`
  display: flex;
  justify-content: space-between;
  h2 {
    color: ${variaveis.laranja};
  }

  margin-bottom: 16px;
`

export const CategoriaContato = styled.span`
  background-color: #393939;
  padding: 4px 8px;
  color: ${variaveis.branco};
  border-radius: 16px;
`

export const CamposContato = styled.div`
  color: ${variaveis.branco};
  p {
    display: block;
  }

  margin: 16px 0;
`

export const ActionBar = styled.div`
  border-top: 2px solid ${variaveis.stroke};
  padding-top: 16px;
`

export const BotaoEditar = styled(Botao)`
  margin-right: 16px;
`

export const BotaoCancelar = styled(Botao)`
  background-color: ${variaveis.vermelho2};
  color: ${variaveis.vermelho};
`
