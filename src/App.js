import React from "react";
import Inter from "../src/Components/Inter"
import {Switch, Route} from 'react-router-dom'
import Cadastro from "./Components/Cadastro"


export default function App() {
  return (
        <>
          <Switch>
              
              <Route path="/Cadastro" render={(props) => <Cadastro/>} exact/>
              <Route path="/" component={Inter} exact/>
              <Route path="/Inter" render={(props) => <Inter/>} exact/>
              
          </Switch>
        </>
  );
}
