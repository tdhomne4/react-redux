//create actions for setname and setemail

import { ActionTypes } from "../constants/actions-type";

export const setUser = (user) => {
  return {
    type: ActionTypes.SET_USER,
    payload: user,
  };
};

export const setProduct = (product) => {
  return {
    type: ActionTypes.SET_PRODUCT,
    payload: product,
  };
};

export const deleteUser = () => {
  return {
    type: ActionTypes.DELETE_USER,
  };
};
