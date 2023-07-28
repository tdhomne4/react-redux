import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProduct, setUser, deleteUser } from "../../redux/actions/actions";
const Task4 = () => {
  const user = useSelector((state) => state.userReducers.user);
  const product = useSelector((state) => state.userReducers.product);
  console.log(user);
  console.log(product);
  const newUser = {
    name: "tejaswini123",
    email: "tejaswini123@gmail.com",
  };

  const newProduct = {
    id: 1,
    name: "product1",
    price: 150,
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUser(newUser));
    dispatch(setProduct(newProduct));
  }, []);

  const deleteUserFunc = () => {
    dispatch(deleteUser());
    console.log(user);
  };
  return (
    <>
      <h4>Task4</h4>
      <button onClick={deleteUserFunc}>Delete user</button>
    </>
  );
};

export default Task4;
