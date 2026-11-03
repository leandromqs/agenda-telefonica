import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

type Props = {
  ativo: boolean
}

export const Card = styled.div<Props>`
  display: flex;
  align-items: center;
  padding: 8px;
  margin-bottom: 8px;
  font-weight: bold;
  color: ${(props) => (props.ativo ? variaveis.laranja : variaveis.branco)};
  border: 2px solid
    ${(props) => (props.ativo ? variaveis.laranja : variaveis.branco)};
  border-radius: 8px;
  cursor: pointer;

  span {
    margin-left: 8px;
  }
`
