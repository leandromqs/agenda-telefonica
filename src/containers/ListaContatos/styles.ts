import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const DivListaContatos = styled.div`
  background-color: ${variaveis.bg};
  padding: 40px;
  max-height: 100vh;
  overflow-y: scroll;
`

export const Input = styled.input`
  background-color: transparent;
  border: 2px solid ${variaveis.branco};
  border-radius: 24px;
  padding: 8px 16px;
  outline: none;
  color: ${variaveis.branco};
  margin-bottom: 16px;
`
