import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const getAllPokemons = createAsyncThunk<any>('pokemons/getAllPokemons', async () => {
  const response = await fetch('https://unpkg.com/pokemons@1.1.0/pokemons.json');
	const { results } = await response.json();
  const types = results.flatMap((item: any) => item.type).filter((item: any, index: any, self: any) => self.indexOf(item) === index);
  const typeFilters = types.map((type: any) => {
    return {
      label: type,
      selected: false
    }
  })

	return {
    pokemons: results,
    types: typeFilters
  }
})

export const getPokemonsByName = createAsyncThunk('pokemons/getPokemonsByName', async ({ name }: any) => {
  const response = await fetch('https://unpkg.com/pokemons@1.1.0/pokemons.json');
	const { results } = await response.json();
  const resultFiltered = results.filter((item: any) => item.name.toLowerCase().includes(name))
	return resultFiltered;
})

export const PokemonSlice = createSlice({
  name: "pokemons",
  initialState: {
    data: [],
    filter: {
      name: '',
      order: '',
      favorites: false,
      type: [],
      result: []
    },
    isLoading: false
  },
  reducers: {
    getResultFilter: (state: any) => {
      let result: any = []
      result = state.data.filter((item: any) => item.name.toLowerCase().includes(state.filter.name))
      if (state.filter.order) {
        if (state.filter.order.value === 'menor-numero') {
          result.sort()
        }
        if (state.filter.order.value === 'maior-numero') {
          result.reverse()
        }
      }
      const typesSelecteds = state.filter.type.map((item: any) => {
        if (item.selected) {
          return item.label
        }
      }).filter((type: any) => type)

      if (typesSelecteds.length) {
        result = result.filter((item: any) => {
          const hasPokemon = item.type.some((value: any) => {
            return typesSelecteds.includes(value)
          })
          if (hasPokemon) {
            return item
          }
        })
      }
      state.filter.result = result
    },
    setNameOnFilter: (state, action) => {
      state.filter.name = action.payload 
      PokemonSlice.caseReducers.getResultFilter(state)
    },
    setOrderOnFilter: (state, action) => {
      state.filter.order = action.payload 
      PokemonSlice.caseReducers.getResultFilter(state)
    },
    setFavoritesOnFilter: (state, action) => {
      state.filter.favorites = action.payload 
      PokemonSlice.caseReducers.getResultFilter(state)
    },
    setTypeOnFilter: (state, action) => {
      state.filter.type = action.payload 
      PokemonSlice.caseReducers.getResultFilter(state)
    }
  },
  extraReducers(builder) {
    builder.addCase(getAllPokemons.pending, (state) => {
      state.isLoading = true
    }),
    builder.addCase(getAllPokemons.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload.pokemons
      state.filter.type = action.payload.types
    }),
    builder.addCase(getPokemonsByName.pending, (state) => {
      state.isLoading = true
    }),
    builder.addCase(getPokemonsByName.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
    })
  },
})

export const { setNameOnFilter, setOrderOnFilter, setFavoritesOnFilter, setTypeOnFilter } = PokemonSlice.actions

export default PokemonSlice.reducer