import { User } from "../types/User";

export interface IAuthState {
  userLoggedIn: boolean,
  user: User
};

export type AuthActions = {
  type: 'login' | 'logout' | 'setUser',
  payload?: any
};

export const InitialAuthState: IAuthState = {
  userLoggedIn: false,
  user: {
    id: '',
    fullName: '',
    isMember: false,
    email: '',
    admin: false,
    age: ''
  },

}

export const AuthReducer = (state: IAuthState, action: AuthActions) => {
  switch (action.type) {
    case 'login':{
      return { ...state, userLoggedIn: true }
      break;
    }
    case 'logout': {
      return { ...state, userLoggedIn: false }
      break;
    }
    case 'setUser': {
      return { ...state, user: action.payload }
    }
    default: {
      return state;
      break;
    }
  }
}


