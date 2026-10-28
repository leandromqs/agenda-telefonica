import Contato from '../../components/Contato'
import * as styles from './styles'

const ListaContatos = () => {
  return (
    <>
      <styles.DivListaContatos>
        <styles.Input type="text" placeholder="Buscar contato" />
        <ul>
          <li>
            <Contato />
          </li>
        </ul>
      </styles.DivListaContatos>
    </>
  )
}

export default ListaContatos
