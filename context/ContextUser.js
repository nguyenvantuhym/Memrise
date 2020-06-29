import React, { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
const Context = React.createContext();

function Provider(props) {
  const [user, setUser] = useState({});
  const [myCourseCurrent, setMyCourseCurrent] = useState([]);
  const [listMyCourse, setListMyCourse] = useState([]);
  const [loginState, setLoginState] = useState(false);
  const value = {
    user,
    setUser,
    loginState,
    setLoginState,
    setMyCourseCurrent,
    setListMyCourse,
    listMyCourse,
    myCourseCurrent,
  };
  return <Context.Provider value={value}>{props.children}</Context.Provider>;
}

export default Provider;
export { Context };
