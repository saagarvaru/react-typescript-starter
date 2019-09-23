import React, { createContext, useReducer, Dispatch } from "react"
import { AuthReducer, InitialAuthState, IAuthState, AuthActions } from '../reducers/authReducer';

interface IContextProps {
  authState: IAuthState;
  dispatch: Dispatch<AuthActions>
}

export const AuthStore = createContext({} as IContextProps);


export const AuthStoreProvider = (props: any) => {

  const [state, dispatch] = useReducer(AuthReducer, InitialAuthState);
  const value = { authState: state, dispatch }
  return (
    <AuthStore.Provider value={value}>
      {props.children}
    </AuthStore.Provider>
  )
};

