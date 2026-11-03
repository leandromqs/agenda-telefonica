import * as enums from '../utils/enums/Contato'

class Contato {
  nome: string
  tipo: enums.Propriedade
  numero: string
  email: string
  id: number

  constructor(
    nome: string,
    tipo: enums.Propriedade,
    numero: string,
    email: string,
    id: number
  ) {
    this.nome = nome
    this.tipo = tipo
    this.numero = numero
    this.email = email
    this.id = id
  }
}

export default Contato
