import React from 'react'
import Product from './components/Product';
import { StoreProvider } from './context/StoreContext';
function App() {
  return (
    <div className="App">
        <StoreProvider>
          <Product></Product>
        </StoreProvider>
    </div>
  );
}

export default App;
