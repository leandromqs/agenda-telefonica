import * as enums from '../utils/enums/Contato'

class Contato {
  nome: string
  tipo: enums.Propriedade
  favorito: boolean
  numero: string
  email: string
  id: number

  constructor(
    nome: string,
    tipo: enums.Propriedade,
    favorito: boolean,
    numero: string,
    email: string,
    id: number
  ) {
    this.nome = nome
    this.tipo = tipo
    this.favorito = favorito
    this.numero = numero
    this.email = email
    this.id = id
  }
}

export default Contato
