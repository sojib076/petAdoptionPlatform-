import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  loggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.loggedIn = true;
      // Save user data to local storage
      localStorage.setItem('userEmail', JSON.stringify(action.payload.email));
    },
    clearUserInfo: (state) => {
      state.name = '';
      state.email = '';
      state.loggedIn = false;
      // Clear user data from local storage
      localStorage.removeItem('userEmail');
    },
  },
});

export const { setUserInfo, clearUserInfo } = userSlice.actions;
export default userSlice.reducer;