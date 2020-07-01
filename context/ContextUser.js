import React, { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
const ContextUser = React.createContext();

function Provider(props) {
  const [user, setUser] = useState({});
  const [myCourseCurrent, setMyCourseCurrent] = useState([]);
  const [listMyCourse, setListMyCourse] = useState([]);
  const [loginState, setLoginState] = useState(false);
  const [indexCurrentUnit, setIndexCurrentUnit] = useState(-1);
  const [indexMyCourseCurrent, setIndexMyCourseCurrent] = useState(-1);
  const value = {
    user,
    setUser,
    loginState,
    setLoginState,
    setMyCourseCurrent,
    setListMyCourse,
    listMyCourse,
    myCourseCurrent,
    indexCurrentUnit,
    setIndexCurrentUnit,
    indexMyCourseCurrent,
    setIndexMyCourseCurrent,
  };
  return (
    <ContextUser.Provider value={value}>{props.children}</ContextUser.Provider>
  );
}

export default Provider;
export { ContextUser };
