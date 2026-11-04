import CardFiltro from '../../components/CardFiltro'
import BotaoNovoContato from '../../components/BotaoNovoContato'
import * as styles from './styles'
import * as enums from '../../utils/enums/Contato'

const BarraLateral = () => {
  return (
    <>
      <styles.DivLateral>
        <CardFiltro legenda={enums.Propriedade.TODOS} icon={1} />
        <CardFiltro legenda={enums.Favoritos.FAVORITO} icon={2} />
        <CardFiltro legenda={enums.Propriedade.FAMÍLIA} icon={3} />
        <CardFiltro legenda={enums.Propriedade.AMIGOS} icon={4} />
        <CardFiltro legenda={enums.Propriedade.TRABALHO} icon={5} />
        <BotaoNovoContato />
      </styles.DivLateral>
    </>
  )
}

export default BarraLateral
