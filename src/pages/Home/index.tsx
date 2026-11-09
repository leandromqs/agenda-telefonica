import BarraLateral from '../../containers/BarraLateral'
import ListaContatos from '../../containers/ListaContatos'
import { ContainerMain } from '../../styles/styles'

const Home = () => {
  return (
    <ContainerMain>
      <BarraLateral />
      <ListaContatos />
    </ContainerMain>
  )
}

export default Home
