import { useDispatch } from 'react-redux'

import { alterarFiltro } from '../../store/reducers/filtros'
import { Blocks, Star, Heart, Handshake, Briefcase } from 'lucide-react'
import * as styles from './styles'
import * as enums from '../../utils/enums/Contato'

type Props = {
  legenda: string
  icon: number
}

const CardFiltro = ({ legenda, icon }: Props) => {
  const selecionarIcon = (icon: number) => {
    switch (icon) {
      case 1:
        return <Blocks />
      case 2:
        return <Star />
      case 3:
        return <Heart />
      case 4:
        return <Handshake />
      default:
        return <Briefcase />
    }
  }

  const dispatch = useDispatch()

  const filtrar = (evento: any) => {
    const enumSelect = () => {
      switch (evento) {
        case 'Todos':
          return enums.Propriedade.TODOS
        case 'Favoritos':
          return enums.Favoritos.FAVORITO
        case 'Família':
          return enums.Propriedade.FAMÍLIA
        case 'Amigos':
          return enums.Propriedade.AMIGOS
        default:
          return enums.Propriedade.TRABALHO
      }
    }
    dispatch(alterarFiltro(enumSelect()))
  }

  return (
    <>
      <styles.Card ativo onClick={() => filtrar(legenda)}>
        {selecionarIcon(icon)}
        <span>{legenda}</span>
      </styles.Card>
    </>
  )
}

export default CardFiltro
