import * as S from "./styles"

const PokemonList = ({ pokemons }: any) => {
  return (
    <S.Container>
      { 
        pokemons.map((item: any, key: number) => {
          if (!item.evolution) {
            return (
              <S.Pokemon key={key}>
                <div className="image">
                  <img src={item.sprites.large} />
                </div>
                <div className="infos">
                  <span className="number">n° {item.national_number}</span>
                  <span className="name">{ item.name }</span>
                  <div className="type-list">
                    {
                      item.type.map((type: any, key: number) => {
                        return (
                          <S.Type type={type} key={key}>
                            <span className="name">{ type }</span>
                          </S.Type>
                        )
                      })
                    }
                  </div>
                </div>
                
              </S.Pokemon>
            )
          }
        })
      }
    </S.Container>
  )
}

export default PokemonList