import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const getAllPokemons = createAsyncThunk('pokemons/getAllPokemons', async () => {
  const response = await fetch('https://unpkg.com/pokemons@1.1.0/pokemons.json');
	const { results } = await response.json();
	return results;
})

export const PokemonSlice = createSlice({
  name: "pokemons",
  initialState: {
    data: [],
    isLoading: false
  },
  reducers: {
    getPokemonList: (state) => {
      state.data
    }
  },
  extraReducers(builder) {
    builder.addCase(getAllPokemons.pending, (state) => {
      state.isLoading = true
    }),
    builder.addCase(getAllPokemons.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
    })
  },
})

export const { getPokemonList } = PokemonSlice.actions
export default PokemonSlice.reducer