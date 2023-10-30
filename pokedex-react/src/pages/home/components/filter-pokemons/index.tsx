import { useState } from "react"
import TextInput from "../../../../components/ui/form/text-input"
import Button from "../../../../components/ui/form/button"
import ModalFilterPokemons from "../modal-filter-pokemons"
import { useDispatch, useSelector } from "react-redux"
import { setNameOnFilter } from "../../../../store/slices/pokemons"
import SelectInput from "../../../../components/ui/form/select-input"
import { setOrderOnFilter } from "../../../../store/slices/pokemons"
import * as S from "./styles"

const Filters = () => {
  const dispatch = useDispatch()
  const pokemons = useSelector((state: any) => state.pokemons)
  const [openModalFilter, setOpenModalFilter] = useState(false)
  const options = [
    {
      label: 'Menor número',
      value: 'menor-numero'
    },
    {
      label: 'Maior número',
      value: 'maior-numero'
    },
  ]

  const filterByName = (name: string) => {
    dispatch(setNameOnFilter(name))
  }

  return (
    <S.Container>
      <TextInput 
        className="name-input"
        label="Nome:" 
        placeholder="Pesquisar pelo nome ou número"
        onChange={(event: any) => filterByName(event.target.value)}
      />
      <SelectInput 
        className="order-input"
        label="Ordens" 
        placeholder="Selecione uma opção" 
        options={options}
        value={pokemons.filter.order}
        onChange={(value: string) => dispatch(setOrderOnFilter(value))}
      />
      <Button 
        className="button"
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