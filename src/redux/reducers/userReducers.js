import { ActionTypes } from "../constants/actions-type";

const initialUserState = {
  user: [],
  product: [],
};

export const userReducers = (state = initialUserState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_USER:
      return { ...state, user: payload };

    case ActionTypes.SET_PRODUCT:
      return { ...state, product: payload };
    case ActionTypes.DELETE_USER:
      return { ...state, user: null };
    default:
      return state;
  }
};
