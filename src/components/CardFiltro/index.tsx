import { Blocks, Star, Heart, Handshake, Briefcase } from 'lucide-react'
import * as styles from './styles'

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

  return (
    <>
      <styles.Card>
        {selecionarIcon(icon)}
        <span>{legenda}</span>
      </styles.Card>
    </>
  )
}

export default CardFiltro
