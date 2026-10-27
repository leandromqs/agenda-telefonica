import CardFiltro from '../../components/CardFiltro'
import BotaoNovoContato from '../../components/BotaoNovoContato'
import * as styles from './styles'

const BarraLateral = () => {
  return (
    <>
      <styles.DivLateral>
        <CardFiltro />
        <CardFiltro />
        <CardFiltro />
        <CardFiltro />
        <CardFiltro />
        <BotaoNovoContato />
      </styles.DivLateral>
    </>
  )
}

export default BarraLateral
