import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Card = styled.div`
  color: ${variaveis.branco};
  border: 2px solid ${variaveis.branco};
  font-weight: bold;
  padding: 8px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  cursor: pointer;
  span {
    margin-left: 8px;
  }
  margin-bottom: 8px;
`
