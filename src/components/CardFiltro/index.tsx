import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { alterarFiltro } from '../../store/reducers/filtros'
import { Blocks, Star, Heart, Handshake, Briefcase } from 'lucide-react'
import * as styles from './styles'
import * as enums from '../../utils/enums/Contato'
import type { RootState } from '../../store'

type Props = {
  legenda: enums.Propriedade
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
  const { filtros } = useSelector((state: RootState) => state)
  const [isAtivo, setIsAtivo] = useState(false)

  const dispatch = useDispatch()

  const filtrar = (legenda: any) => {
    dispatch(alterarFiltro(legenda))
  }

  const ativar = () => {
    const propAtiva = filtros.propriedade === legenda
    return propAtiva
  }

  return (
    <>
      <styles.Card ativo={ativar()} onClick={() => filtrar(legenda)}>
        {selecionarIcon(icon)}
        <span>{legenda}</span>
      </styles.Card>
    </>
  )
}

export default CardFiltro
