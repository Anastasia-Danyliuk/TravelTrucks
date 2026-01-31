import { createSlice } from "@reduxjs/toolkit";
import { fetchVans } from "./operations";


const initialFilters = {
    AC: false,
    TV: false,
    kitchen: false,
    bathroom: false,
    transmission: "",
    location: "",
    forms: [],
};

const vansSlice = createSlice({
    name: "vans",
    initialState: {
        items: [],
        filteredVans: [],
        favorites: JSON.parse(localStorage.getItem("favorites")) || [],
        isLoading: false,
        error: null,
        filters: { ...initialFilters },
        temporaryFilters: { ...initialFilters },
    },

    reducers: {
        setLocation: (state, action) => {
            state.temporaryFilters.location = action.payload;
        },
        setForm: (state, action) => {
            state.temporaryFilters.forms = action.payload;
        },
        setActiveFilters: (state) => {
            state.filters = { ...state.temporaryFilters };
        },
        setTransmission: (state, action) => {
            const value = action.payload?.value || "";
            state.temporaryFilters.transmission = value;
            state.filters.transmission = value;
        },
        toggleForm: (state, action) => {
            const formType = action.payload;
            const forms = state.temporaryFilters.forms;
            state.temporaryFilters.forms = forms.includes(formType)
                ? forms.filter((f) => f !== formType)
                : [...forms, formType];
        },
        toggleFilter: (state, action) => {
            const filterName = action.payload;
            state.temporaryFilters[filterName] = !state.temporaryFilters[filterName];
        },
        toggleFavorite: (state, action) => {
            const vanId = action.payload;
            if (state.favorites.includes(vanId)) {
                state.favorites = state.favorites.filter(id => id !== vanId);
            } else {
                state.favorites.push(vanId);
            }
            localStorage.setItem("favorites", JSON.stringify(state.favorites));
        },
        applyFilters: (state) => {
            const { filters, items } = state;

            state.filteredVans = items.filter((van) => {
                const matchesAC = filters.AC ? van.AC === true : true;
                const matchesTV = filters.TV ? van.TV === true : true;
                const matchesKitchen = filters.kitchen ? van.kitchen === true : true;
                const matchesBathroom = filters.bathroom ? van.bathroom === true : true;

                const matchesTransmission = filters.transmission
                    ? van.transmission.toLowerCase() === filters.transmission.toLowerCase()
                    : true;

                const matchesLocation = filters.location
                    ? van.location.toLowerCase().includes(filters.location.toLowerCase())
                    : true;

                const matchesForm = filters.forms.length > 0
                    ? filters.forms.includes(van.form)
                    : true;

                return matchesAC && matchesTV && matchesKitchen && matchesBathroom &&
                    matchesTransmission && matchesLocation && matchesForm;
            });
        },
        resetFilters: (state) => {
            state.filters = { ...initialFilters };
            state.temporaryFilters = { ...initialFilters };
            state.filteredVans = state.items;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchVans.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchVans.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = action.payload;
                state.filteredVans = action.payload;
            })
            .addCase(fetchVans.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const {
    setActiveFilters,
    applyFilters,
    toggleFilter,
    setTransmission,
    setLocation,
    setForm,
    resetFilters,
    toggleForm,
    toggleFavorite,
} = vansSlice.actions;

export default vansSlice.reducer;

export const selectVans = (state) => state.vans.items;
export const selectIsLoading = (state) => state.vans.isLoading;
export const selectError = (state) => state.vans.error;
export const selectFavorites = (state) => state.vans.favorites;
export const selectFilteredVans = (state) => state.vans.filteredVans;
export const selectFilters = (state) => state.vans.filters;

export const selectVanById = (state, id) => {
    return state.vans.items.find((van) => van.id === id);
};