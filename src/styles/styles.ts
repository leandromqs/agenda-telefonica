import styled, { createGlobalStyle } from 'styled-components'
import { IMaskInput } from 'react-imask'
import variaveis from './variaveis'

export const GlobalStyle = createGlobalStyle`
 *{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
  list-style: none;
 }

 body{
  background-color: ${variaveis.bg};
 }
`

export const ContainerMain = styled.main`
  display: grid;
  grid-template-columns: 220px auto;
`

export const Botao = styled.button`
  background-color: ${variaveis.laranja2};
  color: ${variaveis.laranja};
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
`

export const InputNumero = styled(IMaskInput)`
  display: block;
  padding: 8px;
  background-color: transparent;
  margin-bottom: 8px;
  border: none;
  border-bottom: 1px solid ${variaveis.stroke};
  color: ${variaveis.branco};

  &:focus {
    outline: none;
    border-bottom: 1px solid ${variaveis.branco};
  }
`
