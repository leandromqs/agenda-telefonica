import styled, { createGlobalStyle } from 'styled-components'
// import variaveis from './variaveis'

export const GlobalStyle = createGlobalStyle`
 *{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
 }
`

export const ContainerMain = styled.main`
  display: grid;
  grid-template-columns: 220px auto;
`
