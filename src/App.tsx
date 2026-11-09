import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { GlobalStyle } from './styles/styles'
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
        <RouterProvider router={rotas} />
      </Provider>
    </>
  )
}

export default App
