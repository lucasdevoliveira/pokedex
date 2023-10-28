import Title from "../../components/ui/typography/title"
import Filters from "./components/filter-pokemons"
import * as S from "./styles"

const Home = () => {
  return (
    <S.Container>
      <Title>Pokémons</Title>
      <Filters />
    </S.Container>
  )
}

export default Home