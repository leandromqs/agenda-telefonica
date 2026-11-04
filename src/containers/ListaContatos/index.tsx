import { useDispatch, useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import * as styles from './styles'
import { alterarBusca } from '../../store/reducers/filtros'
import type { RootState } from '../../store'

const ListaContatos = () => {
  const { busca } = useSelector((state: RootState) => state.filtros)
  const { itens } = useSelector((state: RootState) => state.contatos)

  const dispatch = useDispatch()

  const filtrarTarefas = () => {
    let tarefasFiltradas = itens
    if (busca) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.nome.toLowerCase().search(busca.toLowerCase()) >= 0
      )
    } else {
      return itens
    }
    return tarefasFiltradas
  }

  return (
    <>
      <styles.DivListaContatos>
        <styles.Input
          type="text"
          placeholder="Buscar contato"
          value={busca}
          onChange={(evento) => dispatch(alterarBusca(evento.target.value))}
        />
        {busca}
        <ul>
          {filtrarTarefas().map((item) => (
            <li key={item.id}>
              <Contato
                nome={item.nome}
                tipo={item.tipo}
                favorito={item.favorito}
                numero={item.numero}
                email={item.email}
                id={item.id}
              />
            </li>
          ))}
        </ul>
      </styles.DivListaContatos>
    </>
  )
}

export default ListaContatos
