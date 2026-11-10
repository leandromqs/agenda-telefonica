import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { InputContato } from '../../components/Contato/styles'
import { cadastrar } from '../../store/reducers/contato'
import * as styles from './styles'
import * as enums from '../../utils/enums/Contato'

const TelaCadastro = () => {
  const [nomeContato, setNomeContato] = useState('')
  const [numeroContato, setNumeroContato] = useState('')
  const [emailContato, setEmailContato] = useState('')
  const [tipContato, setTipoContato] = useState('')

  const dispatch = useDispatch()

  const tipoConvertido = (tipContato: string) => {
    switch (tipContato) {
      case 'Família':
        return enums.Propriedade.FAMÍLIA
      case 'Amigos':
        return enums.Propriedade.AMIGOS
      case 'Colega':
        return enums.Propriedade.TRABALHO
      default:
        return enums.Propriedade.TODOS
    }
  }

  return (
    <styles.ContainerNovoContato>
      <styles.DivNovoContato>
        <styles.TituloContato>Adiconar novo contato</styles.TituloContato>
        <styles.InfoContato>
          <styles.InputContatoN
            required
            type="text"
            placeholder="Nome"
            onChange={(e) => {
              setNomeContato(e.target.value)
            }}
          />
          <InputContato
            mask={[{ mask: '(00) 0000-0000' }, { mask: '(00) 00000-0000' }]}
            required
            type="text"
            placeholder="Telefone"
            onChange={(e) => {
              setNumeroContato(e.target.value)
            }}
          />
          <styles.InputContatoN
            type="text"
            placeholder="E-mail"
            onChange={(e) => {
              setEmailContato(e.target.value)
            }}
          />
          <styles.DivRadius
            onChange={(e) => {
              setTipoContato(e.target.value as enums.Propriedade)
            }}
          >
            <input type="radio" name="Tipo" value={enums.Propriedade.FAMÍLIA} />{' '}
            <styles.LabelContato htmlFor="Familia">
              {enums.Propriedade.FAMÍLIA}
            </styles.LabelContato>
            <input type="radio" name="Tipo" value={enums.Propriedade.AMIGOS} />{' '}
            <styles.LabelContato htmlFor="">
              {enums.Propriedade.AMIGOS}
            </styles.LabelContato>
            <input
              type="radio"
              name="Tipo"
              defaultChecked
              value={enums.Propriedade.TRABALHO}
            />{' '}
            <styles.LabelContato htmlFor="">
              {enums.Propriedade.TRABALHO}
            </styles.LabelContato>
          </styles.DivRadius>
          <styles.BotaoCadastrar
            onClick={() => {
              dispatch(
                cadastrar({
                  nome: nomeContato,
                  tipo: tipoConvertido(tipContato),
                  favorito: false,
                  numero: numeroContato,
                  email: emailContato
                })
              )
            }}
          >
            Cadastrar
          </styles.BotaoCadastrar>
          <styles.BotaoVoltar to="/">Voltar</styles.BotaoVoltar>
        </styles.InfoContato>
      </styles.DivNovoContato>
    </styles.ContainerNovoContato>
  )
}

export default TelaCadastro
