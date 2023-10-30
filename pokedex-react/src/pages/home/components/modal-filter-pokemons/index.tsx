import { useEffect, useState } from "react"
import * as S from "./styles"
import Modal from "../../../../components/ui/modal"
import Title from "../../../../components/ui/typography/title"
import ToggleInput from "../../../../components/ui/form/toggle-input"
import SelectInput from "../../../../components/ui/form/select-input"
import ChipsInput from "../../../../components/ui/form/chips-inputs"
import { useDispatch, useSelector } from "react-redux"
import { setOrderOnFilter, setFavoritesOnFilter, setTypeOnFilter } from "../../../../store/slices/pokemons"
import Button from "../../../../components/ui/form/button"

const ModalFilterPokemons = ({ open = false, onClose, onFilter }: any) => {
  const dispatch = useDispatch()
  const pokemons = useSelector((state: any) => state.pokemons)

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

  const filter = () => {
    onFilter()
    onClose()
  }

  return (
    <>
      { open 
        ? (
          <S.Container>
            <Modal onClose={() => onClose()}>
              <S.Content>
                <Title>Filtrar por:</Title>
                <S.Inputs>
                  <SelectInput 
                    label="Ordens" 
                    placeholder="Selecione uma opção" 
                    options={options}
                    value={pokemons.filter.order}
                    onChange={(value: string) => dispatch(setOrderOnFilter(value))}
                  />
                  <ToggleInput 
                    label="Favoritos" 
                    onChange={(status: boolean) => dispatch(setFavoritesOnFilter(status))}
                  />
                  <ChipsInput 
                    label="Tipos" 
                    data={pokemons.filter.type}
                    onChange={(item: any) => {
                      let result = []
                      result = [...pokemons.filter.type]
                      const resultComputed = result.map((type: any) => {
                        if (type.label === item.label) {
                          return {
                            label: item.label,
                            selected: item.selected
                          }
                        }
                        return type
                      })
                      dispatch(setTypeOnFilter(resultComputed))
                    }}
                  />
                </S.Inputs>
                <Button onClick={() => filter()}>Filtrar</Button>
              </S.Content>
            </Modal>
          </S.Container> 
        )
        : null
      }
    </>
  )
}

export default ModalFilterPokemons