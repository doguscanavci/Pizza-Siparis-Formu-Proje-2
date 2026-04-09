import React, { useState } from 'react'; // useState eklendi
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import OrderPizza from './components/OrderPizza';
import Success from './components/Success';

function App() {
  const [orderData, setOrderData] = useState(null);

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/pizza">
        <OrderPizza setOrderData={setOrderData} />
      </Route>
      <Route path="/success">
        <Success orderData={orderData} />
      </Route>
    </Switch>
  );
}

export default App;