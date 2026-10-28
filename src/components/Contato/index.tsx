import { Star } from 'lucide-react'
import * as styles from './styles'

const Contato = () => {
  return (
    <styles.CardContato>
      <styles.HeadContato>
        <h2>Nome da Pessoa</h2>
        <Star fill="white" stroke="none" />
      </styles.HeadContato>
      <styles.CategoriaContato>Amigo</styles.CategoriaContato>
      <styles.CamposContato>
        <p>99 99999-9999</p>
        <p>email@email.com</p>
      </styles.CamposContato>
      <styles.ActionBar>
        <styles.BotaoEditar>Editar</styles.BotaoEditar>
        <styles.BotaoCancelar>Cancelar</styles.BotaoCancelar>
      </styles.ActionBar>
    </styles.CardContato>
  )
}

export default Contato
