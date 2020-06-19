import React from 'react';
import auth from '@react-native-firebase/auth';
const Context = React.createContext();

class Provider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      loginState: false,
    };
  }

  componentDidMount = () => {
    console.log('vantu van tu');
    auth().onAuthStateChanged(this.onAuthStateChanged);
  };

  onAuthStateChanged = user => {
    if (!user) {
      this.setState({loginState: false});
    } else {
      this.setState({user: user, loginState: true});
    }
  };

  render() {
    return (
      <Context.Provider
        value={{
          user: this.state.user,
          loginState: this.state.loginState,
          onAuthStateChanged: this.onAuthStateChanged,
        }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Provider;
export {Context};
