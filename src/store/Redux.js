import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

// Create a slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment: (state) => {
      state.counter += 5;
    },
    decrement: (state) => {
      state.counter -= 5;
    },
    toggleCounter: (state) => {
      state.showCounter = !state.showCounter;
    },
  },
});
const intialAuthState = {isAuthenticated : false}
const authSlice = createSlice({
  name : 'authentication',
  initialState:intialAuthState,
  reducers:{
    login(state){
      state.isAuthenticated = true

    },
    logout(state){
      state.isAuthenticated = false
    }
  }
})

// // Extract the action creators object and the reducer
// const { actions, reducer } = counterSlice;

// Export the action creators
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;


// Create the store using configureStore
const store = configureStore({
  reducer: { counter: counterSlice.reducer,auth : authSlice.reducer},
});

export default store;
