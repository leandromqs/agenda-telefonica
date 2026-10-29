import CardFiltro from '../../components/CardFiltro'
import BotaoNovoContato from '../../components/BotaoNovoContato'
import * as styles from './styles'
import * as enums from '../../utils/enums/Contato'

const BarraLateral = () => {
  return (
    <>
      <styles.DivLateral>
        <CardFiltro legenda={enums.Prioridade.TODOS} icon={1} />
        <CardFiltro legenda={enums.Prioridade.FAVORITOS} icon={2} />
        <CardFiltro legenda={enums.Prioridade.FAMÍLIA} icon={3} />
        <CardFiltro legenda={enums.Prioridade.AMIGOS} icon={4} />
        <CardFiltro legenda={enums.Prioridade.TRABALHO} icon={5} />
        <BotaoNovoContato />
      </styles.DivLateral>
    </>
  )
}

export default BarraLateral
