import { useState } from "react"
import TextInput from "../../../../components/ui/form/text-input"
import Button from "../../../../components/ui/form/button"
import ModalFilterPokemons from "../modal-filter-pokemons"
import * as S from "./styles"

const Filters = () => {
  const [openModalFilter, setOpenModalFilter] = useState(false)

  return (
    <S.Container>
      <TextInput 
        label="Nome:" 
        placeholder="Pesquisar pelo nome ou número" 
      />
      <Button 
        onClick={() => setOpenModalFilter(!openModalFilter)}>
        Filtrar por
      </Button>
      <ModalFilterPokemons 
        open={openModalFilter} 
        onClose={() => setOpenModalFilter(false)}
      />
    </S.Container>
  )
}

export default Filters