import styled, { createGlobalStyle } from 'styled-components'
// import variaveis from './variaveis'

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
