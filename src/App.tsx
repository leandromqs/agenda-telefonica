import BarraLateral from './containers/BarraLateral'
import ListaContatos from './containers/ListaContatos'
import { GlobalStyle, ContainerMain } from './styles/styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <ContainerMain>
        <BarraLateral />
        <ListaContatos />
      </ContainerMain>
    </>
  )
}

export default App
