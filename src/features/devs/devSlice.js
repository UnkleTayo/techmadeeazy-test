import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  developerList: [],
  favoriteList: [],
  currencyList: [],
  selectedCurrency: null,
};

export const developerSlice = createSlice({
  name: 'developers',
  initialState,
  reducers: {
    setDevList: (state, action) => {
      state.developerList = action.payload;
    },

    handleFavList: (state, action) => {
      const itemIdx = state.developerList.find(
        (item) => item._id === action.payload
      );

      if (itemIdx.isisFavorite === false) {
        state.favoriteList.push(itemIdx);
      }

      if (itemIdx.isisFavorite === true) {
        state.favoriteList.filter((item) => item._id !== action.payload);
      }

      console.log(current(state.favoriteList));
    },

    setCurrencyList: (state, action) => {
      state.currencyList = action.payload;
    },

    setExchangeCurrency: (state, action) => {
      state.selectedCurrency = action.payload;
    },
  },
});

export const {
  setDevList,
  handleFavList,
  setCurrencyList,
  setExchangeCurrency,
} = developerSlice.actions;

export const selectDevList = (state) => state;

export default developerSlice.reducer;
