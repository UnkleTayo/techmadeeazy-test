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

    handleLike: (state, action) => {
      let likedItem = state.developerList.findIndex(
        (item) => item._id === action.payload
      );
      const item = {
        ...state.developerList[likedItem],
        isFavorite: true,
      };
      state.developerList[likedItem] = item;
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
