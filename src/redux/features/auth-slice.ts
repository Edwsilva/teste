import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthInfoState } from '@/app/utils/types';

const initialState: AuthInfoState = {
  authenticated: false,
  userInfo: {
    name: '',
    email: '',
    token: '',
  },
};

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogIn: (state, action: PayloadAction<AuthInfoState>) => {
      console.log('ESTOU NO AUTH', action.payload);
      state.authenticated = action.payload.authenticated;
      state.userInfo = action.payload.userInfo;
    },

    setLogOut: (state, action: PayloadAction) => {},
  },
});

export const authActions = auth.actions;
export default auth.reducer;
