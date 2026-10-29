import { Provider } from 'react-redux'
import BarraLateral from './containers/BarraLateral'
import ListaContatos from './containers/ListaContatos'
import { GlobalStyle, ContainerMain } from './styles/styles'
import store from './store'

function App() {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <ContainerMain>
          <BarraLateral />
          <ListaContatos />
        </ContainerMain>
      </Provider>
    </>
  )
}

export default App
