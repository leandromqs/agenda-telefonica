import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { GlobalStyle, ContainerMain } from './styles/styles'
import store from './store'
import Cadastro from './pages/Cadastro'
import Home from './pages/Home'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <Cadastro />
  }
])

function App() {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <ContainerMain>
          <RouterProvider router={rotas} />
        </ContainerMain>
      </Provider>
    </>
  )
}

export default App
