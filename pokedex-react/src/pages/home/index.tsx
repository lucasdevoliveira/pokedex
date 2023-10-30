import { useEffect } from "react"
import Title from "../../components/ui/typography/title"
import Filters from "./components/filter-pokemons"
import PokemonList from "./components/pokemon-list"
import { useDispatch, useSelector } from "react-redux"
import { getAllPokemons } from "../../store/slices/pokemons"
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
      <PokemonList pokemons={getResultPokemons()} />
    </S.Container>
  )
}

export default Home