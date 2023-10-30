import { useState } from "react"
import TextInput from "../../../../components/ui/form/text-input"
import Button from "../../../../components/ui/form/button"
import ModalFilterPokemons from "../modal-filter-pokemons"
import { useDispatch } from "react-redux"
import { getPokemonsByName, setNameOnFilter } from "../../../../store/slices/pokemons"
import * as S from "./styles"

const Filters = () => {
  const dispatch = useDispatch()
  const [openModalFilter, setOpenModalFilter] = useState(false)

  const filterByName = (name: string) => {
    dispatch(setNameOnFilter(name))
  }

  return (
    <S.Container>
      <TextInput 
        label="Nome:" 
        placeholder="Pesquisar pelo nome ou número"
        onChange={(event: any) => filterByName(event.target.value)}
      />
      <Button 
        onClick={() => setOpenModalFilter(!openModalFilter)}>
        Filtrar por
      </Button>
      <ModalFilterPokemons 
        open={openModalFilter} 
        onClose={() => setOpenModalFilter(false)}
        onFilter={() => console.log('filter')}
      />
    </S.Container>
  )
}

export default Filters