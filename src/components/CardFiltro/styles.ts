import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Card = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  margin-bottom: 8px;
  font-weight: bold;
  color: ${variaveis.branco};
  border: 2px solid ${variaveis.branco};
  border-radius: 8px;
  cursor: pointer;

  span {
    margin-left: 8px;
  }
`
