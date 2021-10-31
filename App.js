import * as React from 'react';

import Todo from './Todo';

// Import Redux
import store from './redux/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
}

export default App;