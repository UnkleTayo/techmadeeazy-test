import { createSlice } from '@reduxjs/toolkit';

const localDev = JSON.parse(localStorage.getItem('Dev-hire'));

const initialState = {
  developerList: localDev || [],
  favoriteList: localDev.filter((item) => item.isFavorite === true) || [],
  currencyList: [],
  selectedCurrency: null,
};

export const developerSlice = createSlice({
  name: 'developers',
  initialState,
  reducers: {
    setDevList: (state, action) => {
      if (localDev) return;
      state.developerList = action.payload;
      localStorage.setItem('Dev-hire', JSON.stringify(state.developerList));
    },

    handleLike: (state, action) => {
      let likedItem = state.developerList.findIndex(
        (item) => item._id === action.payload
      );
      const item = {
        ...state.developerList[likedItem],
        isFavorite: true,
      };
      state.developerList[likedItem] = item;
      localStorage.setItem('Dev-hire', JSON.stringify(state.developerList));
      state.favoriteList.push(state.developerList[likedItem]);
    },

    handleUnlike: (state, action) => {
      let likedItem = state.developerList.findIndex(
        (item) => item._id === action.payload
      );

      const item = {
        ...state.developerList[likedItem],
        isFavorite: false,
      };

      state.developerList[likedItem] = item;
      localStorage.setItem('Dev-hire', JSON.stringify(state.developerList));
      const indexInFilterList = state.favoriteList.findIndex(
        (dev) => dev._id === item._id
      );

      state.favoriteList.splice(indexInFilterList, 1);
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
  handleLike,
  handleUnlike,
  setCurrencyList,
  setExchangeCurrency,
} = developerSlice.actions;

export const selectDevList = (state) => state;

export default developerSlice.reducer;
