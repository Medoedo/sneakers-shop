import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import { useHttp } from "../../hook/http.hook";

const sneakersAdapter = createEntityAdapter()

const initialState = sneakersAdapter.getInitialState({
    searchTerm: "",
    sneakersLoadingStatus: "idle",
    showModal: false
})

export const sneakersFetch = createAsyncThunk(
    "sneakers/Fetch",
    () => {
        const { request } = useHttp()
        return request("http://localhost:3001/sneakers");
    }
)

const sneakersSlice = createSlice({
    name: "sneakers",
    initialState,
    reducers: {
        toggleFavorite: sneakersAdapter.updateOne,
        toggleCart: sneakersAdapter.updateOne,
        toggleModal(state) {
            state.showModal = !state.showModal;
        },
        onSearchInput(state, action) {
            state.searchTerm = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(sneakersFetch.pending, (state) => { state.sneakersLoadingStatus = "loading" })
            .addCase(sneakersFetch.fulfilled, (state, action) => {
                state.sneakersLoadingStatus = "idle";
                state.filteredSneakers = action.payload;
                sneakersAdapter.setAll(state, action.payload)
            })
            .addCase(sneakersFetch.rejected, (state) => { state.sneakersLoadingStatus = "error" })
            .addDefaultCase(() => { })
    }
})

export const { selectAll } = sneakersAdapter.getSelectors(state => state.sneakers);

const { reducer, actions } = sneakersSlice;

export const { toggleFavorite, toggleCart, toggleModal, onSearchInput } = actions;
export default reducer;