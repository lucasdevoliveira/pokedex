import { useEffect } from "react"
import Title from "../../components/ui/typography/title"
import Filters from "./components/filter-pokemons"
import PokemonList from "./components/pokemon-list"
import { useDispatch, useSelector } from "react-redux"
import { getAllPokemons, setTypeOnFilter } from "../../store/slices/pokemons"
import ChipsInput from "../../components/ui/form/chips-inputs"
import * as S from "./styles"

const Home = () => {
  const dispatch = useDispatch()
  const pokemons = useSelector((state: any) => state.pokemons)

  const getResultPokemons = () => {
    return pokemons.filter.result.length ? pokemons.filter.result : pokemons.data
  }

  useEffect(() => {
    dispatch(getAllPokemons())
  }, [])

  return (
    <S.Container>
      <Title>Pokémons</Title>
      <Filters />
      <S.Content>
        <S.Menu>
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
        </S.Menu>
        <PokemonList pokemons={getResultPokemons()} />
      </S.Content>
    </S.Container>
  )
}

export default Home