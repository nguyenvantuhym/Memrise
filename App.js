import React from 'react';
import AppNavigator from './AppNavigator';

import Provider from './context/ContextUser';

function App() {
  return (
    <Provider>
      <AppNavigator />
    </Provider>
  );
}
export default App;
