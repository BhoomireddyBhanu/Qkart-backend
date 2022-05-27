import Register from "./components/Register";
import ipConfig from "./ipConfig.json";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Products from "./components/Products";
import Checkout from "./components/Checkout";
import Thanks from "./components/Thanks"

export const config = {
  endpoint: `http://qkart-frontendbhoomireddybhanu.herokuapp.com/api/v1`,
};

function App() {
  return (
    <div className="App">
      <Switch>
          
          <Route path="/register">
            <Register />
          // </Route>
          // <Route path="/login">
          //   <Login />
          // </Route>
          
          // <Route exact path="/">
          //   <Products />
          // </Route>

          //       <Route exact path='/' component={Products}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/register' component={Register}/>
      <Route exact path='/checkout' component={Checkout}/>
      <Route exact path='/thanks' component={Thanks}/>
          
        </Switch>
    </div>
  );
}

export default App;
