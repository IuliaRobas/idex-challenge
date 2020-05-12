import React from "react";
import "./App.css";

import Contact from "./components/Pages/Contact/Contact";
import Profile from "./components/Pages/Profile/Profile.js";
import { Layout } from "./components/UI/Layout";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Layout>
            <Route exact path="/" component={Profile} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/contact" component={Contact} />
          </Layout>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
