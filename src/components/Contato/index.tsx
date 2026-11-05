import { useDispatch, useSelector } from 'react-redux'

import { Star } from 'lucide-react'
import * as styles from './styles'
import * as enums from '../../utils/enums/Contato'
import { editar, favoritar, remover } from '../../store/reducers/contato'
import { useState } from 'react'
import type { RootState } from '../../store'

type ContatoProsp = {
  nome: string
  tipo: enums.Propriedade
  favorito: boolean
  numero: string
  email: string
  id: number
}

const Contato = ({ nome, tipo, favorito, numero, email, id }: ContatoProsp) => {
  const dispatch = useDispatch()
  const [editandoNumero, setEditandoNumero] = useState(numero)
  const [editandoEmail, setEditandoEmail] = useState(email)
  const [estaEditando, setEstaEditando] = useState(false)

  const isFavorito = useSelector(
    (state: RootState) =>
      state.contatos.itens.find((item) => item.id === id)?.favorito
  )

  const cancelarOperacao = () => {
    setEstaEditando(false)
    setEditandoNumero(numero)
    setEditandoEmail(email)
  }

  const setFavorito = () => {
    dispatch(favoritar({ nome, tipo, favorito: !favorito, numero, email, id }))
  }

  return (
    <styles.CardContato>
      <styles.HeadContato>
        <h2>{nome}</h2>
        <Star
          fill={isFavorito ? 'gold' : 'white'}
          stroke="none"
          onClick={setFavorito}
        />
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
            <h4>{numero}</h4>
            <h4>{email}</h4>
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
            <styles.BotaoSalvar
              onClick={() =>
                dispatch(
                  editar({
                    nome,
                    tipo,
                    favorito,
                    numero: editandoNumero,
                    email: editandoEmail,
                    id
                  }),
                  setEstaEditando(false)
                )
              }
            >
              Salvar
            </styles.BotaoSalvar>
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
