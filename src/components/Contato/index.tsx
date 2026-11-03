import { useDispatch } from 'react-redux'

import { Salad, Star } from 'lucide-react'
import * as styles from './styles'
import * as enums from '../../utils/enums/Contato'
import { remover } from '../../store/reducers/contato'
import { useState } from 'react'

type ContatoProsp = {
  nome: string
  tipo: enums.Propriedade
  numero: string
  email: string
  id: number
}

const Contato = ({ nome, tipo, numero, email, id }: ContatoProsp) => {
  const dispatch = useDispatch()
  const [editandoNumero, setEditandoNumero] = useState(numero)
  const [editandoEmail, setEditandoEmail] = useState(email)
  const [estaEditando, setEstaEditando] = useState(false)

  const cancelarOperacao = () => {
    setEstaEditando(false)
    setEditandoNumero(numero)
    setEditandoEmail(email)
  }

  return (
    <styles.CardContato>
      <styles.HeadContato>
        <h2>{nome}</h2>
        <Star fill="white" stroke="none" />
      </styles.HeadContato>
      <styles.CategoriaContato>{tipo}</styles.CategoriaContato>
      <styles.CamposContato>
        {estaEditando ? (
          <>
            <styles.InputContato
              type="text"
              placeholder={editandoNumero}
              value={editandoNumero}
              onChange={(evento) => setEditandoNumero(evento.target.value)}
            />
            <styles.InputContato
              type="text"
              placeholder={editandoEmail}
              value={editandoEmail}
              onChange={(evento) => setEditandoEmail(evento.target.value)}
            />
          </>
        ) : (
          <>
            <p>{numero}</p>
            <p>{email}</p>
          </>
        )}
      </styles.CamposContato>
      <styles.ActionBar>
        {!estaEditando ? (
          <>
            <styles.BotaoEditar onClick={() => setEstaEditando(true)}>
              Editar
            </styles.BotaoEditar>
            <styles.BotaoCancelar onClick={() => dispatch(remover(id))}>
              Remover
            </styles.BotaoCancelar>
          </>
        ) : (
          <>
            <styles.BotaoSalvar>Salvar</styles.BotaoSalvar>
            <styles.BotaoCancelar onClick={cancelarOperacao}>
              Cancelar
            </styles.BotaoCancelar>
          </>
        )}
      </styles.ActionBar>
    </styles.CardContato>
  )
}

export default Contato
