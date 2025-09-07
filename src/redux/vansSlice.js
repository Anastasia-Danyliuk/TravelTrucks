import { createSlice } from "@reduxjs/toolkit";

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
    vans: [],
    filteredVans: [],
    selectedVans: [],
    favorites: [],
    filters: { ...initialFilters },
    temporaryFilters: { ...initialFilters },
  },

  reducers: {
    setVans: (state, action) => {
      state.vans = action.payload;
      state.filteredVans = action.payload;
    },

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
      const forms = state.filters.forms;
      state.filters.forms = forms.includes(formType)
          ? forms.filter((f) => f !== formType)
          : [...forms, formType];
    },

    toggleVanSelection: (state, action) => {
      const vanId = action.payload;
      state.selectedVans = state.selectedVans.includes(vanId)
          ? state.selectedVans.filter((id) => id !== vanId)
          : [...state.selectedVans, vanId];
    },

    toggleFilter: (state, action) => {
      const filterName = action.payload;
      state.filters[filterName] = !state.filters[filterName];
    },

    toggleFavorite: (state, action) => {
      const vanId = action.payload;
      state.favorites = state.favorites.includes(vanId)
          ? state.favorites.filter((id) => id !== vanId)
          : [...state.favorites, vanId];
    },

    applyFilters: (state) => {
      const { filters, vans } = state;
      state.filteredVans = vans.filter((van) =>
          (filters.AC ? van.AC : true) &&
          (filters.TV ? van.TV : true) &&
          (filters.kitchen ? van.kitchen : true) &&
          (filters.bathroom ? van.bathroom : true) &&
          (filters.transmission ? van.transmission === filters.transmission : true) &&
          (filters.location ? van.location.includes(filters.location) : true) &&
          (filters.forms.length ? filters.forms.includes(van.form) : true)
      );
    },

    resetFilters: (state) => {
      state.filters = { ...initialFilters };
      state.temporaryFilters = { ...initialFilters };
    },
  },
});

export const {
  setVans,
  setActiveFilters,
  applyFilters,
  toggleFilter,
  setTransmission,
  setLocation,
  setForm,
  resetFilters,
  toggleForm,
  toggleFavorite,
  toggleVanSelection,
} = vansSlice.actions;

export default vansSlice.reducer;
