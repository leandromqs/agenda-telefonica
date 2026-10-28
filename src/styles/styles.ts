import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

export const GlobalStyle = createGlobalStyle`
 *{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
  list-style: none;
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
