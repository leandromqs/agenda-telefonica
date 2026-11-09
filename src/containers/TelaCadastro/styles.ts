import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
  InputContato,
  CardContato,
  BotaoSalvar
} from '../../components/Contato/styles'
import variaveis from '../../styles/variaveis'

export const ContainerNovoContato = styled.div`
  min-height: 100vh;
  display: flex;
`
export const DivNovoContato = styled.div`
  align-items: center;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const InfoContato = styled(CardContato)``

export const InputContatoN = styled(InputContato)`
  width: 400px;
`

export const TituloContato = styled.h2`
  color: ${variaveis.laranja};
  margin-bottom: 24px;
`

export const DivRadius = styled.div`
  margin: 16px 0;
`

export const LabelContato = styled.label`
  margin-right: 24px;
  color: ${variaveis.branco};
`

export const BotaoCadastrar = styled(BotaoSalvar)`
  text-transform: uppercase;
  width: 100%;
  font-size: 16px;
  margin-top: 8px;
`

export const BotaoVoltar = styled(Link)`
  display: inline-block;
  background-color: ${variaveis.laranja2};
  color: ${variaveis.laranja};
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  padding: 8px;
  width: 100%;
  border-radius: 8px;
  font-size: 16px;
  margin-top: 8px;
`
